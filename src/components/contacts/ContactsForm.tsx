import React from "react";
import styles from "./contacts.module.scss";

const ContactsForm: React.FC = () => {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Name:" />
            <input className={styles.input} type="email" placeholder="Email:" />
            <textarea className={styles.msg} placeholder="Message:"></textarea>
            <button className={styles.btn} type="submit">
                Send
            </button>
        </form>
    );
};

export default ContactsForm;
