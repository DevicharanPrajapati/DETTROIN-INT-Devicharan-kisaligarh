import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6">
      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* 404 */}
        <h1 className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-8xl font-extrabold text-transparent md:text-[11rem]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          The page you're looking for doesn't exist, has been moved, or the URL
          may be incorrect. Let's get you back to Krishna International School.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3 font-semibold text-slate-900 transition duration-300 hover:scale-105 hover:bg-amber-400"
          >
            <FaHome />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-xl border border-slate-600 px-7 py-3 font-semibold text-white transition duration-300 hover:border-amber-400 hover:bg-white/10"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-sm tracking-wider text-slate-400 uppercase">
          Krishna International School • Dedicated to Excellence
        </p>
      </div>
    </section>
  );
};

export default NotFound;