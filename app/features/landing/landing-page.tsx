import { AboutSection } from "./sections/about-section";
import { ContactSection } from "./sections/contact-section";
import { HeroSection } from "./sections/hero-section";
import { ProcessSection } from "./sections/process-section";
import { ProjectsSection } from "./sections/projects-section";
import { ServicesSection } from "./sections/services-section";
import { SiteFooter, SiteHeader } from "./sections/site-chrome";
import "./landing.css";

export function LandingPage() {
  return (
    <div className="landing-page">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
