import { Component } from 'react';
import { connect } from 'react-redux';
import { setMainAction, setMainToDoPageAction, setMainAboutPageAction } from '../../actions'

class About extends Component {

  render() {
    return "About Page"
  }
}

const mapStateToProps = state => ({
  main: state.main
});

const mapDispatchToProps = dispatch => ({
  setMain: (obj) => dispatch(setMainAction(obj)),
  setMainToDoPage: () => dispatch(setMainToDoPageAction()),
  setMainAboutPage: () => dispatch(setMainAboutPageAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
