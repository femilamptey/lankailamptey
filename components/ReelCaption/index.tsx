import styles from './ReelCaption.module.css'
import { FaYoutube, FaInstagram, FaLinkedin, FaBehance, FaXing } from 'react-icons/fa';
import SocialMediaIcon from "../../components/SocialMediaIcon";
import {FaXTwitter} from "react-icons/fa6";

const ReelCaption = () => {
    return (
        <div className={styles.captionContainer}>
            <div className={styles.iconRow}>
                <SocialMediaIcon link={"https://www.youtube.com/@lankai_"} icon={<FaYoutube/>} />
                <SocialMediaIcon link={"https://www.instagram.com/lankai___?igsh=MXIxd3d3MjY0bTRvbw=="} icon={<FaInstagram/>} />
                <SocialMediaIcon link={"https://www.linkedin.com/in/lankailamptey/?originalSubdomain=gh"} icon={<FaLinkedin/>} />
                <SocialMediaIcon link={"https://www.behance.net/lankai#"} icon={<FaBehance/>} />
                <SocialMediaIcon link={"https://x.com/Lankai_"} icon={<FaXTwitter/>} />
            </div>
            <div className={styles.caption}>
                For commissions, collaborations, or anything else email me at <a className={styles.emailLink} href={`mailto:Lankaibusiness@gmail.com`}>Lankaibusiness@gmail.com</a>.
            </div>
        </div>
    )
}

export default ReelCaption