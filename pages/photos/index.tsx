import PaginationBoxes from "../../components/PaginationBoxes";
import EventCardCTA from "../../components/EventCardCTA";
import { eventsFetcher } from "../../utils/api";
import { useState, useEffect } from "react";
import useSWR from "swr";

type PaginationVals = {
  totalPages: number,
  currentPage: number
}

type EventsProps = {
  events: [],
  paginationData: PaginationVals
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Photos({ events = [], paginationData }: EventsProps) {
  const { totalPages, currentPage } = paginationData;
  const [page, setPage] = useState(currentPage);
  // const { data, error } = useSWR(`${page}`, eventsFetcher);
  const { data, error } = useSWR(`/api/events?page=${page}`, fetcher);

  useEffect(() => {
    console.log("Current page", page);
  }, [page])

  // const getEvents = () => {
  //   const output = [];

  //   for (const [key, value] of Object.entries(events)) {
  //     output.push(<EventCardCTA
  //       key={key}
  //       eventType="party"
  //       title={value.title}
  //       description={value.description}
  //       eventId={key}
  //     />)
  //   }

  //   return output;
  // }

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
            {data && data.events.map((event) => {
              return (
                <EventCardCTA
                  key={event.id}
                  // eventType="party"
                  title={event.title}
                  description={event.description}
                  eventId={event.id}
                />
              );
            })}
            </div>

            <PaginationBoxes totalPages={totalPages} page={page} setPage={setPage} />
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

