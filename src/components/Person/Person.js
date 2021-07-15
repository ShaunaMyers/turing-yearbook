import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="personCard">
            <img>{props.image}</img>
            <h3>{props.name}</h3>
            <p>{props.quote}</p>
            <p>{props.superlative}</p>
        </div>
    )
}

export default Person;
