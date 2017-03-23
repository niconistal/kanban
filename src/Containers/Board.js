import React, { Component } from 'react'
import { columnsSelectorWithCards } from '../Redux/Selectors'
import './Styles/BoardStyle.css'
import { connect } from 'react-redux'
import { Column } from '../Components/Column'
import CardActions from '../Redux/Cards'

class Board extends Component {

  render() {
    const {
      columns,
      editCard,
      removeCard,
      moveCard
    } = this.props

    return (
      <div className="boardContainer">
        {columns.map((column, key) =>
          <Column key={key}
            name={column.name}
            cards={column.cards}
            editCard={editCard}
            moveCard={moveCard}
            removeCard={removeCard}
            columns={columns}
          />)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  columns: columnsSelectorWithCards(state)
})

const mapDispatchToProps = (dispatch) => ({
  editCard: (id, name, description, columnId) =>
    dispatch(CardActions.editCard(id, name, description, columnId)),

  moveCard: (id, targetColumn) =>
    dispatch(CardActions.moveCard(id, targetColumn)),

  removeCard: (id) =>
    dispatch(CardActions.removeCard(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
