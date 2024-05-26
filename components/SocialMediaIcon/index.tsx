import styles from "./SocialMediaIcon.module.css"
import React, {ReactNode} from "react";

interface SocialMediaIconProps {
    link: string,
    icon: ReactNode
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({link, icon}) => {
    return (
        <div className={styles.iconcontainer}>
            <a href={link} target={"_blank"} className={styles.iconlink}>
                {icon}
            </a>
        </div>
    )
}

export default SocialMediaIcon;