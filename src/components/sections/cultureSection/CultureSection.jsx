import React from 'react';
import cl from './CultureSection.module.css';
import { FaPlay } from 'react-icons/fa';
import YouTubeIcon from "../../icons/YouTubeIcon.jsx";

const CultureSection = () => {
    return (
        <div className={cl.section}>
            <div className={cl.left}>
                <h1 className={cl.title}>Tattoo culture</h1>
                <p className={cl.description}>
                    Safe sajd llkadk f ka<br />
                    as a a  asldmkasmd aasd msakdm kaskd<br />
                    askmd kas a das fa adksdm aksdaasfnas faf ak<br />
                    fakdk asmfkasaaas akakfn kksf akkas aksd ka
                </p>

                <div className={cl.circleImage}>
                    <img
                        src="/pexels.png"
                        alt="Tattoo Artist"
                    />
                </div>
            </div>

            <div className={cl.right}>
                <div className={cl.videoContainer}>
                    <img
                        src="/hands.png"
                        alt="Tattoo Hands"
                        className={cl.videoImage}
                    />

                    <div className={cl.playButton}>
                        <FaPlay />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultureSection;