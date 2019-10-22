import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import Chart from './Chart';
import connect from './connect';
import text from '../../constants/text';
import './Analytics.css';

const Analytics = ({ artists }) => {
  const createData = (counterName) => R.pipe(
    R.values,
    R.map((it) => ({
      x: it.artistName,
      y: it[counterName] || 0
    })),
    R.filter((it) => it.y)
  )(artists);

  const searchData = createData('searchCounter');
  const playData = createData('playCounter');
  const showSearchChart = Boolean(searchData.length);
  const showPlayedChart = Boolean(playData.length);
  return (
    <div className="wrapper">
      <h1>Analytics</h1>
      <div className="analytics">
        {showSearchChart
        && (
          <Chart
            data={searchData}
            yTitle={text.queriesTitle}
            headline={text.searchAnalytics}
          />
        )}

        {showPlayedChart
        && (
          <Chart
            data={playData}
            yTitle={text.playingTitle}
            headline={text.playAnalytics}
          />
        )}
      </div>
    </div>
  );
};

Analytics.propTypes = {
  artists: PropTypes.shape({
    artistName: PropTypes.string,
    searchCounter: PropTypes.number,
    playCounter: PropTypes.number
  }).isRequired
};

export default connect(Analytics);
