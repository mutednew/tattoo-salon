import React from 'react';
import cl from './StylesSection.module.css';
import CustomButton from "../../UI/button/CustomButton.jsx";

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

                        <CustomButton
                            backgroundColor="#ECECEC"
                            color="#000"
                        >
                            DESIGNS
                        </CustomButton>
                    </div>
                    <div>
                        <img src="/styles.png" alt="styles" />
                    </div>
                </div>

                <div className={cl.arrowBtn}>
                    <span></span>
                </div>
            </div>
        </>
    );
};

export default StylesSection;