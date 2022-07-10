import Image from "next/image";
import Link from "next/link";

export default function EventCardCTA({
  eventUri = "#",
  title = "Default",
  description = "Default description goes here",
  imageUri = "/images/party-1.jpg",
  backgroundColor = "bg-red-700",
}) {
  return (
    <Link href={eventUri}>
      <a className="relative flex items-end w-full bg-black h-96 group">
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
