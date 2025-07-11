import { TitleSections } from "../Utilities/TitleSections";
import GalleryContainer from "./GalleryContainer";

export const Gallery = () => {
  return (
    <div name="gallery" className="bg-third w-full h-full py-12">
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col w-full h-full text-white">
        {/* Titre */}
          <TitleSections title="Gallery" />

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

        <div className="flex flex-col gap-12">
          <GalleryContainer type="image" />
          <GalleryContainer type="video" />
        </div>
      </div>
    </div>
  );
};
