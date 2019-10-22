import React from 'react';
import { VerticalBarSeries, XAxis, XYPlot, YAxis } from 'react-vis';
import PropTypes from 'prop-types';
import text from '../../constants/text';

const Chart = ({ data, yTitle, headline }) => (
  <div className="search_analytics">
    <h3>{headline}</h3>
    <XYPlot
      height={300}
      width={400}
      xType="ordinal"
    >
      <VerticalBarSeries data={data} />
      <XAxis title={text.xTitle} />
      <YAxis title={yTitle} />
    </XYPlot>
  </div>
);

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  yTitle: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired
};

export default Chart;
