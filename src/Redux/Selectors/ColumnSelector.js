import { createSelector } from 'reselect'

const columns = (state) => state.columns.data
const columnsIndex = (state) => state.columns.index
const cards = (state) => state.cards.data
const cardsIndex = (state) => state.cards.index

export const columnsSelectorWithCards = createSelector(
  columns,
  columnsIndex,
  cards,
  cardsIndex,
  (columns, columnsIndex, cards, cardsIndex) => columnsIndex.map((columnId) => ({
    ...columns[columnId],
    cards: cardsIndex
      .map((cardId) => cards[cardId])
      .filter((card) => card.column === columnId)

  }))
)

export const columnsSelector = createSelector(
  columns,
  columnsIndex,
  (columns, columnsIndex) => columnsIndex.map((index) => columns[index])
)

export const hasColumns = createSelector(
  columnsIndex,
  (columnsIndex) => columnsIndex.lenght > 0
)
