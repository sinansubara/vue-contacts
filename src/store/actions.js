import types from './mutation_types'
export default {
    deleteContact({ commit }, payload) {
        commit(types.DELETE_CONTACT, payload);
    },
    addContact({ commit }, payload) {
        commit(types.ADD_CONTACT, payload);
    },
    editContact({ commit }) {
        commit(types.EDIT_CONTACT);
    }
}