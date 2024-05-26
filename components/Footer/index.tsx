import React from "react";
import {HeaderFooterProps} from "../NavItem";
import navStyles from "../NavItem/NavItem.module.css";
import styles from "./Footer.module.css";
import Logo from "../Logo";

const Footer: React.FC<HeaderFooterProps> = ({navLinks}) => {
    return (
        <div className={styles.footerBody}>
            <div className={navStyles.navdiv}>
                {navLinks.map((navLink) => {
                    return <div className={navStyles.active} key={navLink.path}>
                        <a href={navLink.path} target="_blank" rel="noopener noreferrer">{navLink.name}</a>
                    </div>
                })}
            </div>
            <Logo/>
        </div>
    )
}

export default Footer;