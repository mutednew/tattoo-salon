import React from 'react';
import cl from './Footer.module.css';
import EmailIcon from "../icons/EmailIcon.jsx";
import PhoneIcon from "../icons/PhoneIcon.jsx";
import FaceBookIcon from "../icons/FaceBookIcon.jsx";
import InstagramIcon from "../icons/InstagramIcon.jsx";
import TwitterIcon from "../icons/TwitterIcon.jsx";
import YouTubeIcon from "../icons/YouTubeIcon.jsx";
import TelegramIcon from "../icons/TelegramIcon.jsx";

const Footer = () => {
    return (
        <>
            <div className={cl.wrapper}>
                <div className={cl.container}>
                    <div className={cl.contacts}>
                        <div className={cl.contactItem}>
                            <PhoneIcon/>
                            <p>090 1254 7891</p>
                        </div>
                        <div className={cl.contactItem}>
                            <EmailIcon/>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                    <div className={cl.socialMedias}>
                        <FaceBookIcon/>
                        <InstagramIcon/>
                        <TwitterIcon/>
                        <YouTubeIcon/>
                        <TelegramIcon/>
                    </div>
                </div>
                <p>2020 Faez tgh | All right reserved</p>
            </div>
        </>
    );
};

export default Footer;