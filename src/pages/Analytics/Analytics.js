import React from 'react';
import {XYPlot, VerticalBarSeries, XAxis, YAxis} from 'react-vis';
import * as R from 'ramda';
import connect from './connect';
import text from '../../constants/text';
import './Analytics.css';

const Analytics = ({artists}) => {
    const searchData = R.map(it => ({
        x: it.artistName,
        y: it.searchCounter ? it.searchCounter : 0
    }), R.values(artists));

    const playData = R.pipe(
        R.values,
        R.map(it=> ({
            x: it.artistName,
            y: it.playCounter ? it.playCounter : 0
        })),
        R.filter(it => it.y !== 0)
    )(artists);

    return(
        <div className="wrapper">
            <h1>Analytics</h1>
            <div className="analytics">
                <XYPlot height={300} width= {400} xType="ordinal">
                    <VerticalBarSeries data={searchData} color="rgba(247, 178, 213, 0.4)"/>
                    <XAxis title={text.xTitle}/>
                    <YAxis title={text.queriesTitle}/>
                </XYPlot>
                <XYPlot height={300} width= {400} xType="ordinal">
                    <VerticalBarSeries data={playData} />
                    <XAxis title={text.xTitle}/>
                    <YAxis title={text.playingTitle}/>
                </XYPlot>
            </div>
        </div>
    );
};

export default connect(Analytics);