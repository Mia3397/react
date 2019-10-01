import React from "react";
import text from '../../constants/text';
import './Avatar.css'

const Avatar = ({url}) => {
    return(
    <img src={url} alt={text.imgAlt}/>
)};

export default Avatar;