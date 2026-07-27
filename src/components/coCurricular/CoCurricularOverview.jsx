import OverviewSection from "../common/OverviewSection";
import {
  FaUsers,
  FaLightbulb,
  FaTrophy,
  FaHeart,
} from "react-icons/fa";


const highlights = [
  {
    icon: <FaUsers />,
    title: "Teamwork",
    description:
      "Students learn collaboration, communication, and leadership through group activities.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creativity",
    description:
      "Art, music, dance, and cultural events encourage imagination and creative expression.",
  },
  {
    icon: <FaTrophy />,
    title: "Confidence",
    description:
      "Competitions and performances help students build confidence and resilience.",
  },
  {
    icon: <FaHeart />,
    title: "Social Responsibility",
    description:
      "Community service activities nurture empathy, discipline, and responsible citizenship.",
  },
];

const CoCurricularOverview = () => {
  return (
    <OverviewSection
      // tabs={tabs}
      badge="Overview"
      title="Learning Beyond the Classroom"
      description="At Krishna International School, co-curricular activities are an essential part of education. They help students discover their talents, build self-confidence, develop leadership qualities, and foster teamwork while maintaining a healthy balance between academics and personal growth."
      highlights={highlights}
    />
  );
};

export default CoCurricularOverview;