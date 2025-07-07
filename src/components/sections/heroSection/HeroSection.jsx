import React from 'react';
import cl from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div className={cl.hero}>
            <h1 className={cl.backgroundText}>TATTOO</h1>

            <div className={cl.container}>
                {/* Левая часть — изображение */}
                <div className={cl.left}>
                    <div className={cl.imageWrapper}>
                        <img src="/hero_logo.png" alt="Tattoo" />
                    </div>
                </div>

                {/* Правая часть — текст и кнопка */}
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
        </div>
    );
};

export default HeroSection;
