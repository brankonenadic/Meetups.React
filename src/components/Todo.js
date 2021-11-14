import React, {useState} from 'react';
import Backdrop from './Backdrop';
import Moadal from './Moadal';

const Todo = (props) => {
    const [deleteTodo, setdeleteTodo] = useState(false);
    const dedleteHandler = () => {
        setdeleteTodo(true);
    }
    const closeModalHandler = () => {
        setdeleteTodo(false);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={dedleteHandler}>Delete</button>
            </div>
           {deleteTodo && <Moadal  onClick={closeModalHandler} />}
            {deleteTodo && <Backdrop  onClick={closeModalHandler}/>}
        </div>
    );
}

export default Todo
