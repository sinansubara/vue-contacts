import types from './mutation_types'
export default {
    [types.DELETE_CONTACT](state, payload) {
        state.contacts.splice(payload, 1);
        if(state.contacts.length > 0){
            localStorage.setItem('contactsKey', JSON.stringify([...state.contacts]));
        }else{
            localStorage.removeItem('contactsKey');
        }
    },
    [types.ADD_CONTACT](state, payload) {
        state.contacts = [...state.contacts, payload];
        localStorage.setItem('contactsKey', JSON.stringify([...state.contacts]));
    },
    [types.EDIT_CONTACT](state) {
        localStorage.setItem('contactsKey', JSON.stringify([...state.contacts]));
    }
}