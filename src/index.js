import React from 'react';
import ReactDOM from 'react-dom/client';
//import Header from './Components/Header/Header';
//import Content from './Components/Content/Section-Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

/*
const header = ReactDOM.createRoot(document.getElementById("header"));
header.render(<Header />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Content />);


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
);
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);