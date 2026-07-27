import OverviewSection from "../common/OverviewSection";
import {
  FaUserGraduate,
  FaClipboardList,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";


const highlights = [
  {
    icon: <FaUserGraduate />,
    title: "Holistic Admissions",
    description:
      "Our admission process evaluates each child's aptitude, attitude, and readiness to ensure the best learning experience.",
  },
  {
    icon: <FaUsers />,
    title: "Personalized Guidance",
    description:
      "Parents receive complete guidance from our admission counselors regarding curriculum, facilities, fee structure, and school life.",
  },
  {
    icon: <FaClipboardList />,
    title: "Simple Registration",
    description:
      "A smooth and transparent registration process with easy submission of forms and required documents.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Future-Ready Learning",
    description:
      "From Playgroup to Senior Secondary, we nurture every student through quality education, values, and holistic development.",
  },
];

const AdmissionOverview = () => {
  return (
    <OverviewSection
      badge="Admissions"
      title="Begin Your Child's Journey with Us"
      description="Krishna International School welcomes students from Playgroup to Senior Secondary into a vibrant learning community focused on academic excellence and holistic development. Our admission process is designed to be simple, transparent, and student-centric, ensuring every child receives the right foundation for lifelong success. The academic session begins in April, with admissions offered for eligible classes based on the school's admission guidelines."
      highlights={highlights}
    />
  );
};

export default AdmissionOverview;