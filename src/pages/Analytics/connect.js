import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  artists: state.analyticsReducer.artists
});

export default connect(mapStateToProps, null);
