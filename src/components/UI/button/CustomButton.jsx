import React from 'react';
import cl from './CustomButton.module.css';

const CustomButton = ({ children, color = '#fff', backgroundColor = '#000', onClick }) => {
    return (
        <button
            className={cl.button}
            onClick={onClick}
            style={{ backgroundColor, color }}
        >
            { children }
        </button>
    );
};

export default CustomButton;