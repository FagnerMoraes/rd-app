import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css'

function Footer(){
    return (
        <footer>          
        <ul className={styles.social_list}>
            <li><FaFacebook  /> @fagnermoraes</li>
            <li><FaTwitter  /> @fagnerkill</li>
            <li><FaLinkedin  /> @fagnermoraes</li>
        </ul>      
        </footer>    )
}

export default Footer;