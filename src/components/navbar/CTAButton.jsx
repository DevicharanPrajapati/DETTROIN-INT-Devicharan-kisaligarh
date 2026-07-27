import { Link } from "react-router-dom";

const CTAButton = () => {
  return (
    <Link
    to={"/admission"}
    >
    <button
      className="
        hidden lg:inline-flex
        items-center
        rounded-lg
        bg-red-600
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-red-500
        hover:shadow-lg
        active:scale-95
      "
    >
      Apply Now
    </button>
    </Link>
  );
};

export default CTAButton;
