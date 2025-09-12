"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown,faAngleRight,faAngleUp } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import user from '../../assets/user.png'
import { useEffect, useRef, useState } from "react"

export default function page() {

const [openIndex, setIsopenIndex] = useState (null)

const contentRefs = useRef ([]);


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


const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          FAQ
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
            <Link href="#">faq</Link>
          </li>
        </ul>
      </div>
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

              <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#fff]">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl unbounded-font pb-2">
           General Question
          </h1>

           <p className="text-[#7a7a7a] pb-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quae possimus sint voluptatibus nihil necessitatibus quis
              molestias tempore aliquam. </p>
        </div>

        <div className="grid grid-cols-1 gap-7 mt-10 mx-auto w-[100%] lg:mx-auto lg:w-[80%]">
          {faqData.map((item, index) => {

            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="border-b border-gr-700">
                <button
                  onClick={() => setIsopenIndex(isOpen ? null : index)}
                  className="w-full cursor-pointer text-left flex justify-between items-center py-4 font-semibold "
                >
                  <span>{item.question}</span>
                  <FontAwesomeIcon
                    icon={isOpen ? faAngleUp : faAngleDown}
                    className="ml-2 "
                  />
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight: isOpen ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                  }}
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                >
                  <div >
                    <p className="text-gray-400 px-2 pb-4">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
