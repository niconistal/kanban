// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, compose, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { rootReducer } from './index.js'
import createActionBuffer from 'redux-action-buffer'
import reduxReset from 'redux-reset'

// persist
import { autoRehydrate } from 'redux-persist'
import RehydrationServices from '../Services/RehydrationServices'
import ReduxPersist from '../Config/ReduxPersist'
import { REHYDRATE } from 'redux-persist/constants'

export default function configureStore(initialState) {
  const middleware = []
  const enhancers = []

  // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
  middleware.push(reduxImmutableStateInvariant())
  middleware.push(createActionBuffer(REHYDRATE))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(RehydrationServices.checkVersion())
    enhancers.push(autoRehydrate())
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const enhanceCreateStore = compose(reduxReset())(createStore)
  const store = enhanceCreateStore(rootReducer, initialState, compose(
      ...enhancers,
      window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  )

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }


  return store
}
