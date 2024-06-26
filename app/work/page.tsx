import workStyles from "./page.module.css";
import Header from "../../components/Header";
import {NavLinkProps} from "../../components/NavItem";
import Footer from "../../components/Footer";
import Portfolio from "../../components/Portfolio";
import {ProjectProps} from "../../components/Project";

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
            path: 'https://x.com/Lankai_',
        },
        {
            name: 'Behance',
            path: 'https://www.behance.net/lankai#'
        },
        {
            name: 'Instagram',
            path: 'https://www.instagram.com/lankai___?igsh=MXIxd3d3MjY0bTRvbw=='
        }
    ];

    const projects: ProjectProps[] = [
        {
            imagePath: "/project-videos/arten.mp4",
            caption: "Arten SFR",
            link: "https://youtu.be/MJ0DwjuGunI"
        },
        {
            imagePath: "/project-videos/alphagang.mp4",
            caption: "ALPHAGANG",
            link: "https://www.behance.net/gallery/194827205/ALPHAGANG"
        },
        {
            imagePath: "/project-videos/asaawa.mp4",
            caption: "Asaawa",
            link: "https://www.behance.net/gallery/194252241/Asaawa"
        },
        {
            imagePath: "/project-videos/uefa.mp4",
            caption: "UEFA EURO 2024 Country Animations",
            link: "https://www.behance.net/gallery/201020091/UEFA-EURO-2024-Country-Animations",
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