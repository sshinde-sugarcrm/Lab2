// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducer/index';
// import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';
// import thunk from 'redux-thunk';
//
// const store = createStore(
//     reducer,
//     // compose(
//     applyMiddleware(thunk),
//     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     //  )
//
// );
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
//     ,
//     document.getElementById('root')
// );
// registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { PersistGate } from 'redux-persist/integration/react'
import  store  from './store/configurestore';

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'));
registerServiceWorker();