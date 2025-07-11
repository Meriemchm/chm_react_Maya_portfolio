import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { TitleSections } from "../Utilities/TitleSections";
import { loadImageByIndex, totalImages } from "../Data/Data";

export const Gallery = () => {
  const [mediaImages, setMediaImages] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);
  const galleryRef = useRef(null);
  const batchSize = 6;

  useEffect(() => {
    loadMoreImages();
  }, []);

  const loadMoreImages = async () => {
    const newImages = [];

    for (
      let i = nextIndex;
      i < Math.min(nextIndex + batchSize, totalImages);
      i++
    ) {
      const img = await loadImageByIndex(i);
      if (img) newImages.push(img);
    }

    // 🔐 Vérifie que chaque src est unique avant d'ajouter
    setMediaImages((prev) => {
      const existingSrcs = new Set(prev.map((item) => item.src));
      const uniqueNewImages = newImages.filter((img) => !existingSrcs.has(img.src));
      return [...prev, ...uniqueNewImages];
    });

    setNextIndex((prev) => prev + newImages.length);
  };

  const showLess = () => {
    const newImages = mediaImages.slice(0, batchSize);
    setMediaImages(newImages);
    setNextIndex(batchSize);
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

        {/* Texte */}
        <div data-aos="fade-up" className="py-10">
          <p className="text-black max-w-xl text-sm md:text-base">
            One day, I hope to compete at{" "}
            <span className="text-secondPink">the Olympics</span> and represent
            Sudan, and maybe even the United States. I want to become the best
            gymnast I can be and inspire other girls to follow their dreams,
            too.
          </p>
        </div>

        {/* Galerie */}
        <Masonry
          data-aos="fade-up"
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {mediaImages.map((item, index) => (
            <img
              key={item.src} // Utiliser src comme clé pour éviter duplication
              src={item.src}
              alt={`media-${index}`}
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg hover:scale-105 duration-200"
            />
          ))}
        </Masonry>

        {/* Boutons */}
        {nextIndex < totalImages ? (
          <div className="mt-8 flex justify-center text-sm md:text-base">
            <button
              onClick={loadMoreImages}
              className="border border-black text-black px-6 py-2 rounded-lg hover:border-secondPink hover:text-secondPink transition"
            >
              More
            </button>
          </div>
        ) : (
          <div className="mt-8 flex justify-center text-sm md:text-base">
            <button
              onClick={showLess}
              className="border border-black text-black px-6 py-2 rounded-lg hover:border-secondPink hover:text-secondPink transition"
            >
              Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
