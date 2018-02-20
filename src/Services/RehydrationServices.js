import ReduxPersist from '../Config/ReduxPersist'
import { persistStore } from 'redux-persist'
import createMigration from 'redux-persist-migrate'
import StartupActions from '../Redux/StartupRedux'
/* Example with Immutable new states:
import Immutable from 'seamless-immutable'
const manifest = {
 2: (state) => ({
    ...state,
    sessionOld: Immutable({
      ...state.session,
      hola: 'mundo'
    }),
    session: state.session.set('loaded', 'BBBBBBBBBBBBBBBBBBBBBB')
  }),
}
*/

const updateReducers = (store) => {
  const config = ReduxPersist.storeConfig
  const startup = () => store.dispatch(StartupActions.startup())

  persistStore(store, config)
}

const checkVersion = () => {
  const manifest = {
   1: (state) => state,
  }

  return createMigration(
    manifest,
    (state) => state.app ? state.app.version : 1,
    (state, version) => ({
      ...state,
      app: state.app.set('version', version)
    })
  )
}

export default { updateReducers, checkVersion }

