import PaginationBoxes from "./PaginationBoxes";
import SideFilters from "./SideFilters";
import TopFilters from "./TopFilters";
import Image from "next/image";
import PhotoDto from "../dtos/PhotoDto";
import { useEffect } from "react";

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
                    <Image
                      key={photo.id}
                      width={400}
                      height={400}
                      src={photo.url}
                      className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
                    />
                  </div>
                );
              })}
            </>
          )}
          {/* <div className="w-full row-span-2">
            <Image
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
            />
          </div>
          <div className="w-full row-span-2">
            <Image
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full row-span-2">
            <Image
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full row-span-2">
            <Image 
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full row-span-2">
            <Image
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>

          <div className="w-full row-span-2">
            <Image
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full row-span-2">
            <Image
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full row-span-2">
            <Image
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div> */}
        </div>
      </div>

      <PaginationBoxes />
    </div>
  );
}
