import PhotoPage from "../../../../components/PhotoPage";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { Event } from "@prisma/client";
import { eventFetcher } from "../../../../utils/api";

export default function EventIdPhotos() {
  // const { currentEvent } = useSelector((state) => state.events);
  // const dispatch = useDispatch();
  const router = useRouter();
  // const { isReady } = router;
  // const { eventId } = router.query;
  const { data, error } = useSWR(`/${router.query.eventId}`, eventFetcher);

  // useEffect(() => {
  //   if (!currentEvent) {
  //     if (!eventId) {
  //       return;
  //     }

  //     const getEvent = async () => {
  //       const res = await fetch(`http://localhost:3000/api/events/${eventId}`);
  //       const event = await res.json();

  //       dispatch(setCurrentEvent(event));
  //     };

  //     getEvent();
  //   }
  // }, [eventId]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-7 mx-auto">
          <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            {data && (
              <>Media for {data.title}</>
            )}
            {/* {currentEvent && <>{`Photos for ${currentEvent.title}`}</> } */}
          </h1>
        </div>
        <section className="bg-gray-100">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <PhotoPage />
          </div>
        </section>
      </section>
    </div>
  );
}
