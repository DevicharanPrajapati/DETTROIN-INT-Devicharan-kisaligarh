import CoCurricularHero from "../../components/coCurricular/CoCurricularHero";
import CoCurricularOverview from "../../components/coCurricular/CoCurricularOverview";
import SportsSection from "../../components/coCurricular/SportsSection";
import FineArtsSection from "../../components/coCurricular/FineArtsSection";
import PerformingArtsSection from "../../components/coCurricular/PerformingArtsSection";
import CommunityEngagementSection from "../../components/coCurricular/CommunityEngagementSection";
import ExcursionsSection from "../../components/coCurricular/ExcursionsSection";
import CoCurricularNavigation from "../../components/coCurricular/CoCorriculumNavigation";

// import CTA from "../components/CTA";

const CoCurricularPage = () => {
 
  return (
    <>
    
      <CoCurricularHero />
      <CoCurricularNavigation />

      <CoCurricularOverview />

      <SportsSection />

      <FineArtsSection />

      <ExcursionsSection />

      <PerformingArtsSection />

      <CommunityEngagementSection />
      

      {/* <CTA /> */}
    </>
  );
};

export default CoCurricularPage;
