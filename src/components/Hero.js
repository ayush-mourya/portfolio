import React from 'react';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    const yourName = "Ayush Mourya";
    const collegeName = "IIIT Delhi";
    const linkedinUrl = "https://www.linkedin.com/in/ayush-kumar-mourya-2b391b279/";
    const githubUrl = "https://github.com/ayush-mourya";
    const resumeDownloadLink = "/Ayush_Mourya_2025_CV.pdf";
    const resumeViewLink = "https://drive.google.com/file/d/1onKS5g9d2PR-cPOy-wgUy2KAw1BwFcWi/view?usp=sharing";

    return (
        <section className="h-[550px] flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
            <div className="container mx-auto grid md:grid-cols-2 items-center relative">

                {/* Left Column */}
                <div className="flex flex-col items-center text-center space-y-6 pl-40">
                    <h2 className="text-5xl md:text-5xl font-extrabold leading-tight">{yourName}</h2>
                    <p className="text-xl md:text-1.5xl font-medium">Computer Science Engineer</p>  
                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-200"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href={resumeViewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-red-800 dark:hover:text-red-200 transition-colors duration-200"
                            title="View Resume (Opens in new tab)"
                        >
                            <FaFilePdf className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Download CV Button */}
                    <a
                        href={resumeDownloadLink}
                        download="Ayush_Mourya_CV.pdf"
                        className="inline-block border border-gray-900 dark:border-white text-black dark:text-white font-bold py-2 px-4 rounded-full shadow-lg bg-transparent transition-transform duration-500 transform hover:scale-105"
                    >
                        Download CV
                    </a>
                </div>

                {/* Right Column: Image */}
                <div className="flex justify-center md:justify-start pl-28">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-2 border-white">
                        <img
                            src={profileImage}
                            alt={yourName}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
