import React, { useState } from "react";
import styles from "./navbar.module.scss";
import NavList from "./NavList";
import { Container } from "react-bootstrap";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

const Navbar: React.FC = () => {
    const [activeNav, setActiveNav] = useState<string>("#");
    const [navOpen, setNavOpen] = useState<boolean>(false);

    const closeNav = () => {
        setNavOpen(false);
    };

    window.addEventListener("scroll", closeNav);

    return (
        <nav className={styles.nav}>
            <Container className={styles.wrapper}>
                <a onClick={() => setActiveNav("#")} className={styles.logo} href="#">
                    Jayjay Dinero
                </a>

                <NavList activeNav={activeNav} setActiveNav={setActiveNav} navOpen={navOpen} />

                <button onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? (
                        <MdOutlineClose className={styles.menu} />
                    ) : (
                        <BiMenuAltRight className={styles.menu} />
                    )}
                </button>
            </Container>
        </nav>
    );
};

export default Navbar;
