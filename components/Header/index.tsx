'use client'

import React from "react";
import {usePathname, useRouter} from "next/navigation";
import { HeaderFooterProps } from "../NavItem";
import styles from "./Header.module.css";
import navStyles from "../NavItem/NavItem.module.css";
import Link from "next/link";

const Header: React.FC<HeaderFooterProps> = ({ navLinks }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (path: string) => () => {
        router.push(path);
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <div className={styles.headerbody}>
            <div className={navStyles.navdiv}>
                {navLinks.map((navLink) => (
                    <Link
                        className={`${navStyles.navitem} ${isActive(navLink.path) ? navStyles.active : ''}`}
                        key={navLink.path}
                        href={navLink.path}
                    >
                        {navLink.name}
                    </Link>
                ))}
            </div>
            <div className={styles.nameitem}>
                <div>Lankai</div>
                <div>Lamptey</div>
            </div>
        </div>
    );
}

export default Header;
