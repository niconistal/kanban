import React, { Component } from 'react'
import { Modal } from '../Components/Modal'
import { TextField, SelectField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { v1 as uuidV1 } from 'uuid'

const validate = values => {
  const errors = {}
  if (!values.cardName) {
    errors.cardName = 'Required'
  }
  if (!values.cardDescription) {
    errors.cardDescription = 'Required'
  }
  if (!values.columnId) {
    errors.columnId = 'Required'
  }
  return errors
}

class CardModal extends Component {

  onSubmit = (data) => {
    const id = this.props.id ? this.props.id : uuidV1()
    this.props.onSubmit(id, data.cardName, data.cardDescription, data.columnId)
    this.props.reset()
    this.props.onHide()
  }

  render () {
    const {
      open,
      onHide,
      handleSubmit,
      columns
    } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={onHide}
      />,
      <FlatButton
        label="Create"
        primary={true}
        type='submit'
        onClick={handleSubmit(this.onSubmit)}
      />,
    ]
    return (
      <Modal actions={actions} open={open} onHide={onHide} title='Column Form'>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="cardName"
            style={{width: '100%'}}
            component={TextField}
            hintText="Card Name"
          />
          <Field
            name="cardDescription"
            style={{width: '100%'}}
            component={TextField}
            hintText="Card Description"
          />
          <Field
            name="columnId"
            style={{width: '100%'}}
            component={SelectField}
            hintText="Starting Column"
          >
            {columns.map((column, key) => <MenuItem key={key} value={column.id} primaryText={column.name}/>)}
          </Field>
        </form>
      </Modal>
    )
  }
}

const mapStateToProps = (state, { title, description, columnId }) => {
  const returnValue =  {
    initialValues: {
      cardName: title,
      cardDescription: description,
      columnId: columnId
    }
  }
  return returnValue
}

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'createCard',
    validate,
    enableReinitialize: true
  })
)(CardModal)

