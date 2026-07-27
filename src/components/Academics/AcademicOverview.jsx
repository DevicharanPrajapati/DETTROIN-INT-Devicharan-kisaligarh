import OverviewSection from "../common/OverviewSection";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaFlask,
  FaLaptopCode,
} from "react-icons/fa";

const tabs = [
  { title: "Pre-Primary", id: "pre-primary" },
  { title: "Primary", id: "primary" },
  { title: "Middle School", id: "middle-school" },
  { title: "Secondary", id: "secondary" },
  { title: "Senior Secondary", id: "senior-secondary" },
];

const highlights = [
  {
    icon: <FaBookOpen />,
    title: "Strong Curriculum",
    description:
      "A well-structured curriculum designed to build conceptual understanding, critical thinking, and academic excellence.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Experienced Faculty",
    description:
      "Dedicated educators provide personalized guidance and innovative teaching methods to inspire every learner.",
  },
  {
    icon: <FaFlask />,
    title: "Practical Learning",
    description:
      "Modern science laboratories and activity-based learning encourage curiosity, experimentation, and problem-solving skills.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technology Integration",
    description:
      "Smart classrooms and digital learning resources prepare students with the technological skills needed for the future.",
  },
];

const AcademicOverview = () => {
  return (
    <OverviewSection
      tabs={tabs}
      badge="Academics"
      title="Academic Excellence for the 21st Century"
      description="At Krishna International School, we believe education is more than acquiring knowledge. Our future-ready curriculum blends conceptual learning, experiential activities, practical projects, and interactive teaching methodologies to develop confident, creative, and responsible learners equipped with the skills needed to succeed in a rapidly changing world."
      highlights={highlights}
    />
  );
};

export default AcademicOverview;