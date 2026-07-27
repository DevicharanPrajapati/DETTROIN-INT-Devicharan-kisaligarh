import HeroSection from "../common/HeroSection";
import backgroundImage from "../../assets/images/about/a1.webp";

const AboutHero = () => {
  return (
    <HeroSection
      backgroundImage={backgroundImage}
      badge="About Krishna International School"
      title={
        <>
          Empowering Young Minds,
          <br />
          Inspiring Future Leaders
        </>
      }
      description="Krishna International School is dedicated to nurturing academic excellence, strong values, creativity, and leadership in every student. We provide a safe, inclusive, and inspiring learning environment where children grow into confident and responsible global citizens."
    />
  );
};

export default AboutHero;