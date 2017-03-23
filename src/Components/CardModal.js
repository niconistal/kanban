import React, { Component } from 'react'
import { Modal } from '../Components/Modal'
import { TextField, SelectField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import { reduxForm, Field, reset } from 'redux-form'
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
    const id = data.columnId ? data.columnId : uuidV1()
    this.props.createCard(id, data.cardName, data.cardDescription, data.columnId)
    this.props.reset()
    this.props.onHide()
  }

  render () {
    const { open, onHide, handleSubmit, pristine, reset, submitting, columns } = this.props

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
      <Modal actions={actions} open={open} onHide={onHide} title='Create Column Form'>
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
            name="cardId"
            style={{width: '100%'}}
            component={TextField}
            hintText="Card ID (Optional)"
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

export default reduxForm({
  form: 'createCard',
  validate
})(CardModal)

