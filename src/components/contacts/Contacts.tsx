import React from "react";
import styles from "./contacts.module.scss";
import { Container } from "react-bootstrap";
import ContactsForm from "./ContactsForm";

const Contacts: React.FC = () => {
    return (
        <section className={styles.contacts} id="contacts">
            <Container className={styles.wrapper}>
                <div className={styles.content}>
                    <h3 className="section-title">Connect with me:</h3>
                    <p className={styles.subtitle}>Satisfied with me? Please contact me</p>
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
                </div>
                <div className={styles.contact}>
                    <h5 className={styles.title}>Contact me, let’s make magic together</h5>
                    <ContactsForm />
                </div>
            </Container>
        </section>
    );
};

export default Contacts;
