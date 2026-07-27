import HeroSection from "../common/HeroSection";
import admissionHero from "../../assets/images/admission/adminssionHero.png";

const AdmissionHero = () => {
  return (
    <HeroSection
      backgroundImage={admissionHero}
      badge="Admissions Open"
      title={
        <>
          Begin Your Child's
          <br />
          Journey to Excellence
        </>
      }
      description="Join Krishna International School and provide your child with a nurturing environment that fosters academic excellence, character development, creativity, and lifelong learning. Our transparent admission process ensures a smooth beginning for every student's educational journey."
    />
  );
};

export default AdmissionHero;