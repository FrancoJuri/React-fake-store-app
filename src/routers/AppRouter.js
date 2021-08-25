import React, { useContext, useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AllProducts from '../components/AllProducts';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import Cart from '../components/Cart';
import CategoryScreen from '../components/CategoryScreen';
import HomeScreen from '../components/HomeScreen';
import ProductScreen from '../components/ProductScreen';
import Spinner from '../components/Spinner';
import NavBar from '../components/ui/NavBar';
import { context } from '../createContext';
import { firebase } from '../firebase/firebase-config';
import { types } from '../types/types';


export default function AppRouter() {

  const {dispatchAuth, isLoggedIn, setIsLoggedIn} = useContext(context);

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {

      if(user?.uid){

        dispatchAuth({
          type: types.login,
          payload: {
            uid: user.uid,
            displayName: user.displayName,
          }
        })
         
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false);
      }

      setChecking(false);

    });
  }, [dispatchAuth, setChecking, setIsLoggedIn]) 

  if(checking){
    return (
      <Spinner />
    )
  }

  return (
    <Router>

      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className='container'>

        <Switch>

          <Route exact path='/' component={HomeScreen} /> 
          <Route path='/category/:category' component={CategoryScreen} />
          <Route path='/all' component={AllProducts} />
          <Route path='/product/:id' component={ProductScreen} />

            {
              (isLoggedIn)
              &&
              <Route path='/cart' component={Cart} />
            }

            {
              (!isLoggedIn)
              &&
              <Switch>
                <Route path='/auth/login' component={LoginScreen} />
                <Route path='/auth/register' component={RegisterScreen} />
                <Redirect to='/auth/login' />
              </Switch>
            }

          <Redirect to='/' />
        </Switch>

      </div>

    </Router>
    
  );
}