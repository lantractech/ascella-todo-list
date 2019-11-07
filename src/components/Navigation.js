import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { setMainToDoPageAction, setMainAboutPageAction } from '../actions'

const styles = () => ({
    nav: {
        color: '#5cb85c'
    }
})

class Navigation extends Component {

    handleTabChange = (value) => {
        if (value === 0) {
            console.log(this.props)
            this.props.setMainToDoPage()
            this.props.history.push('/todo')
        }
        else if (value ===1) {
            this.props.setMainAboutPage()
            this.props.history.push('/about')
        }
    }

    render() {
        const { main, classes } = this.props
        return (
            <Paper>
                <Tabs
                    value={main.tabValue}
                    onChange={(e,value) => { this.handleTabChange(value) }}
                    centered
                    indicatorColor='primary'
                    className={classes.nav}
                >
                    <Tab label="TO-DO LIST" style={main.tabValue === 0 ? { backgroundColor: '#eee' } : {}} />
                    <Tab label="ABOUT" style={main.tabValue === 1 ? { backgroundColor: '#eee' } : {}} />
                </Tabs>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    main: state.main
});

const mapDispatchToProps = dispatch => ({
    setMainToDoPage: () => dispatch(setMainToDoPageAction()),
    setMainAboutPage: () => dispatch(setMainAboutPageAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navigation));