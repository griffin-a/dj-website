import TestimonialsStacked from "../../components/TestimonialsStacked";

export default function Testimonials() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="max-w-5xl pt-7 mx-auto">
          <h1 class="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Testimonials page
          </h1>
        </div>
        <section class="bg-gray-100">
          <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <TestimonialsStacked />
          </div>
        </section>
      </section>
    </div>
  );
  }
  