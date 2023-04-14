import GalleryCarouel from "../../../../components/GalleryCarousel";
import PhotoPage from "../../../../components/PhotoPage";
import Gallery from "../../../../components/Gallery";

export default function Videos() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-7 mx-auto">
          <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Video Page
          </h1>
        </div>
        <section className="bg-gray-100">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            {/* <PhotoPage photoData={photos}/> */}
            <Gallery />
          </div>
        </section>
      </section>
    </div>
  );
}