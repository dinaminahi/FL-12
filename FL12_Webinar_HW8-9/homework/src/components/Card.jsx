import React from 'react';
import DropDown from './dropDownBtn';



function Card(props) {

    function handleClick() {
        props.onDelete(props.id)
    }

    return <div className="card">
        <p className="card-date">{props.date}</p>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-description">{props.description}</p>
        <p className="card-duration">{props.duration}</p>
        <button onClick={handleClick}>X</button>
    </div>
}

export default Card;