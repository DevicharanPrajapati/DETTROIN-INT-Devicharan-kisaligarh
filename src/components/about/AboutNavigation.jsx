import SectionNavigation from "../common/SectionNavigation";

const aboutTabs = [
  { title: "CHAIRMAN'S MESSAGE", href: "#chairman" },
  { title: "PRINCIPAL'S MESSAGE", href: "#principal" },
  { title: "QUINTESSENTIAL CAMPUS", href: "#campus" },
  { title: "WHY KIS?", href: "#why-kis" },
  { title: "RECOGNITION & AWARDS", href: "#recognition" },
];

const AboutNavigation = () => {
  return <SectionNavigation tabs={aboutTabs} />;
};

export default AboutNavigation;