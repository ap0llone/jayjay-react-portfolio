import React from "react";
import styles from "./about.module.scss";

interface Props {
    icon: string;
    title: string;
    bgColor: string;
}

const AboutCard: React.FC<Props> = ({ icon, title, bgColor }) => {
    return (
        <div className={styles.card} style={{ backgroundColor: `${bgColor}` }}>
            <img className={styles.img} src={icon} alt="Icon" />

            <h3 className={styles.title}>{title}</h3>
        </div>
    );
};

export default AboutCard;
