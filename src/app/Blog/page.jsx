import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          Blog
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
            <Link href="#">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          <div className="blog-card">
            <Image
              src="/Images/blog-page-04.webp"
              alt="blogpage04"
              className="rounded-[20px]"
              width={500}
              height={300}
            />
            <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">
              Unforgettable Experiences: Asia's Must-Visit Destinations
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          <div className="blog-card">
            <Image
              src="/Images/blog-page-05.webp"
              alt="blogpage05"
              className="rounded-[20px]"
              width={500}
              height={300}
            />
            <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">
              Unforgettable Experiences: Asia's Must-Visit Destinations
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          <div className="blog-card">
            <Image
              src="/Images/blog-page-06.webp"
              alt="blogpage06"
              className="rounded-[20px]"
              width={500}
              height={300}
            />
            <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">
              Unforgettable Experiences: Asia's Must-Visit Destinations
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

        </div>
      </div>
    </>
  );
}
