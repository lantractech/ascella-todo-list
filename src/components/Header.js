import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'

const styles = () => ({
    header: {
        paddingLeft: 0,
        paddingRight: 0,
        minHeight: 120,
        width: '100%',
        background: '#5cb85c',
        boxShadow: 'inset 0 8px 8px -8px rgba(0,0,0,.3), inset 0 -8px 8px -8px rgba(0,0,0,.3)'
    },
    headerText: {
        marginTop: 30,
        color: '#fff',
        fontWeight: 'bold',
        textShadow: '0 1px 3px rgba(0,0,0,.3)'
    }

})

const Header = ({ pageTitle, classes }) => {
    return (
        <Grid container>
            <Paper className={classes.header}>
                <Typography variant='h3' align='center' className={classes.headerText}>
                    {pageTitle ? pageTitle : '404 Page'}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(Header)
