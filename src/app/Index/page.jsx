"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDown,
  faAngleUp,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import Link from "next/link";
import toursData from "../TourData.json";
import { useEffect, useRef, useState } from "react";

import About01 from "../../../public/Images/about-01.webp";
import About02 from "../../../public/Images/about-02.webp";
import About03 from "../../../public/Images/about-03.webp";

import Author01 from "../../../public/Images/author-01.webp";
import Author02 from "../../../public/Images/author-02.webp";
import Author03 from "../../../public/Images/author-03.webp";
import Author04 from "../../../public/Images/author-04.webp";



import user from "../../assets/user.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function Index() {
  const [selectedTour, setSelectedTour] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (Index) => {
    setOpenIndex(openIndex === Index ? null : Index);
  };

  const faqData = [
    {
      question: "1. What to prepare trip to Asia",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "2. What document you need before go to Asia",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "3. How to scheduling Asia trip itinerary",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "4. 8 Website must read before your trip",
       answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "5. This is the best budget you need to prepare",
       answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
    {
      question: "6. This site give you the information about travel to Asia",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae possimus sint voluptatibus nihil necessitatibus quis molestias tempore aliquam. Eveniet earum hic optio excepturi ratione minima obcaecati reiciendis delectus nihil.",
    },
  ];

  return (
    <>
      {/* Hero */}

      <div className="hero h-screen min-h-screen flex justify-center items-center z-10">
        <div className="hero-content relative text-center">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white">
            Find Your Best <br /> travels Package
          </h1>

          <p className="pt-3 text-[#ffffffb3] md:pb-10 pb-5">
            Planning for a trip? we will organize your trip with the best places
            and within best budget!
          </p>

          <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
            <a
              href="#!"
              className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider"
            >
              View All Tours
            </a>
          </button>
        </div>
      </div>

      {/* Tour */}

      <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14">
        <div className="travel-content text-center">
          <h1 className="unbounded-font text-4xl font-semibold pb-3">
            Find Out The Best Travel Choice in Asia
          </h1>
          <p className="w-[60%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </p>
        </div>

        <div className="travel-wrapper grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {toursData.map((tour) => {
            return (
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
            );
          })}
        </div>
      </div>

      {/* About */}

      <div className="about py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
        <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0">
          <div className="lg:w-[50%]">
            <div className="about-section flex flex-col">
              <div className="about-heading lg:px-[12%]">
                <h1 className="text-2xl xl:text-4xl font-bold mb-4">
                  Begin Your New Life Experience with Exploring New Destination
                </h1>
                <p className="mb-3 w-[90%] teext-[#7a7a7a] text-sm">
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

      {/* testimonial */}

      <div className="testimonials bg-[#0e0700] px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px]">
        <div className="pb-10 testimonials-content flex justify-between flex-col lg:flex-row gap-3 lg:gap-0 items-start  w-full">
          <h2 className="xl:w-[50%] w-full text-white text-4xl leading-tight unbounded-font">
            Discover A Mesmerizing Nature Landscape & Stunning Culture
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

        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="tst-item bg-[#191919] h-[250px] flex flex-col justify-center p-4 rounded-2xl leading-6 w-full">
              <p className="text-[#ffffff91]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus non odio, perferendis dolore blanditiis iure
                distinctio nam necessitatibus qui autem facere laboriosam,
                facilis voluptas asperiores debitis, beatae ipsum reiciendis
                earum!
              </p>

              <div className="tst-user flex items-start gap-3 mt-4">
                <Image
                  src={user}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="user"
                />
                <div>
                  <h4 className="unbounded-font text-white font-semibold">
                    John Doe
                  </h4>
                  <p className="text-[#ffffff91] text-sm">Designation</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tst-item bg-[#191919] h-[250px] flex flex-col justify-center p-4 rounded-2xl leading-6 w-full">
              <p className="text-[#ffffff91]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                asperiores eligendi temporibus, ut atque consequuntur natus
                accusantium optio odio, ipsa repudiandae expedita nihil velit
                ullam eos enim voluptas sint doloremque?
              </p>
              <div className="tst-user flex items-start gap-3 mt-4">
                <Image
                  src={user}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="user"
                />
                <div>
                  <h4 className="unbounded-font text-white font-semibold">
                    Jane Smith
                  </h4>
                  <p className="text-[#ffffff91] text-sm">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tst-item bg-[#191919] h-[250px] flex flex-col justify-center p-4 rounded-2xl leading-6 w-full">
              <p className="text-[#ffffff91]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                asperiores eligendi temporibus, ut atque consequuntur natus
                accusantium optio odio, ipsa repudiandae expedita nihil velit
                ullam eos enim voluptas sint doloremque?
              </p>
              <div className="tst-user flex items-start gap-3 mt-4">
                <Image
                  src={user}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="user"
                />
                <div>
                  <h4 className="unbounded-font text-white font-semibold">
                    Farhan
                  </h4>
                  <p className="text-[#ffffff91] text-sm">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tst-item bg-[#191919] h-[250px] flex flex-col justify-center p-4 rounded-2xl leading-6 w-full">
              <p className="text-[#ffffff91]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                asperiores eligendi temporibus, ut atque consequuntur natus
                accusantium optio odio, ipsa repudiandae expedita nihil velit
                ullam eos enim voluptas sint doloremque?
              </p>
              <div className="tst-user flex items-start gap-3 mt-4">
                <Image
                  src={user}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="user"
                />
                <div>
                  <h4 className="unbounded-font text-white font-semibold">
                    Anna
                  </h4>
                  <p className="text-[#ffffff91] text-sm">creative Head</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* blog */}

      <div className="blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        <div className="w-full pb-5">
          <h1 className="unbounded-font text-4xl font-semibold pb-3">
            Our Latest Blogs
          </h1>

          <p className="text-[#193555]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio
            laudantium eos officiis doloribus autem sequi. Quod corrupti, sequi
            mollitia incidunt vero veniam officiis, inventore sed id est quam
            eum!
          </p>
        </div>

            <div className="blog-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <div className="blog-card">
        <Image
          src="/Images/blog-page-02.webp"
          alt="blogpage02"
          className="rounded-[20px]"
          width={500}
          height={300}
        />
        <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">
          Tropical Bliss: Rejuvenate in Asia's Idyllic Beaches
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quidem
          ullam distinctio accusamus veniam nulla, facilis maxime dolore aut vel
          ut aliquam, animi officia harum est sapiente! Praesentium, id illum!
        </p>
      </div>

      <div className="blog-card">
        <Image
          src="/Images/blog-page-01.webp"
          alt="blogpage01"
          className="rounded-[20px]"
          width={500}
          height={300}
        />
        <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">
          Asia's Thrilling Adventures: Hiking, Trekking, and More
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quidem
          ullam distinctio accusamus veniam nulla, facilis maxime dolore aut vel
          ut aliquam, animi officia harum est sapiente! Praesentium, id illum!
        </p>
      </div>

      <div className="blog-card">
        <Image
          src="/Images/blog-page-03.webp"
          alt="blogpage03"
          className="rounded-[20px]"
          width={500}
          height={300}
        />
        <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">
          Unforgettable Experiences: Asia's Must-Visit Destinations
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quidem
          ullam distinctio accusamus veniam nulla, facilis maxime dolore aut vel
          ut aliquam, animi officia harum est sapiente! Praesentium, id illum!
        </p>
      </div>
    </div>

      </div>

      {/* Experience */}

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
      </div>


{/* contact Banner */}


<div className="contact-banner flex justify-center items-center">
  <div className="contact-banner-content relative text-center">


    <h1 className="xl:text-5xl lg:text-7xl text-3xl  unbounded-font font-bold text-white">
  Get Close With Us &  <br /> Get Special Promo
</h1>

    <p className="pt-6 text-[#ffffffb3] pb-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


     <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
              <a
                href="#!"
                className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider"
              >
                contact us{" "}
              </a>
            </button>
  </div>
</div>


    </>
  );
}
