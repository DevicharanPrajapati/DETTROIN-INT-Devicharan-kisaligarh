import GalleryCard from "../../components/gallery/GalleryCard";
import { motion } from "framer-motion";

import gallery1 from "../../assets/images/gallery/g1.webp";
import gallery2 from "../../assets/images/gallery/g2.webp";
import gallery3 from "../../assets/images/gallery/g3.webp";
import gallery4 from "../../assets/images/gallery/g4.webp";
import gallery5 from "../../assets/images/gallery/g5.webp";
import gallery6 from "../../assets/images/gallery/g6.webp";
import gallery7 from "../../assets/images/gallery/g7.webp";
import gallery8 from "../../assets/images/gallery/g8.webp";
import gallery9 from "../../assets/images/gallery/g9.webp";
import gallery10 from "../../assets/images/gallery/g10.webp";
// import gallery11 from "../../assets/images/gallery/g11.png";
// import gallery12 from "../../assets/images/gallery/g12.png";

const images = [
  { image: gallery1, title: "Academics" },
  { image: gallery2, title: "Sports" },
  { image: gallery3, title: "Laboratory" },
  { image: gallery4, title: "Campus" },
  { image: gallery5, title: "Events" },
  { image: gallery6, title: "Celebrations" },
  { image: gallery7, title: "Activities" },
  { image: gallery8, title: "Art & Culture" },
  { image: gallery9, title: "Trips" },
  { image: gallery10, title: "Competitions" },
  //   { image: gallery11, title: "Achievements" },
  //   { image: gallery12, title: "School Life" },
];

const GalleryPage = () => {
  return (
    <section className="bg-white pt-30 pb-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Gallery
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            A Glimpse of Campus Life
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Explore memorable moments from academics, sports, cultural events,
            celebrations, educational trips, and everyday life at Krishna
            International School.
          </p>
        </motion.div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <GalleryCard
              key={index}
              image={item.image}
              title={item.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
