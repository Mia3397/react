import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthorizationUser from './hocs/withAuthorizationUser';
import { signIn, logout } from './pages/Login/helpers';

const mapStateToProps = (state) => ({
  userName: state.loginReducer.userName
});

const mapDispatchToProps = {
  signIn,
  logout
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthorizationUser);
