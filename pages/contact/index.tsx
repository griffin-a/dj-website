import ContactForm from "../../components/ContactForm";

export default function Contact() {
    return (
      <div>
        <section className="text-gray-600 body-font">
          <div className="max-w-5xl pt-7 mx-auto">
            <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
              Contact Me
            </h1>
          </div>
          <ContactForm />
        </section>
      </div>
    );
  }
  