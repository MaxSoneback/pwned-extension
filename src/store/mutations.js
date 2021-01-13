import getters from "./getters";
import helpers from "./helpers";
import Vue from "vue";

const axios = require("axios");
const URL = "https://haveibeenpwned.com/unifiedsearch/";

const addEmail = (state, email) => {
  let emailObj = getters.getEmailObjectByName(state, email);
  console.log(emailObj);
  if (typeof emailObj === "undefined") {
    let date = new Date();
    date.setDate(date.getDate()); // set a valid date but show that it has not been updated in a while
    let emailObj = {
      email: email,
      breaches: [],
      lastUpdated: date
    };
    state.emailObjects.push(emailObj);
    loadBreaches(state, emailObj);
  } else {
    console.warn("Email already in the list");
  }
};

const updateBreaches = (state, newBreaches) => {
  newBreaches.forEach(newBreach => {
    let index = state.breaches.findIndex(oldBreach => {
      return (
        newBreach["name"] === oldBreach["name"] &&
        newBreach["breach_date"].getTime() == oldBreach["breach_date"].getTime()
      );
    });
    if (index != -1) {
      console.log(index);
      Vue.set(state.breaches, index, newBreach);
    } else {
      state.breaches.push(newBreach);
    }
  });
};

const loadBreaches = async (state, emailObj) => {
  let email = emailObj["email"];
  try {
    let res = await axios.get(URL + email);
    let breachesData = res["data"]["Breaches"];
    let breachList = [];
    breachesData.forEach(data => {
      let breachObj = helpers.createBreachObject(data);
      breachList.push(breachObj);
    });

    updateBreaches(state, breachList);
    const index = state.emailObjects.indexOf(emailObj);
    let breachNameList = breachList.map(obj => {
      return {
        name: obj.name,
        breach_date: obj.breach_date
      };
    });
    Vue.set(state.emailObjects[index], "breaches", breachNameList);
    localStorage.setItem("emailObjects", JSON.stringify(state.emailObjects));
    localStorage.setItem("breaches", JSON.stringify(state.breaches));
    console.log(window.store);
  } catch (error) {
    console.error(error);
  }
  let date = new Date();
  localStorage.setItem("lastUpdate", date.getTime());
  //state.lastUpdate = date.getTime();
};

const initStore = state => {
  let emailObjects = JSON.parse(
    localStorage.getItem("emailObjects"),
    helpers.parseDate
  );
  if (emailObjects != null) {
    state.emailObjects = emailObjects;
  }
  let breaches = JSON.parse(
    localStorage.getItem("breaches"),
    helpers.parseDate
  );
  if (breaches != null) {
    state.breaches = breaches;
  } else {
    console.warn("No emails stored in localStorage");
  }
};

const clearState = state => {
  state.emailObjects = [];
  state.breaches = [];
};

export default {
  addEmail,
  initStore,
  clearState
};
