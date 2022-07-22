import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", phone: "", message: "" });

  const handleFormChange = event => {
    const eventTargetName = event.target.name;
    const eventValue = event.target.value;

    setFormData({ ...formData, [eventTargetName]: eventValue });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(formData)
      });

      if (response.status !== 200) {
        throw new Error(`Request failed: ${response.status}`); 
      }

      setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
    } catch (error) {
      alert("There was an error submitting your form!");
    }
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    onChange={e => handleFormChange(e)}
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      onChange={e => handleFormChange(e)}
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      onChange={e => handleFormChange(e)}
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    onChange={e => handleFormChange(e)}
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    onChange={e => handleFormChange(e)}
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    value={formData.message}
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    // onSubmit={e => handleFormSubmit(e)}
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
