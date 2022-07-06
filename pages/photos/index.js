import PaginationBoxes from "../../components/PaginationBoxes";
import PaginationTab from "../../components/PaginationTab";
import PhotoPage from "../../components/PhotoPage";
import PhotoTopNav from "../../components/PhotoTopNav";

export default function Photos() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="max-w-5xl pt-7 mx-auto">
          <h1 class="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Photos page
          </h1>
        </div>
        <section class="bg-gray-100">
          <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="display: inline-block">
              {/* <PhotoTopNav /> */}
              <PhotoPage />
            </div>
            {/* <footer class="text-right">
              <PaginationBoxes />
            </footer> */}
          </div>
        </section>
      </section>
    </div>
  );
}
