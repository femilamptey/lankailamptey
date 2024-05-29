import React from "react";
import {HeaderFooterProps} from "../NavItem";
import navStyles from "../NavItem/NavItem.module.css";
import styles from "./Footer.module.css";
import Logo from "../Logo";
import Link from "next/link";

const Footer: React.FC<HeaderFooterProps> = ({navLinks}) => {
    return (
        <div className={styles.footerBody}>
            <div className={navStyles.navdiv}>
                {navLinks.map((navLink) => {
                    return <Link className={navStyles.active} key={navLink.path} href={navLink.path} target="_blank" rel="noopener noreferrer">
                        {navLink.name}
                    </Link>
                })}
            </div>
            <Logo/>
        </div>
    )
}

export default Footer;