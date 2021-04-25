import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from '../routes/Home/Home';
import Detail from '../routes/DetailPage/Detail';
import Refresh from '../routes/DetailPage/Refresh';
import Search from '../routes/DetailPage/Search';

function App() {
  return <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/search" component={Search} />
    <Route exact path="/:id" component={Detail}/>
    <Route exact path="/refresh" component={Refresh}/>
  </Router>
}
  
export default App;
