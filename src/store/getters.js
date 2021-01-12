const emailObjects = state => state.emailObjects;
const breaches = state => state.breaches;
const getEmailObjectByName = (state, email) => {
    return state.emailObjects.find(emailObj => emailObj["email"] === email)
    };
const getBreachByProps = (state) => (prop1_key, prop1_val, date_key, date_val) => {
    return state.breaches.find(breach => (breach[prop1_key] === prop1_val) && (breach[date_key].getTime() === date_val.getTime()))
};


export default {
    emailObjects,
    getEmailObjectByName,
    breaches,
    getBreachByProps
}