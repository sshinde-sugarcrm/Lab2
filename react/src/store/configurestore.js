import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/index'
import thunk from 'redux-thunk';
import {persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage:storage,
    stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer,
    applyMiddleware(thunk));
let persistor = persistStore(store)
export default {store, persistor};