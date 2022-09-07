type CTAProps = {
  title?: string;
  description?: string;
};

export default function CTASideImages({
  title = "Lorem ipsum dolor sit, amet consectetur adipisicing.",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio\
unde maiores natus placeat earum, atque necessitatibus sunt.\
Ducimus inventore qui unde, corporis itaque rerum illum\
tempore quod? Quae, quam quaerat.",
}: CTAProps) {
  return (
    <div>
      <aside>
        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 text-center text-white bg-indigo-600 sm:col-span-2 sm:p-16 lg:py-24">
              <div className="max-w-lg mx-auto space-y-8">
                <p className="text-3xl font-bold sm:text-4xl">
                  {title}
                </p>

                <p className="text-sm">
                  {description}
                </p>

                <a
                  href=""
                  className="inline-flex items-center px-5 py-3 mt-8 font-medium text-indigo-600 bg-white rounded-lg hover:opacity-75"
                >
                  Come and see
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-4 h-4 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative h-64 lg:order-first lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1625239185060-88135bd3519b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                alt="Sunset with palm trees"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>

            <div className="relative h-64 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1625175619292-ff5e5b2dfaf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                alt="Man in a hat and yellow jumper"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
