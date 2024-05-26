import styles from './NavItem.module.css'

export interface NavLinkProps {
    name: string;
    path: string;
}

export interface HeaderFooterProps {
    navLinks: NavLinkProps[];
}

export const NavDiv = () => {
    return (
        <div className={styles.navdiv}></div>
    )
}

export const NavItem = () => {
    return (
        <div className={styles.navitem}></div>
    )
}

export default { NavDiv, NavItem };