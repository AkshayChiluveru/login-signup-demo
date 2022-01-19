import React from 'react'; 
import { Router, Route } from 'react-router-dom';
 import Home from './pages/Home'; 
 import Login from './pages/Login';
  import Signup from './pages/Signup';
function Routes() {
     return (
          <Router>
               <Route exact path="/">
<Home /> 
</Route>
 <Route path="/Login">
<Login />
 </Route> 
 <Route path="/signup">
<Signup />
 </Route>
  </Router>
     );
}
export default Router;