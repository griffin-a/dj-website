import EventCard from "../../components/EventCard";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useSWRConfig } from "swr";
import PaginationBoxes from "../../components/PaginationBoxes";
import { eventsFetcher } from "../../utils/api";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type PaginationVals = {
  totalPages: number,
  currentPage: number
}

type EventsProps = {
  events: [],
  paginationData: PaginationVals
}

export default function Events({ events = [], paginationData }: EventsProps) {
  const { totalPages, currentPage } = paginationData;
  const [page, setPage] = useState(currentPage);
  const { cache } = useSWRConfig();

  // const { data, error } = useSWR(`/api/events?page=${page}`, fetcher, {
  //   initialData:  page === 1 ? { events } : undefined,
  // });
  const { data, error } = useSWR(`/api/events?page=${page}`, fetcher);

  useEffect(() => {
    console.log("Current page", page);
  }, [page]);

  // useEffect(() => {
  //   cache.set("data", data);
  // }, [data]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-7 mx-auto">
          <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Events page
          </h1>
        </div>
        <section className="bg-gray-100">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            {/* {events && <>{getEventsJSX()}</>} */}
            {data && data.events.map((event) => {
              return (
                <EventCard
                  key={event.id}
                  eventType="party"
                  title={event.title}
                  description={event.description}
                  eventId={event.id}
                />
              );
            })}
          </div>

          <PaginationBoxes
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
        </section>
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const [events, paginationData] = await eventsFetcher();

  return {
    props: { events, paginationData },
  };
};
