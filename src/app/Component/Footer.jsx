import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFlickr, faXTwitter, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <div className="footer-bg bg-black px-[2%] sm:px-[8%] pt-[50px] lg:pt-[90px]">
                <div className="footer-content">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-3">
                            <div className="text-white logo text-2xl uppercase font-semibold">
                                <a href="/" className="unbounded-font">
                                    Sky <span className="unbounded-font">Fare</span>
                                </a>
                            </div>

                            <p className="mt-4 text-[#ffffffb3]">Badung, Baji- Ji, Desa sawangan, No. 11 Nusa Dua, 81566</p>

                            <div className="footer-icons flex gap-3 mt-5">
                                <FontAwesomeIcon icon={faInstagram} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer" />
                                <FontAwesomeIcon icon={faTwitter} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer" />
                                <FontAwesomeIcon icon={faFacebook} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer" />

                                <FontAwesomeIcon icon={faYoutube} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer" />
                            </div>
                        </div>

                        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div className="md:col-span-3 space-y-3">
                                <h2 className="text-white text-2xl unbounded-font">Page</h2>
                                <ul className="space-y-2 list-none">
                                    <li>
                                        <a href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">
                                            Services
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">
                                            FAQ
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                              <div className="md:col-span-3 space-y-3">
                                <h2 className="text-white text-2xl unbounded-font">Links</h2>
                                <ul className="space-y-2 list-none">
                                    <li>
                                        <a href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">
                                           Privacy
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">
                                            Career
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">
                                            Blog
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">
                                          Terms & Condition
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div className="md:col-span-6 space-y max-w-md">
                                <h2 className="text-white text-2xl unbounded-font mb-6">Our Newsletter</h2>
                                <p className="text-[#ffffffb3] text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, 
                                </p>

                                <form className="flex items-center border border-[#ffffff4d] rounded-full mt-4 overflow-hidden" >

                                    <input type="email" placeholder="Your Email Address" className="flex-1 px-4 py-3 text-sm bg-transparent text-white placeholder-[#ffffff80] border-0 outline-0" />


                                    <button className="uppercase cursor-pointer bg-white text-black font-semibold xl:px-6 py-3 hover:bg-gray-200 md:px-2 p-5">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#ffffff33] mt-12 py-4">
               <p className="mt-3 md:mt-5 text-[#ffffff99] text-center">
                  Copyright 2025. All right Reserved by   <a href="" className="font-bold text-white">Skyfare</a>
               </p>
                </div>
            </div>
        </>
    );
}
