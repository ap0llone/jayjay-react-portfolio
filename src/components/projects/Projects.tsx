import React from "react";
import styles from "./projects.module.scss";
import { Container } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";

const Projects: React.FC = () => {
    return (
        <section className={styles.projects} id="projects">
            <Container>
                <h4 className="section-title" style={{ marginBottom: "16px" }}>
                    Featured projects:
                </h4>
                <p className={styles.subtitle}>
                    I have worked on many projects over the course of being a Web Developer, here
                    are a few of my live, real-world projects
                </p>

                <div className={styles.row}>
                    <ProjectsCard
                        icon="twinder.png"
                        title="TWINDER"
                        text="A live Geolocation app for finding tweets and twitter users around you."
                    />
                    <ProjectsCard
                        icon="livents.png"
                        title="LIVENTS"
                        text="A video streaming app with live Geolocation, for streaming events."
                    />
                    <ProjectsCard
                        icon="moove.png"
                        title="MOOVE"
                        text="Mobile app for booking instant pickup & dropoff accross major cities."
                    />
                </div>
            </Container>
        </section>
    );
};

export default Projects;
