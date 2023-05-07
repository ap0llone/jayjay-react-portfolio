import React from "react";
import styles from "./services.module.scss";

interface Props {
    icon: string;
    title: string;
    text: string;
    borderColor: string;
    titleColor: string;
}

const ServicesCard: React.FC<Props> = ({ icon, title, text, borderColor, titleColor }) => {
    return (
        <div className={styles.card} style={{ border: `3px solid ${borderColor} ` }}>
            <img className={styles.img} src={icon} alt="Icon" />

            <h3 className={styles.title} style={{ color: `${titleColor}` }}>
                {title}
            </h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default ServicesCard;
