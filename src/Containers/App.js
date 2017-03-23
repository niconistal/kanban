import React, { Component } from 'react'
import './Styles/App.css'
import {Menu} from '../Components/Menu'
import ColumnModal from '../Components/ColumnModal'
import CardModal from '../Components/CardModal'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import ColumnsActions from '../Redux/Columns.js'
import CardActions from '../Redux/Cards.js'
import Drawer from 'material-ui/Drawer'
import Board from './Board'
import { columnsSelector } from '../Redux/Selectors'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columnModalOpen: false,
      cardModalOpen: false,
      openMenu: false
    }
  }

  openMenu = () => {
    this.setState({openMenu: true})
  }

  onReset () {
    this.setState({openMenu: false})
    this.props.resetBoard()
  }

  openColumnModal() {
    this.setState({columnModalOpen: true, openMenu: false})
  }

  closeColumnModal() {
    this.setState({columnModalOpen: false})
  }

  openCardModal() {
    this.setState({cardModalOpen: true, openMenu: false})
  }

  closeCardModal() {
    this.setState({cardModalOpen: false})
  }

  render() {
    const {
      columns,
      createColumn,
      createCard
    } = this.props

    const {
      columnModalOpen,
      cardModalOpen
    } = this.state

    return (
      <div className="App">
        <Menu title='Kanban' onMenuOpen={this.openMenu}/>
        <Drawer onRequestChange={(open) => this.setState({openMenu: open})} docked={false} open={this.state.openMenu}>
          <MenuItem
            key='addColumn'
            primaryText='Add Column'
            onTouchTap={() => this.openColumnModal()}
          />
          <MenuItem
            key='addCard'
            primaryText='AddCard'
            onTouchTap={() => this.openCardModal()}
          />
          <MenuItem
            key='reset'
            primaryText='Reset Board'
            onTouchTap={() => this.onReset()}
          />
        </Drawer>
        <Board />
        <ColumnModal
          open={columnModalOpen}
          onSubmit={createColumn}
          onHide={() => this.closeColumnModal()}
        />
        <CardModal
          open={cardModalOpen}
          columns={columns}
          onSubmit={createCard}
          onHide={() => this.closeCardModal()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  columns: columnsSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  createColumn: (columnId, columnName) =>
    dispatch(ColumnsActions.createColumn(columnId, columnName)),

  createCard: (cardId, cardName, cardDescription, columnId) =>
    dispatch(CardActions.createCard(cardId, cardName, cardDescription, columnId)),

  resetBoard: () =>
    dispatch({type: 'RESET'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

