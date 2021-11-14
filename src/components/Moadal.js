import React from 'react'

const Moadal = (props) => {
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>
            <button className="btn">Comfirm</button>
        </div>
    )
}

export default Moadal
