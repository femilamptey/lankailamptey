import styles from "./Reel.module.css";
import Image from 'next/image';
import React from "react";

interface ReelProps {
    reelPath: string;
}

const Reel: React.FC<ReelProps> = ({reelPath}) => {
    return (
        <div className={styles.reelcontainer}>
            <iframe className={styles.iframe}
                    src="https://www.youtube.com/embed/QMI8TwRGheU?si=KZKQDB0yiqUhYvAs&amp;autoplay=1&mute=1&loop=1&controls=1&modestbranding=1"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>
    );
}

export default Reel;