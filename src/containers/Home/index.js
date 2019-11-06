import { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return "Hello World!"
  }
}

export default Home

// const mapStateToProps = state => ({
//   user: state.user
// });

// const mapDispatchToProps = dispatch => ({
//   // dispatch goes here
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
