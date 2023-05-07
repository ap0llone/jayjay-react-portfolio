import React from "react";
import styles from "./about.module.scss";
import { Container } from "react-bootstrap";
import AboutCard from "./AboutCard";

const About: React.FC = () => {
    return (
        <section className={styles.about} id="about">
            <Container className={styles.wrapper}>
                <div>
                    <h4 className="section-title">About me:</h4>
                    <p className={styles.text}>
                        Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI
                        designer, and Mobile developer. I jhave honed my skills in Web Development
                        and advance i have core understanding of advance UI design principles. Here
                        are the major skiills i have.{" "}
                    </p>
                    <div className={styles.box}>
                        <span className={styles.span}>5+</span>
                        <p className={styles.experience}>
                            Years of experience. Specialised in building apps, while ensuring a
                            seamless web experience for end users.
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <AboutCard icon="design.svg" title="UI & UX DESIGNING" bgColor="#7562e0" />
                    <AboutCard icon="code.svg" title="WEB DEVELOPMENT" bgColor="#BDBDBD" />
                    <AboutCard icon="android.svg" title="MOBILE DEVELOPMENT" bgColor="#BDBDBD" />
                    <AboutCard
                        icon="python.svg"
                        title="WEB SCRAPING WITH PYTHON"
                        bgColor="#BDBDBD"
                    />
                </div>
            </Container>
        </section>
    );
};

export default About;
