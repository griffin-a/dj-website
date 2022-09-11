import PaginationBoxes from "./PaginationBoxes";
import SideFilters from "./SideFilters";
import TopFilters from "./TopFilters";
import Image from "next/image";
import PhotoDto from "../dtos/PhotoDto";
import { useEffect } from "react";
import Link from "next/link";

type PhotoPageProps = {
  photoData: PhotoDto[];
};

export default function PhotoPage({ photoData = null }) {
  // useEffect(() => {
  //   console.log(photoData.data);
  // }, []);

  return (
    <div>
      {/* <h1 className="text-black text-center font-bold text-3xl">
        Image Gallery With Grid
      </h1> */}
      {/* <SideFilters /> */}
      <TopFilters />

      <div className="container lg:px-32 px-4 py-16 mx-auto items-center">
        <div className="grid sm:grid-cols-1 sm:grid-rows-12 md:grid-cols-2 md:grid-rows-6 lg:grid-cols-6 lg:grid-rows-4 md:lg:grid-flow-col gap-2 relative">
          {photoData && (
            <>
              {photoData.data.map((photo) => {
                return (
                  <div className="w-full sm:col-span-1 md:col-span-1 lg:col-span-2">
                    <Link href={photo.url}>
                      <Image
                        key={photo.id}
                        width={400}
                        height={400}
                        src={photo.url}
                        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
                      />
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>

      <PaginationBoxes />
    </div>
  );
}
