import {nanoid} from "nanoid";

const initialState = [
    {
        id: nanoid(),
        text:'Замена стекла',
        price:'21000'
    },
    {
        id: nanoid(),
        text:'Замена дисплея',
        price:'25000'
    },
]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SERVICE":
            const {text, price} = action.payload;
            return [...state, {id: nanoid(), text, price}];
        case "REMOVE_SERVICE":
            const {id} = action.payload;
            return state.filter((item) => item.id !== id);
        case "EDIT_LIST":
            const index = state.findIndex((item) => item.id === action.payload.id);
            const newState = state;
            newState[index] = action.payload;
            return [...newState];
        default:
            return state;
    };
};

export default listReducer