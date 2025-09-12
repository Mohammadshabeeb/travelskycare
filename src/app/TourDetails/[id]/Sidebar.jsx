"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faClose,
  faLocationCrosshairs,
  faUser,
  faUsers,
  faLocationDot,
  faEnvelope,faPhone
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import toursData from "../../TourData.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";

export default function sidebar() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="xl:w-[30%] lg:w-[40%] w-full h-full sticky top-0 right-0 border-2 border-gray-100 rounded-md py-5 px-3 m-0 lg:m-2">
        <form method="post">
          <div className="flex items-center gap-2 mt-5">
            <label className="text-md font-[500]">Date:</label>
            <div className="relative w-full">
              <input
                type="date"
                className="border-2 border-gray-100 outline-0 rounded-md p-2  w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <label className="text-md font-[500]">Adult:</label>
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute top-3.5 left-2"
              />

              <input
                type="number"
                placeholder="5"
                className="border-2 border-gray-100 outline-0 rounded-md p-2 pl-6 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <label className="text-md font-[500]">Child:</label>
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute top-3.5 left-2"
              />

              <input
                type="number"
                placeholder="1"
                className="border-2 border-gray-100 outline-0 rounded-md p-2 pl-6 w-full"
              />
            </div>
          </div>
        </form>

        <button
          type="button"
          className="btn text-white bg-[#193555] font-bold py-4 rounded-md cursor-pointer w-full transition-colors duration-300 mt-5"
          onClick={() => setShowForm(true)}
        >
          <a
            href="#"
            className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider"
          >
            Book Now
          </a>
        </button>
        <div className="text-lg font-semibold mt-5 pb-2">
          Recommendation Tours
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
           autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
       pagination={{ clickable: true }}
     
      modules={[Autoplay, Pagination, Navigation]} 
          
          className="travel-wrapper"
        >
          {toursData.map((tour) => (
            <SwiperSlide key={tour.id}>
              <Link href={`/TourDetails/${tour.id}`} key={tour.id}>
                <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300">
                  <Image
                    src={tour.Images}
                    width={400}
                    height={300}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 text-white bg-gradient-to-t from-black/70 to-transparent">
                    <div>
                      <h2 className="text-xl font-semibold unbounded-font pb-1">
                        {tour.title}
                      </h2>
                      <p className="text-[#ffffff91] text-xs flex item-center gap-1">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {tour.location}
                      </p>
                    </div>

                    <h4 className="text-xl font-semibold unbounded-font text-right">
                      <span className="text-[#ffffff91] text-xs font-normal">
                        Start From
                      </span>

                      {""}
                      <br />
                      {tour.price}
                    </h4>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

       {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.75)] z-50 transition-opacity duration-300 ease-out animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative transform transition-all duration-300 ease-out animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <FontAwesomeIcon icon={faClose} size="lg" />
            </button>

            <h2 className="text-xl font-bold mb-4">Complete Your Booking</h2>

            <form className="space-y-4">
              {/* First Name */}
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute top-3 left-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-2 border-gray-200 rounded-md pl-8 py-2 outline-none"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute top-3 left-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-2 border-gray-200 rounded-md pl-8 py-2 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-2 border-gray-200 rounded-md pl-8 py-2 outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FontAwesomeIcon icon={faPhone} className="absolute top-3 left-2 text-gray-500" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-2 border-gray-200 rounded-md pl-8 py-2 outline-none"
                  required
                />
              </div>

              {/* Group Size */}
              <div>
                <label className="block mb-1 font-medium text-gray-600">How many people are in your group?</label>
                <input
                  type="number"
                  placeholder="e.g. 5"
                  className="w-full border-2 border-gray-200 rounded-md px-3 py-2 outline-none"
                  required
                />
              </div>

              {/* Best Way to Connect */}
              <div>
                <label className="block mb-1 font-medium text-gray-600">Best way to connect with you:</label>
                <select className="w-full border-2 border-gray-200 rounded-md px-3 py-2 outline-none" required>
                  <option value="">Select an option</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              {/* Anything Else */}
              <div>
                <label className="block mb-1 font-medium text-gray-600">Anything else we should know?</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about special requests, travel dates, or anything important"
                  className="w-full border-2 border-gray-200 rounded-md px-3 py-2 outline-none"
                ></textarea>
              </div>

              {/* How Did You Hear About Us */}
              <div>
                <label className="block mb-1 font-medium text-gray-600">How did you hear about us?</label>
                <textarea
                  rows="2"
                  placeholder="Google, Friend, Social Media, etc."
                  className="w-full border-2 border-gray-200 rounded-md px-3 py-2 outline-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#193555] text-white font-semibold py-3 rounded-md hover:bg-[#152a44] transition-colors"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
