import { useState, useEffect } from "react";

const BOOKING = 1;
const QUOTE = 2;
const OTHER = 3;

export default function ContactForm() {
  const [selectedSubject, setSelectedSubject] = useState(BOOKING);

  useEffect(() => {
    console.log(selectedSubject);
  }, [selectedSubject]);

  return (
    <div>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:py-12 lg:col-span-2">
              <p className="max-w-xl text-lg">
                Please don't hesitate to get in touch with us for any general
                inquiries or questions!
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  {" "}
                  +64-27-557-8760{" "}
                </a>

                <address className="mt-2 not-italic">
                  Auckland CBD, Auckland, New Zealand
                </address>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form method="POST" action="/api/form" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>
                </div>

                {/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3"> */}
                {/* <div>
                    <input
                      className="sr-only"
                      id="option1"
                      type="radio"
                      tabIndex="-1"
                    />
                    <button
                      htmlFor="option1"
                      className={`block w-full p-3 border rounded-lg ${
                        selectedSubject === BOOKING
                          ? "border-gray-800"
                          : "border-gray-200"
                      }`}
                      tabIndex="0"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedSubject(BOOKING);
                      }}
                    >
                      <span className="text-sm font-medium"> Booking </span>
                    </button>
                  </div> */}

                {/* <div>
                    <input
                      className="sr-only"
                      id="option2"
                      type="radio"
                      tabIndex="-1"
                    />
                    <button
                      htmlFor="option2"
                      className={`block w-full p-3 border rounded-lg ${
                        selectedSubject === QUOTE
                          ? "border-gray-800"
                          : "border-gray-200"
                      }`}
                      tabIndex="0"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedSubject(QUOTE);
                      }}
                    >
                      <span className="text-sm font-medium"> Quote </span>
                    </button>
                  </div> */}

                {/* <div>
                    <input
                      className="sr-only"
                      id="option3"
                      type="radio"
                      tabIndex="-1"
                    />
                    <button
                      htmlFor="option3"
                      className={`block w-full p-3 border rounded-lg ${
                        selectedSubject === OTHER
                          ? "border-gray-800"
                          : "border-gray-200"
                      }`}
                      tabIndex="0"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedSubject(OTHER);
                      }}
                    >
                      <span className="text-sm font-medium"> Other </span>
                    </button>
                  </div>
                </div> */}

                <div>
                  <label className="sr-only" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span className="font-medium"> Send Inquiry </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
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
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
