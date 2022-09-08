import PhotoPage from "../../../../components/PhotoPage";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Event } from "@prisma/client";
import { eventFetcher } from "../../../../utils/api";
import { storageClient, supabaseAdmin } from "../../../../utils/supabase";
import { useEffect, useState } from "react";

export default function EventIdPhotos() {
  const router = useRouter();
  const { data, error } = useSWR(`/${router.query.eventId}`, eventFetcher);

  useEffect(() => {
    // Fetch the list of media in the bucket querying by the event name
    // Only once the event data has been queried
    console.log(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
    async function getImages() {
      // const { data, error } = await storageClient.getBucket("sidedoor-bday");
      const { data, error } = await supabaseAdmin.storage.listBuckets()


      console.log(error);
      console.log("Image list", data);
    }

    getImages();

  }, [data]);

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
