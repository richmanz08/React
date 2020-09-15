import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter} from 'react-router-dom'



const AppWithRouter=()=>(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)
ReactDOM.render(  <AppWithRouter/>,document.getElementById('root'));
serviceWorker.unregister();
