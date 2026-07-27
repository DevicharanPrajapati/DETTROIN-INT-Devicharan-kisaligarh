import HeroSection from "../common/HeroSection";
import cocurriculumImg1 from "../../assets/images/cocurriculum/c2.webp";

const CoCurricularHero = () => {
  return (
    <HeroSection
      backgroundImage={cocurriculumImg1}
      badge="Beyond the Classroom"
      title={
        <>
          Discover, Develop,
          <br />
          and Shine
        </>
      }
      description="At Krishna International School, co-curricular activities are an integral part of holistic education. Through sports, performing arts, creative expression, leadership programs, and community engagement, students develop confidence, teamwork, creativity, and essential life skills that prepare them for success beyond the classroom."
    />
  );
};

export default CoCurricularHero;