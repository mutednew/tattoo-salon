import React from 'react';
import cl from './HeroSection.module.css';

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

                    <button className={cl.button}>BOOK NOW!</button>
                </div>
            </div>

            <div className={cl.sideText}>
                <span>FAEZ</span>
            </div>

            {/*  Arrow  */}
        </div>
    );
};

export default HeroSection;
