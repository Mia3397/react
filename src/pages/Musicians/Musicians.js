import React from 'react';
import {Button, Icon} from 'antd/es';
import generateId from 'nanoid';
import * as R from 'ramda';
import connect from './connect';
import utils from '../../constants/utils';
import text from '../../constants/text';
import './Musicians.css';

const Musicians = (props) => {
    const makeCell = (it, index) => <td key={`${index}${it}`}>{it}</td>;

    const makeLine = (it, index) => (
        <tr key={`${it.name}${index}`}>
            {
                R.map(makeCell, R.values(it))
            }
            <td>
                <Button onClick={searchSongs(it.name)}> {text.buttonSearch} <Icon type="apple"/></Button>
            </td>
        </tr>
    );

    const searchSongs = (term) => () => {
        props.history.push('/music', {term});
    };

    return(
        <div className="wrapper">
            <h1>Musicians</h1>
            <table>
                <thead>
                <tr>
                    {
                        R.map(makeCell, utils.userTableColumns)
                    }
                </tr>
                </thead>
                {
                    R.map(makeLine, utils.musicians)
                }
            </table>
        </div>
    );
};


export default connect(Musicians);