import styles from "../page.module.css";
import workStyles from "./page.module.css";
import Header from "../../components/Header";
import {NavLinkProps} from "../../components/NavItem";
import Footer from "../../components/Footer";
import Portfolio from "@/components/Portfolio";
import {ProjectProps} from "@/components/Project";

const Work = () => {

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

    const projects: ProjectProps[] = [
        {
            imagePath: "/arten gif.gif",
            caption: "Arten SFR",
            link: "/project1"
        },
        {
            imagePath: "/gif.gif",
            caption: "ALPHAGANG",
            link: "/project1"
        },
        {
            imagePath: "/Website Loop.gif",
            caption: "Asaawa",
            link: "/project1"
        }
    ];

    return (
        <main className={workStyles.main}>
            <Header navLinks={headerLinks}/>

            <div className={workStyles.container}>

                <div className={workStyles.workExperienceSection}>
                    <div className={workStyles.workexperience}>
                        5+ years of experience working <br/>
                    </div>

                    <div className={workStyles.workexperience}>
                        freelance, with agencies, studios, and <br/>
                    </div>

                    <div className={workStyles.workexperience}>
                        personal projects. <br/>
                    </div>

                    <div className={workStyles.workexperience}>
                        Ensuring the highest quality possible <br/>
                    </div>

                    <div className={workStyles.workexperience}>
                        on the final product in the required <br/>
                    </div>

                    <div className={workStyles.workexperience}>
                        timeframe.
                    </div>
                </div>

                <Portfolio projects={projects}/>
            </div>

            <Footer navLinks={footerLinks}/>
        </main>
    );
}

export default Work;