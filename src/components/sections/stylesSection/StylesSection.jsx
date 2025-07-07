import React from 'react';
import cl from './StylesSection.module.css';

const StylesSection = () => {
    return (
        <>
            <div className={cl.wrapper}>
                <div className={cl.container}>
                    <div className={cl.info}>
                        <h3>Various Styles</h3>
                        <p>
                            Discover unique, custom tattoo designs crafted
                            with passion and precision. Whether you want
                            bold traditional ink or delicate fine lines,
                            every piece is tailored to express your story.
                            Step into the studio and wear your art proudly.
                        </p>
                        <button>Designs</button>
                    </div>
                    <div>
                        <img src="/styles.png" alt="styles" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StylesSection;