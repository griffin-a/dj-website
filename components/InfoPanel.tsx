import Image from "next/image";

export default function InfoPanel({ title, imageUri="/images/DJ_Profile.jpg", descriptions=[] }) {
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
              src={imageUri}
              alt="Profile picture of the DJ"
              layout="responsive"
              width="500" // required
              height="600"
              objectFit="cover" // change to suit your needs
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              {descriptions.map(desc => {
                return <p key={desc}>{desc}</p>
              })}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
