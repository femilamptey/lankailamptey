import Image from 'next/image';
import styles from './ProfilePicture.module.css'
import React from "react";

interface ProfilePictureProps {
    imagePath: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({imagePath}) => {
    return (
        <img src={imagePath}
             alt={`${imagePath} image`}
             className={styles.profilePicture} />
    );
}

export default ProfilePicture;