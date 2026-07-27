import SectionNavigation from "../common/SectionNavigation";

const AcademicNavigation = () => {
  const academicTabs = [
    {
      title: "OVERVIEW",
      href: "#overview",
    },
    {
      title: "ACADEMIC STRUCTURE",
      href: "#academic-structure",
    },
    {
      title: "SUBJECTS",
      href: "#subjects",
    },
    {
      title: "TEACHING METHODOLOGY",
      href: "#teaching-methodology",
    },
    {
      title: "CAREER GUIDANCE",
      href: "#career-guidance",
    },
  ];

  return <SectionNavigation tabs={academicTabs} />;
};

export default AcademicNavigation;