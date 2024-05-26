import Project, {ProjectProps} from "../../components/Project";
import React from "react";
import styles from './Portfolio.module.css';

interface PortfolioProps {
    projects: ProjectProps[];
}

const Portfolio: React.FC<PortfolioProps> = ({projects}) => {
    return (
        <div className={styles.portfolioContainer}>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    caption={project.caption}
                    imagePath={project.imagePath}
                    link={project.link}
                />
            ))}
        </div>
    );
}

export default Portfolio