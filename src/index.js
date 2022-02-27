import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { store } from './redux/store';
import App from './App';





// import {  Switch, Redirect } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
      </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Routes>
//         {/* <Route> */}
           
//            {/* <Route path="/crud-users-react-redux" element={<App/>}/> */}
//            {/* <Route path="/:login" element={<App/>}/> */}
//         {/* </Route> */}
//       </Routes>
//     <App />
   
//     </BrowserRouter>
//     </Provider>,document.getElementById('root')
// );
// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
  
//     <App />
   
//     </BrowserRouter>
//     </Provider>
//   ,
//   document.getElementById('root2')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

