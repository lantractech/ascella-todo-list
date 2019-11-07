import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Banner, Header, Navigation } from '../../components'
import ToDo from '../ToDo'
import About from '../About'
import { setMainAction, setMainToDoPageAction, setMainAboutPageAction } from '../../actions'

class Main extends Component {
  constructor(props) {
    super(props);

    // set page info if pre-defined pathname
    this.setPage()
  }

  componentDidUpdate = (prevProps,prevState) => {
    // Typical usage (don't forget to compare props):
    if (this.props.location !== prevProps.location) {
      this.setPage()
    }
  }

  setPage() {
    let page = _.get(this.props, 'location.pathname')
    if (page) {
      page = page.replace(/\//, '')
      if (page === 'todo' || page === '') {
        this.props.setMainToDoPage()
      }
      else if (page === 'about') {
        this.props.setMainAboutPage()
      }
      else {
        this.props.setMain({ page: '404', pageTitle: '404 PAGE', tabValue: null })
      }
    }
  }

  getContentSection = () => {
    const { main } = this.props
    if (main.page === 'todo') {
      return <ToDo/>
    }
    else if (main.page === 'about') {
      return <About />
    }
    else {
      return ''
    }
  }


  render() {
    const { main } = this.props
    const contentSection = this.getContentSection()
    return <React.Fragment>
      <Banner />
      <Header pageTitle={main.pageTitle} />
      <Navigation {...this.props} />
      {contentSection}
    </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
