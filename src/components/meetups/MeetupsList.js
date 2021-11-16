import React from 'react';

const MeetupsList = (props) => {
    return (
        <li>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h2>{props.title}</h2>
                <address>{props.address}</address>
            </div>
        </li>
    )
}

export default MeetupsList
