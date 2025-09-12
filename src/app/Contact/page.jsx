import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          Contact
        </h2>

        <ul className="text-white z-10 flex items-center gap-8 section-list">
          <li className="text-sm relative">
            <Link href="#" className="">
              Home
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="absolute -left-6 top-0.5"
            />
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>

      {/* contact page */}

      <div className="contact-page px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        <div className="contact-section p-[20px] md:p-[50px] rounded-[20px] bg-[#0e0700] flex flex-col lg:flex-row">
          <div className="md:w-[40%] w-[100%]">
            <div className="contact-content mb-6">
              <span className="uppercase text-[#7a7a7a]">Office Address</span>
              <p className="text-white mt-3 text-[24px]">
                JI. Desa Sawangan No. IT, Nusa Dua, Bali
              </p>
            </div>

            <div className="contact-content mb-6">
              <span className="uppercase text-[#7a7a7a]">Office Phone</span>
              <p className="text-white mt-3 text-[24px]">(+91) 12345 67890</p>
            </div>

            <div className="contact-content mb-6">
              <span className="uppercase text-[#7a7a7a]">Email Address</span>
              <p className="text-white mt-3 text-[24px]">skycare@gmail.com</p>
            </div>

            <div className="contact-content">
              <p className="mt-3 text-[24px] text-[#fff]">
                Follow Our Social meadia{" "}
              </p>

              <div className="contact-icons flex gap-3 mt-3">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[22px] text-[#fff]"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-[22px] text-[#fff]"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[22px] text-[#fff]"
                />

                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-[22px] text-[#fff]"
                />
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[60%]">
            <form action="" className="mt-5 md:mt-0">
              <div className="mb-5">
                <label className="text-sm text-[#fff] mb-2 uppercase">Comments / Questions</label>
                <textarea rows='5' placeholder="Your Message Here" className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]"></textarea>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-6 mb-5">
                <div className="flex-1 mb-5 md:mb-0">
                   <label className="text-sm text-[#fff] mb-2 uppercase">Name</label>
                   <input type="text" placeholder="Your Name" className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]"/>
                </div>

                 <div className="flex-1 mb-5 md:mb-0">
                   <label className="text-sm text-[#fff] mb-2 uppercase">Email</label>
                   <input type="email" placeholder="Your Email" className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]"/>
                </div>
              </div>
              <button type="submit" className="mt-5 uppercase w-full px-6 py-3 bg-[#fff] rounded-[50px] font-semibold">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.71772249676!2d73.09068439469182!3d22.322081830866285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1757654546022!5m2!1sen!2sin" width="100%" height="500"   loading="lazy" ></iframe>
    </>
  );
}
