import React from "react";
import styles from "./hero.module.scss";
import { Container } from "react-bootstrap";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";

const Hero: React.FC = () => {
    return (
        <div className={styles.hero} id="home">
            <Container className={styles.wrapper}>
                <div className={styles.content} data-aos="zoom-in">
                    <h4 className={styles.subtitle}>Hello, i’m</h4>
                    <h2 className={styles.title}>Jayjay D. Dinero</h2>
                    <p className={styles.text}>
                        Freelance UI designer, Fullstack developer, & Data Miner. I create seamless
                        web experiences for end-users.
                    </p>
                    <div className={styles.btns}>
                        <PrimaryButton text={"About me"} icon={"user.svg"} href="#about" />
                        <SecondaryButton text={"Projects"} icon={"eye.svg"} href="#projects" />
                    </div>
                </div>

                <div className={styles.img}>
                    <img src="hero.png" alt="HeroImg" />
                </div>
            </Container>
            <div className={styles.overlay}></div>
        </div>
    );
};

export default Hero;
