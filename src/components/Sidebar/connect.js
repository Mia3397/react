import { connect } from 'react-redux';
import { toggleStateSideBar } from '../../redux/sidebar/actions';

const mapStateToProps = (state) => ({
  isOpen: state.sidebarReducer.isOpen
});

const mapDispatchToProps = (dispatch) => ({
  toggleState: () => dispatch(toggleStateSideBar())
});

export default connect(mapStateToProps, mapDispatchToProps);
