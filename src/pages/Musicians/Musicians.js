import React from 'react';
import {Button, Icon} from 'antd/es';
import generateId from 'nanoid';
import * as R from 'ramda';
import connect from './connect';
import utils from '../../constants/utils';
import text from '../../constants/text';
import './Musicians.css';

const Musicians = (props) => {
    const makeCell = (it) => <td key={generateId()}>{it}</td>;

    const makeLine = it => (<tr key={generateId()}>
        {
            R.map(makeCell, R.values(it))
        }
        <td>
            <Button onClick={searchSongs(it.name)}> {text.buttonSearch} <Icon type="apple"/></Button>
        </td>
    </tr>);

    const searchSongs = (value) => () => {
        props.history.push('/music', {term: value});
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