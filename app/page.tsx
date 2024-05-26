
import styles from "./page.module.css";
import Header from "../components/Header";
import {NavLinkProps} from "../components/NavItem";
import Footer from "../components/Footer";
import Reel from "../components/Reel";
import ReelCaption from "../components/ReelCaption";

export default function Home() {

  const headerLinks: NavLinkProps[] = [
    {
      name: 'Reel',
      path: '/',
    },
    {
      name: 'Work',
      path: '/work'
    },
    {
      name: 'About Me & Contact',
      path: '/about'
    }
  ];

  const footerLinks: NavLinkProps[] = [
    {
      name: 'Twitter',
      path: '',
    },
    {
      name: 'Behance',
      path: ''
    },
    {
      name: 'Instagram',
      path: ''
    }
  ];

  return (
      <main className={styles.main}>
        <Header navLinks={headerLinks}/>

        <div className={styles.center}>
          <Reel reelPath={"/Website Loop.gif"}/>
          <ReelCaption />
        </div>

        <Footer navLinks={footerLinks}/>
      </main>
  );
}
