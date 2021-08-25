import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { context } from '../../createContext';
import '../../css/styles.css';
import { types } from '../../types/types';
import {firebase} from '../../firebase/firebase-config';

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
    
    const {stateAuth, dispatchAuth} = useContext(context);

    const handleLogout = () => {
        dispatchAuth({
            type: types.logout,
        })
        setIsLoggedIn(false);
        firebase.auth().signOut();
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <NavLink  to='/' className="navbar-brand">Store</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to='/' className="nav-link" activeClassName='active'>Home</NavLink>
                        </li>
                        {
                            (isLoggedIn)
                            &&
                            <li className="nav-item">
                                <NavLink exact to='/cart' className="nav-link" activeClassName='active'>My cart</NavLink>
                            </li>
                        }
                        <li className="nav-item">
                            <NavLink exact to='/all' className="nav-link" activeClassName='active'>All products</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </div>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li><NavLink to='/category/electronics' className="dropdown-item">electronics</NavLink></li>
                                <li><NavLink to='/category/jewelery'  className="dropdown-item">jewelery</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    {
                        (!isLoggedIn)
                        ?
                        <span className='navbar-text'>
                            <Link to='/auth/login' className='me-2 btn btn-primary mt-lg-0 mt-3'>Sign in</Link>
                        </span>
                        : 
                        <div className="btn-group dropdown mt-lg-0 mt-3">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                {stateAuth.name}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark user-dropdown-menu">
                                <li className='dropdown-item pointer' onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
