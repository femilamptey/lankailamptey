"use client"

import styles from './Project.module.css';
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from 'react';

export interface ProjectProps {
    imagePath: string;
    caption: string;
    link: string;
}

const Project: React.FC<ProjectProps> = ({imagePath, link, caption}) => {

    const [dimensions, setDimensions] = useState({ width: 800, height: 450 });

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            let width, height;

            // Define breakpoints
            if (screenWidth >= 1024) {
                // Desktop
                width = screenWidth * 0.25;
            } else if (screenWidth >= 768) {
                // Tablet
                width = screenWidth * 0.5;
            } else {
                // Mobile
                width = screenWidth * 0.8;
            }

            const aspectRatio = 16 / 9;
            height = width / aspectRatio;

            setDimensions({ width, height });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial dimensions

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.projectContainer}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <Image
                    src={imagePath}
                    alt={caption}
                    width={dimensions.width}
                    height={dimensions.height}
                />
            </Link>
            <div className={styles.caption}>
                {caption}
            </div>
        </div>
    )
}

export default Project