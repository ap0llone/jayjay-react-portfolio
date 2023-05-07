import React from "react";
import styles from "./services.module.scss";
import { Container } from "react-bootstrap";
import ServicesCard from "./ServicesCard";

const Services: React.FC = () => {
    return (
        <section className={styles.services}>
            <Container>
                <h4 className="section-title" style={{ marginBottom: "32px" }}>
                    The services i offer:
                </h4>

                <div className={styles.row}>
                    <ServicesCard
                        icon="design.svg"
                        title="UI & UX DESIGNING"
                        text="I design beautiful web iterfaces with Figma and Adove XD"
                        borderColor="#7562e0"
                        titleColor="#fff"
                    />
                    <ServicesCard
                        icon="code.svg"
                        title="WEB DEVELOPMENT"
                        text="I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS"
                        borderColor="#F5F5F5"
                        titleColor="#7562e0"
                    />
                    <ServicesCard
                        icon="android.svg"
                        title="MOBILE DEVELOPMENT"
                        text="I am an expert mobile developer. I have experience using Flutter and React Native."
                        borderColor="#7562e0"
                        titleColor="#fff"
                    />
                    <ServicesCard
                        icon="git.svg"
                        title="VERSION CONTROL"
                        text="I can use version control systems well, and Git & Mecurial are my go-to tool."
                        borderColor="#F5F5F5"
                        titleColor="#7562e0"
                    />
                    <ServicesCard
                        icon="js.svg"
                        title="NPM AND NODEJS"
                        text="I have core understanding of NPM. I can also develop general purpose applications with NodeJS"
                        borderColor="#7562e0"
                        titleColor="#fff"
                    />
                    <ServicesCard
                        icon="slider.svg"
                        title="WEB SCRAPING"
                        text="I can collect content and data from the internet then manipulate and analyze as needed."
                        borderColor="#F5F5F5"
                        titleColor="#7562e0"
                    />
                </div>
            </Container>
        </section>
    );
};

export default Services;
