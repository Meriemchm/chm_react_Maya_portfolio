import React, { useState, useRef } from "react";
import Masonry from "react-masonry-css";
import { TitleSections } from "../Utilities/TitleSections";
import { media } from "../Data/Data";

export const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const galleryRef = useRef(null); // 👈 référence du composant

  const showMore = () => setVisibleCount((prev) => prev + 6);

  const showLess = () => {
    setVisibleCount(6);
    galleryRef.current?.scrollIntoView({ behavior: "smooth" }); // 👈 scroll vers le haut
  };

  const visibleMedia = media.slice(0, visibleCount);

  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    500: 1,
  };

  return (
    <div ref={galleryRef} name="gallery" className="bg-third w-full h-full">
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col w-full h-full text-white">
        {/* Titre */}
        <div data-aos="fade-up" className="pt-10 px-5 md:px-0">
          <TitleSections title="Gallery" />
        </div>

        {/* Texte d’intro */}
        <div data-aos="fade-up" className="py-10">
          <p className="text-black max-w-xl text-sm md:text-base">
            One day, I hope to compete at{" "}
            <span className="text-secondPink">the Olympics</span> and represent
            Sudan, and maybe even the United States. I want to become the best
            gymnast I can be and inspire other girls to follow their dreams,
            too.
          </p>
        </div>

        {/* Galerie Masonry */}
        <Masonry
          data-aos="fade-up"
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {visibleMedia.map((item, index) =>
            item.type === "image" ? (
              <img
                key={index}
                src={item.src}
                alt={`media-${index}`}
                className="w-full h-60 md:h-96 object-cover rounded-lg hover:scale-105 duration-200"
              />
            ) : (
              <video
                key={index}
                src={item.src}
                controls
                className="w-full h-auto object-cover rounded-lg hover:scale-105 duration-200"
              />
            )
          )}
        </Masonry>

        {/* Bouton More / Less */}
        {visibleCount < media.length ? (
          <div className="mt-8 flex justify-center text-sm md:text-base">
            <button
              onClick={showMore}
              className="border border-black text-black px-6 py-2 rounded-lg hover:border-secondPink hover:text-secondPink transition"
            >
              More
            </button>
          </div>
        ) : (
          <div className="mt-8 flex justify-center text-sm md:text-base">
            <button
              onClick={showLess} // 👈 appel à showLess
              className="border border-black text-black px-6 py-2 rounded-lg  hover:border-secondPink hover:text-secondPink transition"
            >
              Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
