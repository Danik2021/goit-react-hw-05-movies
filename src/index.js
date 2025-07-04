import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// libraries

// components

const App = () => {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
