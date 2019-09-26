import {connect} from 'react-redux';
import {getData} from './helpers';

const mapStateToProps = (state) => ({
        users: state.usersReducer.users
});

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps);
