/*
*
* @author Marco Matteo
* @version 1.0
* @date 2024-08-28
* @description This is the Frontend of my Full-Stack Password Manager. It is written using React.js.
*
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
try {

    // this is all just Reacts stuff that gets created when you install React
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
} catch (e) {
    throw new Error(`Error while Rendering the App: ${e}`)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
