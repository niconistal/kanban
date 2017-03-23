import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createColumn: ['id', 'name']
}, {})

export const ColumnTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  name: '',
  id: ''
})

/* ------------- Reducers ------------- */

export const createColumn = (state, { id, name }) =>
  state
    .setIn(['name'], name)
    .setIn(['id'], id)

export const rehidrate = state =>
  Immutable(state, {deep: true})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_COLUMN]: createColumn,
  'REHYDRATE': rehidrate
})


