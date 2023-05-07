import React from "react";
import styles from "./projects.module.scss";
import PrimaryButton from "../UI/PrimaryButton";

interface Props {
    icon: string;
    title: string;
    text: string;
}

const ProjectsCard: React.FC<Props> = ({ icon, title, text }) => {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={icon} alt="Icon" />

            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>

            <div className={styles.btns}>
                <PrimaryButton text="View Live" icon="eye.svg" />
            </div>
        </div>
    );
};

export default ProjectsCard;
