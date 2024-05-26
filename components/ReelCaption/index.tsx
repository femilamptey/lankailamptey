import styles from './ReelCaption.module.css'
import { FaYoutube, FaInstagram, FaLinkedin, FaBehance, FaXing } from 'react-icons/fa';
import SocialMediaIcon from "../../components/SocialMediaIcon";
import {FaXTwitter} from "react-icons/fa6";

const ReelCaption = () => {
    return (
        <div className={styles.captionContainer}>
            <div className={styles.iconRow}>
                <SocialMediaIcon link={""} icon={<FaYoutube/>} />
                <SocialMediaIcon link={""} icon={<FaInstagram/>} />
                <SocialMediaIcon link={""} icon={<FaLinkedin/>} />
                <SocialMediaIcon link={""} icon={<FaBehance/>} />
                <SocialMediaIcon link={""} icon={<FaXTwitter/>} />
            </div>
            <div className={styles.caption}>
                For commissions, collaborations, or anything else email me at <a className={styles.emailLink} href={`mailto:Lankaibusiness@gmail.com`}>Lankaibusiness@gmail.com</a>.
            </div>
        </div>
    )
}

export default ReelCaption