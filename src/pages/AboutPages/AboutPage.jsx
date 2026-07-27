import AboutHero from "../../components/about/AboutHero";
import OverviewSection from "../../components/about/OverviewSection";
import ChairmanMessage from "../../components/about/ChairmanMessage";
import PrincipalMessage from "../../components/about/PrincipalMessage";
import CampusSection from "../../components/about/CampusSection";
import RecognitionSection from "../../components/about/RecognitionSection";
import AboutNavigation from "../../components/about/AboutNavigation";
// import CTA from "../components/CTA";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutNavigation />

      <OverviewSection />

      <ChairmanMessage />

      <PrincipalMessage />

      <CampusSection />

      <RecognitionSection />

      {/* <CTA /> */}
    </>
  );
};

export default AboutPage;