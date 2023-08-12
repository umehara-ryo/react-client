import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from "./pages/Hello";
import P1 from "./pages/P1";
import P2 from "./pages/P2";
import P3 from "./pages/P3";
import P8 from "./pages/P8";

const stu1 = {id : 1,name : "umehara", sex : "男",age : 20};
const stu2 = {id : 1,name : "umehara", sex : "男",age : 20};
const students = [stu1,stu2];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     {/* <Hello msg={"七瀬最高"} age={1}/>
      <Hello msg={"七瀬最高"}/>
      <P1 student={stu1}></P1>d
      <P2　students={students} hideAge={true}></P2>*/}
      <P8></P8>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
