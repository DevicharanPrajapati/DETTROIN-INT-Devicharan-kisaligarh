import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <HeroContent />
        <HeroImage />
      </div>

      <HeroStats />
    </section>
  );
};

export default HeroSection;