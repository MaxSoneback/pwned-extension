const emailObjects = state => state.emailObjects;
const breaches = state => state.breaches;
const getEmailObjectByName = (state, email) => {
    return state.emailObjects.find(emailObj => emailObj["email"] === email)
    };


export default {
    emailObjects,
    getEmailObjectByName,
    breaches
}