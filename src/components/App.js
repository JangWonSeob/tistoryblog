import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from '../routes/Home/Home';
import Detail from '../routes/DetailPage/Detail';
import Refresh from '../routes/DetailPage/Refresh';
import Search from '../routes/DetailPage/Search';
import Sidebar from './Sidebar';
import Header from "./Header"

function App() {
  return <Router>
    <Header/>
    <Route exact path="/"  component={Home}/>
    <Route exact path="/search"  component={Search}/>
    <Route exact path="/detail/:id"  component={Detail}/>
    <Route exact path="/refresh"  component={Refresh}/>
    <Route exact path="/sidebar"  component={Sidebar}/>
    
  </Router>
}
  
export default App;
