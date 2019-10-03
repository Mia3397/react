import React from "react";
import {Icon, Input} from 'antd';
import './EditContainer.scss';

const EditContainer = ({type, containerType, value, onChange, onUpdate, onEdit, text}) => {
    const isSameType = type === containerType;

    return(
        <div className="edit-container">
            {
                isSameType
                    ? <Input
                    type="text"
                    name={containerType}
                    value={value}
                    onChange={onChange}
                />
                : <p>{text}</p>
            }
            {
               <Icon
                   type={isSameType ? 'check-circle' : 'edit'}
                   onClick={isSameType ? onUpdate : onEdit(containerType, text)}
                   className={isSameType ? 'save' : 'edit'}
               />
            }
        </div>
    )
};

export default EditContainer;