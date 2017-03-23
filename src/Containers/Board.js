import React, { Component } from 'react'
import { columnsSelectorWithCards } from '../Redux/Selectors'
import './Styles/BoardStyle.css'
import { connect } from 'react-redux'
import { Column } from '../Components/Column'
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import * as itemTypes from '../Constants/ItemTypes';

class Board extends Component {

  render() {
    const { columns } = this.props
    return (
      <div className="boardContainer">
        {columns.map((column, key) => <Column key={key} name={column.name} cards={column.cards} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  columns: columnsSelectorWithCards(state)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
