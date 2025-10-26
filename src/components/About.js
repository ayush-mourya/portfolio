import React from 'react';
import giphyAvatar from '../assets/giphy.png'; // Adjust path if needed
import iiitdLogo from '../assets/iiitd-logo.png';     // Adjust path if needed
import { FaInstagram } from 'react-icons/fa';   // Font Awesome: Instagram
import { MdCameraAlt } from 'react-icons/md'; // Material Design: Camera

const About = () => {
    // Your refined about paragraph
    return (
        <section id="about" className="bg-black text-white flex justify-center pt-20    ">
            <div className="container mx-auto px-1">
                <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch">

                    {/* Left Card: Profile Giphy & Education */}
                    <div className="w-full md:w-1/3 p-6 bg-[#101111] rounded-xl shadow-lg flex flex-col items-center justify-between transition-all duration-300">                        {/* Giphy Avatar */}
                        <div className="mb-0 p-0">
                            <img
                                src={giphyAvatar}
                                alt="My profile Giphy"
                                className="w-60 h-60"
                            />
                        </div>

                        {/* IIIT Delhi Education Block - Salesforce style hover */}
                        <div className="w-full">
                            <a
                                href="https://www.iiitd.ac.in/" // Example link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 rounded-lg hover:bg-[#262727] transition-colors duration-300 cursor-pointer"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={iiitdLogo}
                                        alt="IIITD Logo"
                                        className="w-14 h-14 object-contain rounded-full bg-black p-1" // Added bg-white and p-1 for contrast
                                    />
                                    <div>
                                        <p className="font-semibold text-base">IIIT Delhi</p>
                                        <p className="font-semibold text-base">B.Tech - Computer Science</p>
                                        <p className="text-sm text-gray-400">Aug 2022 - May 2026</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Card: Description and Social Icons (New Block) */}
                    <div className="w-full md:w-2/3 p-8 bg-[#101111] rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300">
                        <p className="text-lg leading-relaxed text-gray-300">
                            I bring a robust technical foundation encompassing Core CS Fundamentals in scaling and optimizing algorithms
                            and proficiency across statistics, big data mining and machine learning. I am currently exploring backend
                            and distributed systems.
                        </p>

                        {/* SECOND PARAGRAPH: Personal & Call to Action */}
                        <p className="text-lg leading-relaxed text-gray-300 mb-2">
                            My favorite forms of expression involve travelling and photography, capturing the world's moments through a lens.
                            Reach out to me here if you're looking for someone who loves solving complex problems requiring
                            intellectual rigor and intuition. If not, call me up for weekend rides or photowalks where we can agree to disagree.
                        </p>

                        {/* Social/Hobbies Icons Block */}
                        <div className="flex space-x-6 justify-start py-6">

                            {/* Instagram Link (White, Scale on Hover) */}
                            <a
                                href="https://www.instagram.com/seri_ayush_/" // **ACTION: Replace with your Instagram URL**
                                target="_blank"
                                rel="noopener noreferrer"
                                // Base color is white, scale and transition on hover
                                className="text-white transform transition-transform duration-230 hover:scale-105"
                            >
                                {/* Note: You might need to import the icon component (e.g., FaInstagram) */}
                                <FaInstagram size={28} /> {/* Increased size slightly for better visibility */}
                            </a>

                            {/* Photography/VSCO/500px Link (White, Scale on Hover) */}
                            <a
                                href="https://vsco.co/arrestvision/gallery" // **ACTION: Replace with your photography portfolio URL**
                                target="_blank"
                                rel="noopener noreferrer"
                                // Base color is white, scale and transition on hover
                                className="text-white transform transition-transform duration-230 hover:scale-105"
                            >
                                {/* Note: You might need to import the icon component (e.g., MdCameraAlt) */}
                                <MdCameraAlt size={28} /> {/* Increased size slightly for better visibility */}
                                <span className="sr-only">Gallery</span>
                                {/* <p>Gallery</p> */}
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;