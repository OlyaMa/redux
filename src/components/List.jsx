import {useSelector, useDispatch} from 'react-redux';
import {changeInput, removeService, addService, editService, clearForm, editList} from "../redux/actions";

function List() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.list);
    const strToSearch = useSelector(state => state.input.search);

    const handleRemove = (idToRemove) => {
        dispatch(removeService(idToRemove));
    }

    const handleEdit = (text, price, id) => {
        dispatch(editService(text, price, id));
    }

    return (
        <ul>
            {items.filter((item) => item.text.toLowerCase().indexOf(strToSearch) >= 0)
            .map(({id, text, price}) => 
            <li key={id}> 
                {text} {price} руб. <button onClick={() => handleEdit(text, price, id)}>&#9998;</button>
                <button onClick={() => handleRemove(id)}>&#10006;</button>
            </li>)}
        </ul>
    )
}

export default List;
