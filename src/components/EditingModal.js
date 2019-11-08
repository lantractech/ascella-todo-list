import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Modal, Fade, Backdrop, Card, TextField, Button } from '@material-ui/core'
import _ from 'lodash'
import { setListAction } from '../actions'

class EditingModal extends Component {

    getModalStyle = () => {

        return {
            position: 'absolute',
            width: 700,
            border: '2px solid #333',
            top: `30%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
        };
    }

    modifyInputText = (e) => {
        const { list, index } = this.props
        const updatedList = _.cloneDeep(list.items)
        updatedList[index].value = e.target.value
        this.props.setList({ items: updatedList })
    }

    modifyNotes = (e) => {
        const { list, index } = this.props
        const updatedList = _.cloneDeep(list.items)
        updatedList[index].notes = e.target.value
        this.props.setList({ items: updatedList })
    }

    handleCheckboxChange = (e) => {
        const { list, index } = this.props
        const updatedList = _.cloneDeep(list.items)
        updatedList[index].checked = e.target.checked
        this.props.setList({ items: updatedList })
    }

    handleShowModal = () => {
        this.props.setShowModal(true)
    }

    handleCloseModal = () => {
        this.props.setShowModal(false)
    }

    render() {
        const { value, notes, index } = this.props
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={this.props.showModal}
                onClose={this.handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={this.props.showModal}>
                    <Grid container justify='center' style={{ paddingTop: 20 }}>
                        <Grid item xs={12}>
                            <Card style={this.getModalStyle()}>
                                <TextField
                                    id="standard-basic"
                                    value={value}
                                    align="center"
                                    margin="dense"
                                    style={{ width: '80%', paddingLeft: '10%',marginTop:20 }}
                                    onChange={(e) => { this.modifyInputText(e) }}
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    placeholder="  ... notes"
                                    multiline
                                    rows="8"
                                    value={notes}
                                    margin="normal"
                                    variant="outlined"
                                    style={{ width: '80%', paddingLeft: '10%', paddingBottom: 30 }}
                                    onChange={(e) => { this.modifyNotes(e) }}
                                />
                                <Grid item xs={12}>
                                    <Button variant="outlined" size="small" style={{ backgroundColor: '#ccc', float:'right', marginBottom: 20, marginRight:20 }} onClick={() => this.handleCloseModal()}>
                                        Save
                                </Button>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    list: state.list,
});

const mapDispatchToProps = dispatch => ({
    setList: (obj) => dispatch(setListAction(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditingModal);