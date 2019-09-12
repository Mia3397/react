import React from 'react';
import './Input.css';

const Input = ({name, onChange, placeholder, value}) => (
    <div className="input">
        <input name={name} onChange={onChange}/>
        <p className={value ? "input-active" : ""} unselectable="on">{placeholder}</p>
    </div>
);

export default Input;