import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import Banner from '../Banner/Banner';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSighOut = () => {
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Books</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <button onClick={handleSighOut}>Signout</button>
                        :
                        <Link to="/login">Login</Link>
                }


            </div>
        </nav>
    );
};

export default Header;