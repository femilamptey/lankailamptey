'use client';

import { useDispatch } from 'react-redux';
import { showPopup } from '../../store/popupSlice';
import { AppDispatch } from '../../store/store';
import styles from '../page.module.css';
import aboutStyles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProfilePicture from '../../components/ProfilePicture';
import PopupForm from '../../components/PopupForm';

const About = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleButtonClick = () => {
        dispatch(showPopup());
    };

    const headerLinks = [
        { name: 'Reel', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'About Me & Contact', path: '/about' },
    ];

    const footerLinks = [
        { name: 'Twitter', path: 'https://x.com/Lankai_' },
        { name: 'Behance', path: 'https://www.behance.net/lankai#' },
        { name: 'Instagram', path: 'https://www.instagram.com/lankai___?igsh=MXIxd3d3MjY0bTRvbw==' },
    ];

    return (
        <main className={styles.main}>
            <Header navLinks={headerLinks} />
            <div className={aboutStyles.container}>
                <div className={aboutStyles['column-left']}>
                    <div className={aboutStyles.text}>
                        Hey! I’m Lankai Lamptey, a Motion <br />
                        & 3D Designer from Accra, Ghana.
                    </div>
                    <div className={aboutStyles.text}>
                        A visionary when it comes to creativity <br />
                        and a veteran when it comes to execution. <br />
                        Creating has been part of my life since I was <br />
                        a child, and now that I have the skills to create <br />
                        at the highest level.
                    </div>
                    <div className={aboutStyles.text}>
                        Whether you have a brand to communicate, <br />
                        a story to tell, or anything in-between...
                    </div>
                    <button className={aboutStyles.startedBtn} onClick={handleButtonClick}>
                        Let’s Get Started
                    </button>
                </div>
                <div className={aboutStyles['column-right']}>
                    <ProfilePicture imagePath="/MEMAINPFP.jpg" />
                </div>
            </div>
            <Footer navLinks={footerLinks} />
            <PopupForm />
        </main>
    );
};

export default About;
