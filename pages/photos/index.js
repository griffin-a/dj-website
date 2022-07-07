import PaginationBoxes from "../../components/PaginationBoxes";
import PaginationTab from "../../components/PaginationTab";
import PhotoPage from "../../components/PhotoPage";
import PhotoTopNav from "../../components/PhotoTopNav";
import EventCardCTA from "../../components/EventCardCTA";

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
          <div className="max-w-xl pt-7 mx-auto text-center">
            <h2 className="text-black text-4xl font-bold tracking-tight sm:text-5xl">
              Select an event
            </h2>

            <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
              Please select an event from the list of events to view photos.
            </p>
          </div>
          <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="display: grid lg:grid-cols-2 py-10 px-4 gap-x-8 sm:grid-cols-1 sm:gap-y-8">
              {/* <PhotoPage /> */}
              <EventCardCTA
                title="Party 1"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta 
              minus veniam tempora deserunt? Molestiae eius quidem quam repellat."
                imageUri="/images/party-1.jpg"
                eventLink="/events/1/photos"
              />
              <EventCardCTA
                title="Party 2"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta 
              minus veniam tempora deserunt? Molestiae eius quidem quam repellat."
                imageUri="/images/party-2.jpg"
                eventLink="/events/2/photos"
              />

              
            </div>

            <PaginationBoxes />
          </div>
        </section>
      </section>
    </div>
  );
}
