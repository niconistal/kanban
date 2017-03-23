import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reducer as CardReducer } from './Card'
import { removeItemFromArray } from '../utils'


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createCard: ['id', 'name', 'description', 'column'],
  removeCard: ['id']
}, {})

export const CardsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: {},
  index: []
})

/* ------------- Reducers ------------- */

export const createCard = (state, action) => {
  const { id } = action
  return state
    .merge({
      data: state.data.merge({[id] : CardReducer(undefined, action) }),
      index: state.index.concat([id])
    })

}

export const removeCard = (state, { id }) =>
  state
    .merge({
      data: state.data.without(id),
      index: removeItemFromArray(state.index, id)
    })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_CARD]: createCard,
  [Types.REMOVE_CARD]: removeCard
})


