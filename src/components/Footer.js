import React from 'react';
import { FaTwitter } from 'react-icons/fa'; // Attempting to use external FaTwitter as requested
import LeetCodeLogo from "../assets/Leetcode-logo.png";

const App = () => {
    // Shared icon button style
    const iconClass = "p-3 bg-[#1a1a1a] rounded-full text-white hover:text-indigo-400 transition-colors duration-200 flex items-center justify-center";

    // Using the uploaded PNG file via its content ID for LeetCode
    const LeetCodePngIcon = () => (
        <img
            src={LeetCodeLogo}
            alt="LeetCode Logo"
            className="w-8 h-8 object-contain invert"
        />
    );


    return (
        <footer id="footer" className="bg-black text-white py-8">
            <div className="container">

                {/* Divider Line */}
                <div className="border-t border-gray-700 mb-6"></div>

                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 space-y-4 md:space-y-0">

                    {/* Left: Institute Name */}
                    <p className="text-center md:text-left order-2 md:order-1">
                        Indraprastha Institute of Information Technology, Delhi
                    </p>

                    {/* Center: Social Icons */}
                    <div className="flex space-x-4 order-1 md:order-2">
                        {/* Twitter Icon Link (using FaTwitter) */}
                        <a
                            href="YOUR_TWITTER_PROFILE_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={iconClass}
                            aria-label="Twitter Profile"
                        >
                            <FaTwitter size={24} />
                        </a>

                        {/* LeetCode Icon Link (using uploaded PNG) */}
                        <a
                            href="https://leetcode.com/u/ayush22126/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={iconClass}
                            aria-label="LeetCode Profile"
                        >
                            <LeetCodePngIcon size={20} />
                        </a>
                    </div>

                    {/* Right: Copyright */}
                    <p className="text-center md:text-right order-3 md:order-3">
                        &copy; {new Date().getFullYear()}, Ayush Mourya, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default App;
