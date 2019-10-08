import {connect} from 'react-redux';
import {signIn} from './helpers';

const mapStateToProps = (state) => ({
    userName: state.loginReducer.userName
});

const mapDispatchToProps = {
    signIn
};

export default connect(mapStateToProps, mapDispatchToProps);