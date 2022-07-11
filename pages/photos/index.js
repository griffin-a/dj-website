import PaginationBoxes from "../../components/PaginationBoxes";
import EventCardCTA from "../../components/EventCardCTA";
import { wrapper } from "../../store/store";
import { useSelector } from "react-redux";
import { retrieve } from "../../store/eventsSlice";

export default function Photos() {
  const { events } = useSelector((state) => state.events);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-7 mx-auto">
          <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Photos page
          </h1>
        </div>
        <section className="bg-gray-100">
          <div className="max-w-xl pt-7 mx-auto text-center">
            <h2 className="text-black text-4xl font-bold tracking-tight sm:text-5xl">
              Select an event
            </h2>

            <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
              Please select an event from the list of events to view photos.
            </p>
          </div>
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="display: grid lg:grid-cols-2 py-10 px-4 gap-x-8 sm:grid-cols-1 sm:gap-y-8">
              {/* <PhotoPage /> */}
              {/* <EventCardCTA
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
              /> */}

              {events && (
                <div>
                  {events.map((event) => {
                    return (
                      <EventCardCTA
                        key={event._id}
                        title={event.title}
                        description={event.description}
                        eventUri={`/events/${event._id}/photos`}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            <PaginationBoxes />
          </div>
        </section>
      </section>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await fetch("http://localhost:3000/api/events");
    const data = await res.json();
    console.log(data);

    store.dispatch(retrieve(data.events));
  }
);
