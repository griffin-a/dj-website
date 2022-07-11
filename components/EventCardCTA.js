import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentEvent } from "../store/eventsSlice";

export default function EventCardCTA({
  eventId = undefined,
  title = "Default",
  description = "Default description goes here",
  imageUri = "/images/party-1.jpg",
  backgroundColor = "bg-red-700",
}) {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);

  return (
    <Link href={`/events/${eventId}/photos`}>
      <a onClick={() => dispatch(setCurrentEvent(events[eventId]))} className="relative flex items-end w-full bg-black h-96 group">
        <Image
          alt={title}
          src={imageUri}
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-90"
        />

        <div
          className={`relative w-full p-6 tracking-widest text-center text-white transition-colors ${backgroundColor} sm:w-2/3 group-hover:bg-black`}
        >
          <strong className="text-lg uppercase">{title}</strong>

          <p className="mt-1 text-xs font-medium uppercase">{description}</p>
        </div>
      </a>
    </Link>
  );
}
