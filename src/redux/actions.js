export const changeInput = (name, value) => {
    return {type: 'CHANGE_INPUT', payload: {name, value}}
}

export function removeService(id) {
    return {type: 'REMOVE_SERVICE', payload: {id}};
}

export const addService = (text, price) => {
    return {type: 'ADD_SERVICE', payload: {text, price}}
}

export const editService = (text, price, id) => {
    return {type: 'EDIT_SERVICE', payload: {text, price, id}}
}

export const clearForm = () => {
    return {type: 'CLEAR_FORM'}
}

export const editList = (id, text, price) => {
    return {type: 'EDIT_LIST', payload: {id, text, price}}
}

export default {changeInput, removeService, addService, editService, clearForm, editList}