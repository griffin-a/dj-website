import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <section className="text-gray-600 body-font pt-20">
      <div className="max-w-5xl pt-7 mx-auto pb-40">
        <h1 className="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Yeah G. Your one-stop-shop for musical versatility.
        </h1>
        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-200 text-center">
          Griffin Almquist is Yeah G, a DJ who isn't afraid to work with any and
          every genre of music.
          <br />
          Open to DJing events of all kinds.
        </h2>
        <div className="ml-6 text-center">
          <Link href="/events">
            <a className="content-center justify-center mr-6 px-4 inline-block rounded-sm font-medium border border-solid cursor-pointer text-center transition-colors duration-200 inline-flex items-center py-3 font-semibold text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-white">
              <div className="flex text-lg">
                <span className="justify-center">View Events I am DJing</span>
              </div>
            </a>
          </Link>
          <Link href="/contact">
            <a className="content-center justify-center px-4 inline-flex items-center py-3 font-semibold inline-block rounded-sm font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-green-600 border-green-400 hover:bg-green-800 hover:border-green-800">
              <div className="flex text-lg">
                <span className="justify-center">Contact Me</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <Image
          className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          alt="DJ stock image"
          src="/images/dj-1.jpg"
          width="1000"
          height="500"
          // layout="fill"
          // objectFit="contain"
        />
      </div>
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Testimonials
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        See what our clients have had to say about Yeah G!
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div className="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>

        <div className="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div className="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div className="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>
      {/* <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div className="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
        <div className="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      </div> */}
      <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-20">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address to get notified about any upcoming events
              and updates!
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
