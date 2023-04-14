import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";

function ClassicNav() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex items-center h-20 px-6 justify-between border-b border-gray-300 bg-gray-800 text-white relative z-50">
      <div className="h-8">
        <Link href="/">
          <button className="text-2xl">Yeah G</button>
        </Link>
      </div>
      <div className="flex-1 ml-10 items-center hidden lg:flex">
        <Link href="/">
          <a
            className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
              router.pathname == "/" ? "text-white" : "text-gray-200"
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
              router.pathname == "/about" ? "text-white" : "text-gray-200"
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/services">
          <a
            className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
              router.pathname == "/services" ? "text-white" : "text-gray-200"
            }`}
          >
            Services
          </a>
        </Link>
        <Link href="/testimonials">
          <a
            className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
              router.pathname == "/testimonials"
                ? "text-white"
                : "text-gray-200"
            }`}
          >
            Testimonials
          </a>
        </Link>
        <Link href="/mixes">
          <a
            className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
              router.pathname == "/mixes" ? "text-white" : "text-gray-200"
            }`}
          >
            Mixes
          </a>
        </Link>
        <Link href="/photos">
          <a
            className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
              router.pathname == "/photos" ? "text-white" : "text-gray-200"
            }`}
          >
            Photos
          </a>
        </Link>
      </div>
      <div className="items-center hidden lg:flex">
        <Link href="/events">
          <Button text="Events" size="sm" type="secondary" className="mr-5" />
        </Link>
        <Link href="/contact">
          <Button text="Contact" size="sm" type="primary" />
        </Link>
        {/* <FontAwesomeIcon
          icon={faQuestionCircle}
          className="ml-6 text-2xl cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="ml-6 text-2xl cursor-pointer"
        />
        <Avatar
          image="https://picsum.photos/id/237/200/200.jpg"
          status="online"
          className="ml-6 cursor-pointer"
        /> */}
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-white text-3xl cursor-pointer lg:hidden"
      />
      {mobileOpen && (
        <div className="bg-blue-800 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <Link href="/">
              <a
                className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
                  router.pathname == "/" ? "text-white" : "text-gray-200"
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
                  router.pathname == "/about" ? "text-white" : "text-gray-200"
                }`}
              >
                About
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
                  router.pathname == "/services"
                    ? "text-white"
                    : "text-gray-200"
                }`}
              >
                Services
              </a>
            </Link>
            <Link href="/testimonials">
              <a
                className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
                  router.pathname == "/testimonials"
                    ? "text-white"
                    : "text-gray-200"
                }`}
              >
                Testimonials
              </a>
            </Link>
            <Link href="/mixes">
              <a
                className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
                  router.pathname == "/mixes" ? "text-white" : "text-gray-200"
                }`}
              >
                Mixes
              </a>
            </Link>
            <Link href="/photos">
              <a
                className={`no-underline px-2 mr-3 font-medium hover:text-blue-400 ${
                  router.pathname == "/photos" ? "text-white" : "text-gray-200"
                }`}
              >
                Photos
              </a>
            </Link>

            <div className="my-2 flex justify-center">
              <Link href="/events">
                <Button text="Events" size="sm" type="secondary" />
              </Link>
              <Link href="/contact">
                <Button text="Contact" size="sm" type="primary" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClassicNav;
