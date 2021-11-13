import React from 'react'

const Todo = (props) => {
    const dedleteHandler = () => {
        console.log(props.text);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={dedleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Todo
