import CTASideImages from "../../../components/CTASideImages";
import ReviewsGrid from "../../../components/ReviewsGrid";

export default function EventId() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-7 mx-auto">
          <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Event id page
          </h1>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="pb-10">
          <CTASideImages />
          <ReviewsGrid />
        </div>
      </section>
    </div>
  );
}
