import Image from "next/image";
import Link from "next/link";

export default function EventCard({
  eventType="Party",
  title="Title",
  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
  Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta \
  minus veniam tempora deserunt? Molestiae eius quidem quam repellat.",
  imageUri="/images/party-1.jpg",
  eventUri = "/",
}) {
  return (
    <div className="pb-5">
      <Link href={eventUri}>
        <a className="relative block bg-black group">
          <Image
            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
            src={imageUri}
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            alt=""
          />
          <div className="relative p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              {eventType}
            </p>

            <p className="text-2xl font-bold text-white">{title}</p>

            <div className="mt-64">
              <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm text-white">{description}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
