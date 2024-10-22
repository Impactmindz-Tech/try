import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Check if 'root' exists and render the App component
const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(<App />, rootElement);
}
