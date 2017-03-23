import immutablePersistenceTransform from '../Services/ImmutablePersistanceTransform'

const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    // storage: localForage,
    blacklist: ['form'], // reducer keys that you do NOT want stored to persistence here
    whitelist: ['columns', 'cards'], // OR put reducer keys that you DO want stored to persistence here (overrides blacklist)
    transforms: [
      immutablePersistenceTransform,
    ]
  }
}

export default REDUX_PERSIST
