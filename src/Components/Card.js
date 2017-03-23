import React, { Component } from 'react'
import './Styles/CardStyle.css'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import CardModal from './CardModal'

class BoardCard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      openEditModal: false
    }
  }

  onDeleteCard = () => {
    this.props.removeCard(this.props.id)
  }

  onEditCard = () => {
    this.setState({openEditModal: true})
  }

  onCancelEdit = () => {
    this.setState({openEditModal: false})
  }

  handleColumnChange = (event, index, value) => {
    this.props.moveCard(this.props.id, value)
  }

  render () {
    const {
      id,
      title,
      description,
      editCard,
      columns,
      columnId
    } = this.props

    const {
      openEditModal
    } = this.state

    return (
      <div className='boardCard'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
          <SelectField
            floatingLabelText='Move to Column'
            onChange={this.handleColumnChange}
          >
            {columns
              .filter((column) => column.id !== columnId)
              .map((column, key) =>
                <MenuItem key={key} value={column.id} primaryText={column.name} />
            )}
          </SelectField>
        </div>
        <FlatButton style={{top: '10px'}} primary={true} onTouchTap={this.onEditCard}>Edit</FlatButton>
        <FlatButton style={{top: '10px'}} primary={false} onTouchTap={this.onDeleteCard}>DELETE</FlatButton>
        {openEditModal &&
          <CardModal
            open={true}
            id={id}
            columnId={columnId}
            title={title}
            description={description}
            columns={columns}
            onSubmit={editCard}
            onHide={this.onCancelEdit}
          />
        }
      </div>
    )

  }
}

export default BoardCard
