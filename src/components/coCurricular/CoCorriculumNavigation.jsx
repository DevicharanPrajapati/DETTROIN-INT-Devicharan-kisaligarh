import SectionNavigation from "../common/SectionNavigation";

const cocurricularTabs = [
  {
    title: "SPORTS & LIFE SKILLS",
    href: "#sports-life-skills",
  },
  {
    title: "PERFORMING ARTS",
    href: "#performing-arts",
  },
  {
    title: "FINE ARTS",
    href: "#fine-arts",
  },
  {
    title: "EXCURSIONS & TRIPS",
    href: "#excursions-trips",
  },
  {
    title: "COMMUNITY ENGAGEMENT",
    href: "#community-engagement",
  },
];

const CoCurricularNavigation = () => {
  return <SectionNavigation tabs={cocurricularTabs} />;
};

export default CoCurricularNavigation;