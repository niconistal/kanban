import React, { Component } from 'react'
import { Modal } from '../Components/Modal'
import { TextField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton'
import { reduxForm, Field } from 'redux-form'
import { v1 as uuidV1 } from 'uuid'

const validate = values => {
  const errors = {}
  if (!values.columnName) {
    errors.columnName = 'Required'
  }
  return errors
}

class ColumnModal extends Component {

  onSubmit = (data) => {
    const id = data.columnId ? data.columnId : uuidV1()
    this.props.onSubmit(id, data.columnName)
    this.props.reset()
    this.props.onHide()
  }

  render () {
    const { open, onHide, handleSubmit } = this.props

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
            name="columnName"
            style={{width: '100%'}}
            component={TextField}
            hintText="Column Name"
          />
        </form>
      </Modal>
    )
  }
}

export default reduxForm({
  form: 'createColumn',
  validate
})(ColumnModal)
