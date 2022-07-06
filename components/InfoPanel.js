import Image from "next/image";

export default function InfoPanel({ title, imageUri, description }) {
  return (
    <section>
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-black font-bold sm:text-4xl">{title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="/images/profile.jpg"
              alt="Man using a computer"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>{description}</p>

              <p>{description}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
