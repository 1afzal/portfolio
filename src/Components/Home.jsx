import React from "react";
import ThemeToggle from "./ThemeToggle";
import StarBackground from "./StarBackground";
import HecroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import  ProjectsSection  from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
export default function Home(){
    return(
        <>
        <ThemeToggle />
        <StarBackground />
        <NavBar />
        <main>
            <HecroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </main>
        </>
    )
}