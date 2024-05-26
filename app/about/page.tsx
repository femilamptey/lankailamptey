import styles from "../page.module.css";
import aboutStyles from "./page.module.css"
import Header from "../../components/Header";
import {NavLinkProps} from "../../components/NavItem";
import Footer from "../../components/Footer";
import ProfilePicture from "../../components/ProfilePicture";
import {Button} from "@nextui-org/button";

const About = () => {

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

            <div className={aboutStyles.container}>
                <div className={aboutStyles.columnLeft}>

                    <div className={aboutStyles.text}>
                        Hey! I’m Lankai Lamptey, a Motion <br/>
                        & 3D Designer from Accra, Ghana.
                    </div>

                    <div className={aboutStyles.text}>
                        A visionary when it comes to creativity <br/>
                        and a veteran when it comes to execution. <br/>
                        Creating has been part of my life since I was <br/>
                        a child, and now that I have the skills to create <br/>
                        at the highest level.
                    </div>

                    <div className={aboutStyles.text}>
                        Whether you have a brand to communicate, <br/>
                        a story to tell, or anything in-between...
                    </div>

                    <button className={aboutStyles.startedBtn}>Let’s Get Started</button>
                </div>

                <div className={aboutStyles.columnRight}>
                <ProfilePicture imagePath={"/MEMAINPFP.jpg"} />
                </div>

            </div>

            <Footer navLinks={footerLinks}/>
        </main>
    );
}

export default About;