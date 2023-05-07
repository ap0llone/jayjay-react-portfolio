import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Hero, About, Services, Projects, Contacts, Footer } from "./components";

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );
};

export default App;
