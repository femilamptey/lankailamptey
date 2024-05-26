import styles from "./Reel.module.css";
import Image from 'next/image';
import React from "react";

interface ReelProps {
    reelPath: string;
}

const Reel: React.FC<ReelProps> = ({reelPath}) => {
    return (
        <div className={styles.reelcontainer}>
            <Image
                src={reelPath}
                alt={`${reelPath} image`}
                width={800}
                height={450}
            />
        </div>
    );
}

export default Reel;