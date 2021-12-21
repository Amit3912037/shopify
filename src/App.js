import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development';
import './App.css';
import Login from './components/Authentication/Login';
import Cart from './components/Cart/Cart';
import Navbar from './components/Header/Navbar';
import Products from './components/Home/Products'
import AuthContext from './store/auth-context';

function App() {

  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Router>

        <Switch>
          {authCtx.isLoggedIn &&
            
              <Route path='/' exact >
                <Navbar />
                <Products />
              </Route>
         
          }
          {authCtx.isLoggedIn &&  <Route path='/cart' exact>
                <Navbar />
                <Cart />
              </Route>}
          {!authCtx.isLoggedIn && <Route path='/login'><Login /></Route>}
          <Route path="*">
            {authCtx.isLoggedIn && <Redirect to="/" />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
