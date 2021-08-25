import React, { useEffect, useReducer, useState } from 'react';
import { cartReducer } from './reducers/cartReducer';
import { context } from './createContext';
import AppRouter from './routers/AppRouter';
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';

const init = () => JSON.parse(localStorage.getItem('products')) || [];

const App = () => {

    const [state, dispatch] = useReducer(cartReducer, [], init);

    const [stateAuth, dispatchAuth] = useReducer(authReducer, {});
    const [stateUi, dispatchUi] = useReducer(uiReducer, {
        loading: false, 
        msgError: null,
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(state));
    }, [state])
    
    return (
        <context.Provider value={{state, dispatch, stateAuth, dispatchAuth, stateUi, dispatchUi, isLoggedIn, setIsLoggedIn}}>
             <AppRouter />
        </context.Provider>
    )
}

export default App;
