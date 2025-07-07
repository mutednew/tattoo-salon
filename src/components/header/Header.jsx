import React from 'react';
import cl from './Header.module.css';

const Header = () => {
    return (
        <>
            <div className={cl.wrapper}>
                <div className={cl.container}>
                    <div className={cl.logo}>
                        <img src="/logo.jpg" alt="logo" />
                        <h6>ArtemTattoo</h6>
                    </div>
                    <div className={cl.navigation}>
                        <nav>Home</nav>
                        <nav>Designs</nav>
                        <nav>About</nav>
                        <nav>Contact</nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;