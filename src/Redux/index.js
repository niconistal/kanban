import { combineReducers } from 'redux'
import { reducer as ColumnsReducer } from './Columns'
import { reducer as CardsReducer } from './Cards'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  columns: ColumnsReducer,
  cards: CardsReducer,
  form: formReducer
})

