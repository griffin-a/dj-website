export default function EventCardCTA() {
  return (
    <a href="" class="relative flex items-end w-full bg-black h-96 group">
      <img
        alt="Modded Bike"
        src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af"
        class="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-90"
      />

      <div class="relative w-full p-6 tracking-widest text-center text-white transition-colors bg-red-700 sm:w-2/3 group-hover:bg-black">
        <strong class="text-lg uppercase">Custom Shop</strong>

        <p class="mt-1 text-xs font-medium uppercase">Design your own</p>
      </div>
    </a>
  );
}
