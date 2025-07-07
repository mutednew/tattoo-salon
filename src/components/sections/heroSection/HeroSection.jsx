import React from 'react';
import cl from './HeroSection.module.css';
import CustomButton from "../../UI/button/CustomButton.jsx";

const HeroSection = () => {
    return (
        <div className={cl.hero}>
            <img className={cl.backgroundText} src="/TATTOO.png" alt="TATTOO" />

            <div className={cl.container}>
                <div className={cl.left}>
                    <img src="/FacelessMan.png" alt=""/>
                </div>

                <div className={cl.right}>
                    <h2 className={cl.title}>Tattoo Studio</h2>
                    <p className={cl.text}>
                        Lorem Ipsom Sole Dowa Bro Js F Asd Kasmd Axsdkakj Askd Asna Ksdka A Skd Asdm Asdj Asn Asjd Asjn Asn Ask
                    </p>

                    <CustomButton
                        onClick={() => {}}
                    >
                        BOOK NOW!
                    </CustomButton>
                </div>
            </div>

            <div className={cl.sideText}>
                <span>FAEZ</span>
            </div>

            <div className={cl.arrowBtn}>
                <span></span>
            </div>
        </div>
    );
};

export default HeroSection;
