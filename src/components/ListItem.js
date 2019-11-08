import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Checkbox, TableRow, TableCell, IconButton, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import _ from 'lodash'
import { setListAction } from '../actions'
import EditingModal from './EditingModal'

class ListItem extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false,
        }
    }

    setShowModal = (bool) => {
        this.setState({showModal: bool})
    }

    handleCheckboxChange = (e) => {
        const { list, index } = this.props
        const updatedList = _.cloneDeep(list.items)
        updatedList[index].checked = e.target.checked
        this.props.setList({ items: updatedList })
    }

    deleteItem = () => {
        const { list, index } = this.props
        const updatedList = []
        _.forEach(list.items, (obj, i) => {
            if (index !== i) { updatedList.push(obj) }
        })
        this.props.setList({ items: updatedList })
    }

    render() {
        const { checked, value, index } = this.props
        return (
            <React.Fragment>
                <TableRow key={index}>
                    <TableCell component="th" scope="row" style={{ width: '10%' }}>
                        <Checkbox
                            checked={checked}
                            onChange={(e) => this.handleCheckboxChange(e)}
                            color="primary"
                        />
                    </TableCell>
                    <TableCell align="left">
                        <Typography variant='subtitle2' display="inline" style={{ wordBreak: 'break-all' }}>
                            <Button style={{ color: '#555' }} onClick={() => { this.setShowModal(true) }}>{value}</Button>
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="delete" align="right" onClick={() => { this.deleteItem() }}>
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
                <EditingModal {...this.props} showModal={this.state.showModal} setShowModal={this.setShowModal.bind(this)} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    list: state.list,
});

const mapDispatchToProps = dispatch => ({
    setList: (obj) => dispatch(setListAction(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);