import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store, {stateType} from './redux/state'
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// let rerender = (state: stateType) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <App state={state} dispatch={store.dispatch.bind(store)}/>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
// rerender(store.getState())
//
// store.subscribe(rerender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
