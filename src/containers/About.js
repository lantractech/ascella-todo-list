import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Typography, CardMedia } from '@material-ui/core'
import ExampleComponent from "react-rounded-image";
import { setMainAction, setMainToDoPageAction, setMainAboutPageAction } from '../actions'
import PersonalPhoto from "../resources/images/Glasscock.jpg"

class About extends Component {

    render() {
        return (
            <Grid container justify='center' style={{ marginTop: 80 }}>
                <Grid item xs={6}>
                    <Paper align='center' style={{ minHeight: 400 }}>
                        <div style={{ marginTop: '-50px', left: 'calc(50% - 80px)', position: 'absolute' }}>
                            <ExampleComponent image={PersonalPhoto} roundedColor="#fff"
                                imageWidth="160"
                                imageHeight="150"
                                roundedSize="2" />
                        </div>
                        <Grid item xs={12} style={{ paddingTop: 120 }}>
                            <Typography variant="h4" style={{color:'#444'}}><b>Luke Glasscock</b></Typography>
                            <Typography variant="subtitle2" style={{color:'#555'}}>SOFTWARE DEVELOPER</Typography>
                            <Typography variant="body2" style={{color:'#777', padding: 40}}>Experienced with rapid development of web applications, specifically utilizing ReactJS and Redux. Completed work for Financial Crimes Enforcement Network (FINCEN), Department of the Treasury, and Federal Bureau of Investigation (FBI), Department of Justice.  Education consists of M.S. in Computer Information Systems.</Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
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
