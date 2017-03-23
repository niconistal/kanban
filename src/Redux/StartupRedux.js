import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
// import { REHYDRATE } from 'redux-persist/constants'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: []
})

export const INITIAL_STATE = Immutable({
  rehydrated: false
})

export const StartupTypes = Types
export default Creators

const rehydrated = (state) => state.set('rehydrated', true)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: rehydrated
})
