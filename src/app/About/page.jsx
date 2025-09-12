"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPlay,
  faAngleRight,
  faShieldHalved,
  faMoneyBillWave,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";

import About01 from "../../../public/Images/about-01.webp";
import About02 from "../../../public/Images/about-02.webp";
import About03 from "../../../public/Images/about-03.webp";

import Author01 from "../../../public/Images/author-01.webp";
import Author02 from "../../../public/Images/author-02.webp";
import Author03 from "../../../public/Images/author-03.webp";
import Author04 from "../../../public/Images/author-04.webp";

import Image from "next/image";

import TourCompany1 from "../../../public/Images/Tour-Company-01.webp";
import TourCompany2 from "../../../public/Images/Tour-Company-02.webp";

import Adventure01 from "../../../public/Images/adventure-01.webp";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (Index) => {
    setOpenIndex(openIndex === Index ? null : Index);
  };

  const faqData = [
    {
      question: "1. What to prepare trip to Asia",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "2. What document you need before go to Asia",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "3. How to scheduling Asia trip itinerary",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "4. 8 Website must read before your trip",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "5. This is the best budget you need to prepare",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "6. This site give you the information about travel to Asia",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
  ];

  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          About Us
        </h2>

        <ul className="text-white z-10 flex items-center gap-8 section-list">
          <li className="text-sm relative">
            <Link href="#">Home</Link>
          </li>
          <li className="text-sm relative">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="absolute -left-4 top-0.5"
            />
            <Link href="#">About</Link>
          </li>
        </ul>
      </div>

      {/* About Page */}

      <div className="about py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
        <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0">
          <div className="lg:w-[50%]">
            <div className="about-section flex flex-col">
              <div className="about-heading lg:px-[12%]">
                <h1 className="text-2xl xl:text-4xl font-bold mb-4">
                  Begin Your New Life Experience with Exploring New Destination
                </h1>
                <p className="mb-3 w-[90%] text-[#7a7a7a] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis quis suscipit, delectus quo eaque soluta ab ut
                  provident repellendus nihil minus tempora nostrum sunt
                  corrupti aspernatur in modi reiciendis aperiam?
                </p>
                <p className="w-[90%] text-[#7a7a7a] text-sm">
                  ipsum Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Voluptatem minima expedita soluta ratione non
                  perferendis temporibus quas veniam, laudantium facilis
                  eligendi saepe labore! Suscipit iste inventore vel, rerum
                  architecto dicta.
                </p>
              </div>
              <div className="about-image mt-8 hidden lg:flex">
                <Image
                  src={About01}
                  alt="About01"
                  className="rounded-r-2xl w-[45%] h-[600px] object-cover absolute left-0"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <div className="bg-[#000] text-white p-6 rounded-2xl flex flex-col md:flex-row justify-between md:gap-20">
              <div className="author-sec">
                <div className="flex -space-x-3 ">
                  <Image
                    src={Author01}
                    alt="Author01"
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                  <Image
                    src={Author02}
                    alt="Author02"
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />

                  <Image
                    src={Author03}
                    alt="Author03"
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />

                  <Image
                    src={Author04}
                    alt="Author04"
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                </div>
                <h2 className="text-white mt-5 text-3xl">1234 &nbsp;+</h2>
              </div>

              <div className="customers">
                <h1 className="text-white text-2xl mt-2 mb-3">
                  Customer Love the Tour Experiennces
                </h1>
                <p className="text-[#7a7a7a]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  lorem
                </p>
              </div>
            </div>
            <div className="about-travel">
              <Image
                src={About02}
                alt="About02"
                className="rounded-2xl mt-10 object-cover"
              />
            </div>

            <div className="about-place flex sm:flex-row flex-col items-center gap-5 mt-10">
              <Image
                src={About03}
                alt="About03"
                className="rounded-2xl h-[350px] sm:w-[50%] w-full  object-cover"
              />

              <div className="bg-[#000] text-white p-6 rounded-2xl flex justify-between gap-20 sm:2-[300px] w-full">
                <div className="customers">
                  <h1 className="text-white text-2xl mt-2 mb-3">
                    Join Our Asian Travel Trip
                  </h1>
                  <p className="text-[#7a7a7a]">
                    Lorem ipsum dolor sit amet,consectetur adipisicing elit. ut
                    elir tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Company */}

      <div className="tour-company px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] flex flex-col items-center justify-center">
        <div className="tour-content">
          <h1 className="text-3xl lg:text-5xl text-center font-semibold mb-5">
            {" "}
            We Are The Most Popular <br /> Travel & Tour Company
          </h1>
          <p className="text-[#7a7a7a] text-center text-[15px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            iste quo neque debitis alias adipisci vitae quis praesentium
            explicabo <br /> placeat totam in nemo non consectetur ipsa
            temporibus deserunt ad iure!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-15">
          <div className="flex gap-6 p-[20px] border-1 border-[#ececec] rounded-2xl">
            <div className="tour-icon">
              <i className="ri-map-2-line text-white  text-2xl"></i>
            </div>

            <div className="tour-text">
              <h2 className="font-semibold text-2xl">928+</h2>
              <span className="text-[#7a7a7a]">Travel Destination</span>
            </div>
          </div>
          <div className="flex gap-6 p-[20px] border-1 border-[#ececec] rounded-2xl">
            <div className="tour-icon">
              <i className="ri-car-line text-white  text-2xl"></i>
            </div>

            <div className="tour-text">
              <h2 className="font-semibold text-2xl">1029 +</h2>
              <span className="text-[#7a7a7a]">Tour Partner</span>
            </div>
          </div>
          <div className="flex gap-6 p-[20px] border-1 border-[#ececec] rounded-2xl">
            <div className="tour-icon">
              <i className="ri-home-2-line text-white  text-2xl"></i>
            </div>

            <div className="tour-text">
              <h2 className="font-semibold text-2xl">540 +</h2>
              <span className="text-[#7a7a7a]">Hotel & Accomodation</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          <div className="w-full lg:max-w-2/3">
            <Image
              src={TourCompany1}
              alt="tourcompany1"
              className="rounded-2xl"
            />
          </div>

          <div className="w-full lg:max-w-1/3">
            <Image
              src={TourCompany2}
              alt="tourcompany1"
              className="rounded-2xl h-[100%] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#0e0700]">
        <div className="experience-content flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 items-start w-full">
          <h2 className="xl:w-[50%] w-full text-white text-wxl md:text-5xl leading-tight unbounded-font">
            Enjoy Our Best Quality Tour & Experience
          </h2>

          <div className="xl:w-[40%] w-full">
            <p className="text-[#ffffff91] pb-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quae possimus sint voluptatibus nihil necessitatibus quis
              molestias tempore aliquam. Eveniet earum hic optio excepturi
              ratione minima obcaecati reiciendis delectus nihil.
            </p>
            <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
              <a
                href="#!"
                className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider"
              >
                learn More{" "}
              </a>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 mt-10 mx-auto w-[100%] lg:mx-auto lg:w-[80%]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const contentRef = useRef(null);
            const [height, setHeight] = useState(0);

            useEffect(() => {
              if (isOpen && contentRef.current) {
                setHeight(contentRef.current.scrollHeight);
              } else {
                setHeight(0);
              }
            }, [isOpen]);
            return (
              <div key={index} className="border-b border-gr-700">
                <button
                  onClick={() => toggle(index)}
                  className="w-full cursor-pointer text-left flex justify-between items-center py-4 font-semibold text-white"
                >
                  <span>{item.question}</span>
                  <FontAwesomeIcon
                    icon={isOpen ? faAngleUp : faAngleDown}
                    className="ml-2 "
                  />
                </button>

                <div
                  style={{ maxHeight: `${height}px` }}
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                >
                  <div ref={contentRef}>
                    <p className="text-gray-400 px-2 pb-4">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="banner mx-0 w-[100%] lg:mx-auto lg:w-[80%]">
          <FontAwesomeIcon icon={faPlay} className="play-btn" />
        </div>
      </div>

      {/* Adventure */}

      <div className="adventure flex flex-col lg:flex-row px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] gap-10 ">
        <div className="w-full lg:w-[45%] adventure-content">
          <h1 className="text-4xl mb-2 font-semibold">
            Experience The New Adventure
          </h1>
          <p className="text-[#7a7a7a] mb-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            pariatur ducimus dolor doloremque dicta recusandae cumque molestias!
            Magnam, delectus reprehenderit nesciunt, ipsum eaque odio fugit
            rerum odit debitis et ad.
          </p>

          <div className="adventure-section flex gap-5 mb-4">
            <div className="adventure-icons">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-white bg-[#0e0700] p-3 rounded-full text-[20px]"
              />
            </div>
            <div className="adventure-text">
              <h2 className="mb-1 font-semibold text-xl">Safe Traveling</h2>
              <p className="text-[#7a7a7a]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi, magnam soluta illum nulla accusamus assumenda dolore repellat? Maiores omnis illum rerum adipisci illo error et facilis temporibus itaque exercitationem.</p>
            </div>
          </div>

          <div className="adventure-section flex gap-5 mb-4">
            <div className="adventure-icons">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-white bg-[#0e0700] p-3 rounded-full text-[20px]"
              />
            </div>
            <div className="adventure-text">
              <h2 className="mb-1 font-semibold text-xl">Affordable price</h2>
              <p className="text-[#7a7a7a]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi, magnam soluta illum nulla accusamus assumenda dolore repellat? Maiores omnis illum rerum adipisci illo error et facilis temporibus itaque exercitationem.</p>
            </div>
          </div>

          <div className="adventure-section flex gap-5 mb-4">
            <div className="adventure-icons">
              <FontAwesomeIcon
                icon={faDoorClosed}
                className="text-white bg-[#0e0700] p-3 rounded-full text-[20px]"
              />
            </div>
            <div className="adventure-text">
              <h2 className="mb-1 font-semibold text-xl">Comfort Accommodation</h2>
              <p className="text-[#7a7a7a]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi, magnam soluta illum nulla accusamus assumenda dolore repellat? Maiores omnis illum rerum adipisci illo error et facilis temporibus itaque exercitationem.</p>
            </div>
          </div>
        </div>

<div className="w-full lg:w-[55%] adventure-image h-[550px]">
  <Image src={Adventure01} alt="adventure " className="rounded-2xl h-[100%] object-cover"/>
</div>

      </div>
    </>
  );
}
