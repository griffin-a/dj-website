export default function EventCard({ eventType, title, description, imageUri }) {
  return (
    <div className="pb-5">
      <a className="relative block bg-black group" href="">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
          // src={`/../public/images/${imageUri}`}
          src={imageUri}
          alt=""
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            {eventType}
          </p>

          <p className="text-2xl font-bold text-white">{title}</p>

          <div className="mt-64">
            <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-sm text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
