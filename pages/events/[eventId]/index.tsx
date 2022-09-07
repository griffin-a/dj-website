import { useState, useEffect } from "react";
import useSWR from "swr";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";

import CTASideImages from "../../../components/CTASideImages";
import ReviewsGrid from "../../../components/ReviewsGrid";
import { Event } from "@prisma/client";
import { eventFetcher } from "../../../utils/api";

type EventsData = {
  events: Event[];
  pagnation: number[];
};

// const filterData = (data: EventsData, eventId): Event => data.events.filter(event => event.id === eventId)[0];

export default function EventId() {
  // TODO: handle case where the events data isn't cached yet; SWR call needs to be made
  // const { cache } = useSWRConfig();
  const router = useRouter();

  const [eventData, setEventData] = useState<Event>(null);
  const { data, error } = useSWR(`/${router.query.eventId}`, eventFetcher);

  // useEffect(() => {
  //   const eventId = router.query.eventId;
  //   const eventsData = cache.get("data");

  //   const event = filterData(eventsData, eventId);
  //   console.log(event);
  //   setEventData(event);
  // }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-7 mx-auto">
          <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            {data && <>{data.title}</>}
          </h1>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="pb-10">
          {data && (
            <>
              <CTASideImages title={data.title} description={data.description} eventId={data.id}/>
              <ReviewsGrid />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
