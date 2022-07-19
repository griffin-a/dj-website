import PaginationBoxes from "../../components/PaginationBoxes";
import EventCardCTA from "../../components/EventCardCTA";
import { eventsFetcher } from "../../utils/api";

export default function Photos({ events = [], paginationData = {} }) {
  // const { events } = useSelector((state) => state.events);

  const getEvents = () => {
    const output = [];

    for (const [key, value] of Object.entries(events)) {
      output.push(<EventCardCTA
        key={key}
        eventType="party"
        title={value.title}
        description={value.description}
        eventId={key}
      />)
    }

    return output;
  }

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
              {events && (
                <>
                  {getEvents()}
                </>
              )}
            </div>

            <PaginationBoxes paginationData={paginationData}/>
          </div>
        </section>
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const [events, paginationData] = await eventsFetcher();

  return {
    props: { events, paginationData }
  };
}

