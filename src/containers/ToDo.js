import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, TextField, Fab, Typography, Table, TableBody } from '@material-ui/core'
import _ from 'lodash'
import AddIcon from '@material-ui/icons/Add';
import { setListAction, setMainAction, setMainToDoPageAction, setMainAboutPageAction } from '../actions'
import { ListItem } from '../components'

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            inputText: ''
        }
    }

    addToDoItem = () => {
        const { inputText } = this.state
        const { list } = this.props
        const updatedList = _.cloneDeep(list.items)
        let listGroup = { value: inputText, checked: false, notes: '', index: updatedList.length }
        updatedList.push(listGroup)
        this.props.setList({ items: updatedList })
        this.setState({ inputText: '' })
    }

    modifyInputText = (e) => {
        this.setState({ inputText: e.target.value })
    }

    renderToDoInput = () => {
        const { inputText } = this.state
        return (
            <Grid container justify='center' style={{ paddingTop: 20 }}>
                <Grid item xs={1}>
                    <div style={{ marginTop: 10 }}>
                        <Typography variant="subtitle1" display="inline" style={{ color: '#5cb85c' }}><b>TO-DO: </b></Typography>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        id="standard-basic"
                        value={inputText}
                        placeholder="    ... item"
                        margin="dense"
                        style={{ width: '100%' }}
                        onChange={(e) => { this.modifyInputText(e) }}
                    />
                </Grid>
                <Grid item xs={1}>
                    {inputText !== '' && (
                        <Fab size="small" style={{ color: "#5cb85c", boxShadow: 'none' }} aria-label="add" onClick={() => { this.addToDoItem() }}>
                            <AddIcon />
                        </Fab>
                    )}
                </Grid>
            </Grid>
        )
    }

    renderList = () => {
        const { list } = this.props
        let tableList = list.items.length === 0 ? "" : _.map(list.items, (obj, index) => {
            return <ListItem
                key={index}
                index={index}
                value={obj.value}
                checked={obj.checked}
                notes={obj.notes} />
        })

        return (
            <Table>
                <TableBody>
                    {tableList}
                </TableBody>
            </Table>
        )
    }

    render() {
        return (
            <Grid container justify='center' style={{ marginTop: 30 }}>
                <Grid item lg={6} xs={10}>
                    <Paper style={{ minHeight: 400 }}>
                        {this.renderToDoInput()}
                        {this.renderList()}
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    list: state.list,
    main: state.main
});

const mapDispatchToProps = dispatch => ({
    setList: (obj) => dispatch(setListAction(obj)),
    setMain: (obj) => dispatch(setMainAction(obj)),
    setMainToDoPage: () => dispatch(setMainToDoPageAction()),
    setMainAboutPage: () => dispatch(setMainAboutPageAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
