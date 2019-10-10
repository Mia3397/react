import {connect} from 'react-redux';
import {compose} from 'redux';
import withUserName from '../../hocs/withUserName';
import {signIn} from './helpers';

const mapStateToProps = (state) => ({
    userName: state.loginReducer.userName
});

const mapDispatchToProps = {
    signIn
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withUserName);