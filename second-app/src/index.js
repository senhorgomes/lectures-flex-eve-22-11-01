import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';
import PlantList from './components/PlantList';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Here we messed around with props.children. If the component has any children, it will be rendering in the parent component, specifically where ever we call props.children */}
    <PlantList>
      Welcome
      <Counter header={"Header"} defaultClicks={0}/>
    </PlantList>
    {/* <Counter header={"Footer"} defaultClicks={5}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
