const initialState = {
    text: '',
    price:'',
    id: '',
    search: '',
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
    case "CHANGE_INPUT":
        const {name, value} = action.payload;
        return {...state, [name]: value};
    case "EDIT_SERVICE":
        const {text, price, id} = action.payload;
        return {...state, text: text, price: price, id: id};
    case "CLEAR_FORM":
        return {...state, text: '', price: '', id: ''};
    default:
        return state;
    };
};

export default inputReducer