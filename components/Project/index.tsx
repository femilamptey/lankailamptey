"use client"

import styles from './Project.module.css';
import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

            const aspectRatio = 4 / 3;
            height = width / aspectRatio;

            setDimensions({ width, height });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial dimensions

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            key={caption} whileHover={{
            scale: 1.075,
            transition: {
                    duration: .4
                }
        }}
        >
            <div className={styles.projectContainer}>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <video
                        autoPlay
                        muted
                        loop
                        src={imagePath}
                        width={dimensions.width}
                        height={dimensions.height}
                    />
                </Link>
                <div className={styles.caption}>
                    {caption}
                </div>
            </div>
        </motion.div>

    )
}

export default Project