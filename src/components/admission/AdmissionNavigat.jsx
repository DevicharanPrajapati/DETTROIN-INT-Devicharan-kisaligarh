import SectionNavigation from "../common/SectionNavigation";

const admissionTabs = [
  {
    title: "ADMISSION PROCESS",
    href: "#admission-process",
  },
  {
    title: "Registration",
    href: "#registration",
  },
  {
    title: "Fee Structure",
    href: "#fee structure",
  },
 
  {
    title: "Fee Payment",
    href: "#fee-payment",
  },
];

const AdmissionNavigation = () => {
  return <SectionNavigation tabs={admissionTabs} />;
};

export default AdmissionNavigation;