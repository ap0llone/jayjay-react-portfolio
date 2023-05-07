import React from "react";
import styles from "./navbar.module.scss";

interface Props {
    activeNav: string;
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
    navOpen: boolean;
}

const NavList: React.FC<Props> = ({ activeNav, setActiveNav, navOpen }) => {
    return (
        <div className={navOpen ? `${styles.list} ${styles.open}` : `${styles.list}`}>
            <a
                className={activeNav === "#" ? `${styles.link} ${styles.active}` : `${styles.link}`}
                onClick={() => setActiveNav("#")}
                href="#"
            >
                Home
            </a>
            <a
                className={
                    activeNav === "#about" ? `${styles.link} ${styles.active}` : `${styles.link}`
                }
                onClick={() => setActiveNav("#about")}
                href="#about"
            >
                About
            </a>
            <a
                className={
                    activeNav === "#projects" ? `${styles.link} ${styles.active}` : `${styles.link}`
                }
                onClick={() => setActiveNav("#projects")}
                href="#projects"
            >
                Projects
            </a>
            <a
                className={
                    activeNav === "#contacts" ? `${styles.link} ${styles.active}` : `${styles.link}`
                }
                onClick={() => setActiveNav("#contacts")}
                href="#contacts"
            >
                Contacts
            </a>
        </div>
    );
};

export default NavList;
