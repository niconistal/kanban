import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reducer as ColumnReducer } from './Column'
import { removeItemFromArray } from '../utils'


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createColumn: ['id', 'name'],
  removeColumn: ['id']
}, {})

export const ColumnsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: {},
  index: []
})

/* ------------- Reducers ------------- */

export const createColumn = (state, action) => {
  const { id } = action
  return state
    .merge({
      data: state.data.merge({[id] : ColumnReducer(undefined, {...action, id: id}) }),
      index: state.index.concat([id])
    })

}

export const removeColumn = (state, { id }) =>
  state
    .merge({
      data: state.data.without(id),
      index: removeItemFromArray(state.index, id)
    })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_COLUMN]: createColumn,
  [Types.REMOVE_COLUMN]: removeColumn
})

