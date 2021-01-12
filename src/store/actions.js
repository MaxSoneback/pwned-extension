import mutations from './mutations'

const loadBreaches = ({ commit }, email) => {
    commit('loadBreaches', email)
};

export default {
    loadBreaches
}