import HeroSection from "../common/HeroSection";
import academicHero from "../../assets/images/academic/a1.webp";

const AcademicHero = () => {
  return (
    <HeroSection
      backgroundImage={academicHero}
      badge="Academics"
      title={
        <>
          Learning Today,
          <br />
          Leading Tomorrow
        </>
      }
      description="Our academic program combines conceptual understanding, experiential learning, innovative teaching practices, and technology-enabled education to nurture confident, curious, and responsible learners. We empower every student with the knowledge, skills, and values needed to excel in the 21st century."
    />
  );
};

export default AcademicHero;