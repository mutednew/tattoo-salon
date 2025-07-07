import React from 'react';
import cl from './Header.module.css';

const CustomButton = ({ children, backgroundColor = '#000', onClick }) => {
    return (
        <button
            className={cl.button}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            { children }
        </button>
    );
};

export default CustomButton;