import React, { useState, useEffect, useRef } from "react";
import {
  loadImageByIndex,
  totalImages,
  loadVideoByIndex,
  totalVideos,
} from "../Data/Data";
import Masonry from "react-masonry-css";
import SmartVideo from "./SmartVideo";

const GalleryContainer = ({ type }) => {
  const [mediaItems, setMediaItems] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const galleryRef = useRef(null);
  const batchSize = 6;

  const isImage = type === "image";
  const total = isImage ? totalImages : totalVideos;

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    const newItems = [];

    for (let i = nextIndex; i < Math.min(nextIndex + batchSize, total); i++) {
      const item = isImage
        ? await loadImageByIndex(i)
        : await loadVideoByIndex(i);

      if (item) newItems.push(item);
    }

    setMediaItems((prev) => {
      const existingSrcs = new Set(prev.map((item) => item.src));
      const uniqueNew = newItems.filter((item) => !existingSrcs.has(item.src));
      return [...prev, ...uniqueNew];
    });

    setNextIndex((prev) => prev + newItems.length);
    setLoading(false);
  };

  const showLess = () => {
    const newItems = mediaItems.slice(0, batchSize);
    setMediaItems(newItems);
    setNextIndex(batchSize);
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    500: 1,
  };

  return (
    <div ref={galleryRef}>
      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {mediaItems.map((item, index) =>
          isImage ? (
            <div data-aos="fade-up" key={item.src}>
              <img
                src={item.src}
                alt={`media-${index}`}
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg hover:scale-105 duration-200"
              />
            </div>
          ) : (
            <SmartVideo key={item.src} src={item.src} poster={item.poster} />
          )
        )}
      </Masonry>

      {/* Buttons */}
      {total > batchSize && (
        <div className="mt-8 flex justify-center text-sm md:text-base">
          {loading ? (
            <p className="text-center text-black">Loading...</p>
          ) : nextIndex < total ? (
            <button
              onClick={loadMore}
              className="border border-black text-black px-6 py-2 rounded-lg hover:border-secondPink hover:text-secondPink transition"
            >
              More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="border border-black text-black px-6 py-2 rounded-lg hover:border-secondPink hover:text-secondPink transition"
            >
              Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryContainer;
