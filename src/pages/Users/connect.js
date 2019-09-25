import {connect} from 'react-redux';
import {getData} from './helpers';

const mapStateToProps = (state) => ({
        data: state.users.data
});

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps);
