import EventCard from "../../components/EventCard";
import { wrapper } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { retrieve, setPagination } from "../../store/eventsSlice";
import PaginationBoxes from "../../components/PaginationBoxes";
import { eventsFetcher } from "../../utils/api";

export default function Events() {
  const { events } = useSelector((state) => state.events);
  const { pagination } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    const getNextPage = async () => {
      const [container, paginationData] = await eventsFetcher(pagination.currentPage);
      dispatch(retrieve(container));
      dispatch(setPagination(paginationData));
    }

    getNextPage();

  }, [pagination.currentPage])

  const getEventsJSX = () => {
    const output = [];

    for (const [key, value] of Object.entries(events)) {
      output.push(
        <EventCard
          key={key}
          eventType="party"
          title={value.title}
          description={value.description}
          eventId={key}
        />
      );
    }

    return output;
  };

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
            {events && <>{getEventsJSX()}</>}
          </div>

          <PaginationBoxes />
        </section>
      </section>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const [container, paginationData] = await eventsFetcher();
    

    store.dispatch(retrieve(container));
    store.dispatch(setPagination(paginationData));
  }
);
