import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'

const styles = () => ({
    banner: {
      minHeight: 40,
      background: '#fff'
    },
    bannerText: {
        color: '#5cb85c',
        fontWeight: 'bold',

    }
  })

const Banner = ({classes}) => {
    return (
        <Grid className={classes.banner}>
            <Container>
                <Typography variant='h6' align='left' className={classes.bannerText}>
                    Ascella: Coding Challenge
                </Typography>
            </Container>
        </Grid>
    )
}

export default withStyles(styles)(Banner)
