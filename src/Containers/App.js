import React, { Component } from 'react'
import './Styles/App.css'
import {Menu} from '../Components/Menu'
import ColumnModal from '../Components/ColumnModal'
import CardModal from '../Components/CardModal'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import ColumnsTypes from '../Redux/Columns.js'
import CardTypes from '../Redux/Cards.js'
import Board from './Board'
import { columnsSelector } from '../Redux/Selectors'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columnModalOpen: false,
      cardModalOpen: false
    }
  }
  openColumnModal() {
    this.setState({columnModalOpen: true})
  }
  closeColumnModal() {
    this.setState({columnModalOpen: false})
  }
  openCardModal() {
    this.setState({cardModalOpen: true})
  }
  closeCardModal() {
    this.setState({cardModalOpen: false})
  }
  render() {
    const { columns, createColumn, removeColumn, createCard } = this.props
    const { columnModalOpen, cardModalOpen } = this.state
    return (
      <div className="App">
        <Menu title='Kanban'
          menuItems={[
            <MenuItem key='addColumn' primaryText='Add Column' onTouchTap={() => this.openColumnModal()}/>,
            <MenuItem key='addCard' primaryText='AddCard' onTouchTap={() => this.openCardModal()}/>
          ]}
        />
        <Board />
        <ColumnModal open={columnModalOpen} createColumn={createColumn} onHide={() => this.closeColumnModal()} />
        <CardModal open={cardModalOpen} columns={columns} createCard={createCard} onHide={() => this.closeCardModal()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  columns: columnsSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  createColumn: (columnId, columnName) => dispatch(ColumnsTypes.createColumn(columnId, columnName)),
  removeColumn: (columnId) => dispatch(ColumnsTypes.removeColumn(columnId)),
  createCard: (cardId, cardName, cardDescription, columnId) => dispatch(CardTypes.createCard(cardId, cardName, cardDescription, columnId))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
