import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createCard: ['id', 'name', 'description', 'column']
}, {})

export const ColumnTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  name: '',
  description: '',
  id: '',
  column: ''
})

/* ------------- Reducers ------------- */

export const createCard = (state, { id, name, description, column }) =>
  state
    .setIn(['name'], name)
    .setIn(['description'], description)
    .setIn(['id'], id)
    .setIn(['column'], column)


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_CARD]: createCard,
})

