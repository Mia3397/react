import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    userName: state.loginReducer.userName
});

export default connect(mapStateToProps, null);