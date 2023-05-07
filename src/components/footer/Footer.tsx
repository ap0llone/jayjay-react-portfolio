import React from "react";
import styles from "./footer.module.scss";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.wrapper}>
                <ul className={styles.list}>
                    <li className={styles.element}>@2022 Jayjay Dinero Dinero</li>
                    <li className={styles.element}>Fullstack Developer</li>
                    <li className={styles.element}>UI Designer</li>
                    <li className={styles.element}>Designed by @ernestechie</li>
                </ul>
                <div className={styles.icons}>
                    <a href="#!">
                        <img src="facebook.svg" alt="Icon" />
                    </a>
                    <a href="#!">
                        <img src="instagram.svg" alt="Icon" />
                    </a>
                    <a href="#!">
                        <img src="dribble.svg" alt="Icon" />
                    </a>
                    <a href="#!">
                        <img src="sms.svg" alt="Icon" />
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
