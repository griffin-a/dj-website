import EventCard from "../../components/EventCard";

export default function Events({ data }) {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="max-w-5xl pt-7 mx-auto">
          <h1 class="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Events page
          </h1>
        </div>
        <section class="bg-gray-100">
          <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            {/* <EventCard
              eventType="party"
              title="First party"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta 
              minus veniam tempora deserunt? Molestiae eius quidem quam repellat."
              imageUri="/images/party-1.jpg"
              eventUri="/events/1"
            />
            <EventCard
              eventType="party"
              title="Second party"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta 
              minus veniam tempora deserunt? Molestiae eius quidem quam repellat."
              imageUri="/images/party-2.jpg"
              eventUri="/events/2"
  /> */}
            {data.events && (
              <div>
                {data.events.map((event) => {
                  return (
                    <EventCard
                      eventType="party"
                      title={event.title}
                      description={event.description}
                      eventUri={`/events/${event._id}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/events");
  const data = await res.json();

  return { props: { data } };
}
