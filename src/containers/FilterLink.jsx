import { connect } from 'react-redux';
import { selectView } from '../actions';
import { withRouter } from 'react-router-dom';

import SidebarLink from '../components/SidebarLink';

// need to pass in a prop called "ownView" with it's own name passed in as a string
const mapStateToProps = (state, ownProps) => (
  {
    active: ownProps.ownView === state.selectedView,
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    // onClick: () => dispatch(selectView(ownProps.ownView)),
    onClick() {
      dispatch(selectView(ownProps.ownView));
    }, // "concise method notation" - part of es6
  }
);

const FilterLink = withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarLink));

export default FilterLink;

// Maybe combine this with your SidebarLink component into one file