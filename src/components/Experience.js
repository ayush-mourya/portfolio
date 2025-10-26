import React from "react";
// Placeholder imports for logos used in the experience list
// ACTION: You MUST define the correct paths for these logos in your project
import complexSystemLogo from "../assets/complex-system-logo.png";
import iiitdCsLogo from "../assets/iiitd-cs-logo.png";
import meeshoLogo from "../assets/meesho-logo.png";

// Adjust path for the Mind Map image if needed
import mindMap from "../assets/mind-map.png";

// I will combine your two blocks into a single component,
// using a flex container to potentially place them side-by-side or stack them.
export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-6">
      <div className="container mx-auto">

        {/* Main Flex Container: Experience List (2/3 width) and Tech Stack Card (1/3 width) */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start">

          {/* Block 1: The Work Experience List (Takes 2/3 width on medium screens) 
              *** MODIFIED: Added p-6, bg-[#101111], and rounded-xl for the black box wrapper ***
          */}
          <div className="w-full md:w-2/3 p-5 bg-[#101111] rounded-xl shadow-lg">
            <div> {/* Increased space for better separation */}
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

              {/* Component 1: Complex System Laboratory (Replacing DRDO) */}
              <a
                href="https://cosylab.iiitd.edu.in/" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                // The inner component background is now transparent or a slightly darker shade
                className="block p-4 rounded-lg hover:bg-[#262727] transition-colors duration-300 cursor-pointer bg-transparent"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={complexSystemLogo} // Placeholder for logo variable
                    alt="Complex System Laboratory Logo"
                    className="w-14 h-14 object-contain rounded-full bg-black p-1"
                  />
                  <div>
                    <p className="font-bold text-base">Complex System Laboratory</p>
                    <p className="text-sm text-gray-400">Research Intern - Jan 2025 - May 2025 · 5 months</p>
                    <br />
                    <p className="text-sm text-gray-400 mt-1">Skills: NLP · Python (Programming Language) · Fine-Tuning LLMs · Web Scraping · LSTM (Deep Learing)</p>
                  </div>
                </div>
              </a>

              {/* Component 2: Department of Computer Science and Engineering, IIIT Delhi (Unchanged) */}
              <a
                href="https://cse.iiitd.ac.in/" // Example link, replace with actual research link if available
                target="_blank"
                rel="noopener noreferrer"
                // The inner component background is now transparent or a slightly darker shade
                className="block p-4 rounded-xl hover:bg-[#262727] transition-colors duration-300 cursor-pointer bg-transparent"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={iiitdCsLogo} // Placeholder for logo variable
                    alt="IIITD CS Logo"
                    className="w-14 h-14 object-contain rounded-full bg-black p-1"
                  />
                  <div>
                    <p className="font-bold text-base">Department of Computer Science and Engineering, IIIT Delhi</p>
                    <p className="text-sm text-gray-400">Data Engineer · May 2025 -  Oct 2025 · 6 months</p>
                    <br />
                    <p className="text-sm text-gray-400 mt-1">Skills: AWS Glue · AWS athena · Amazon S3 · ETL pipelines · PySpark · SQL</p>
                  </div>
                </div>
              </a>

              {/* Component 3: Meesho (Replacing Salesforce) */}
              <a
                href="https://www.meesho.com/" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                // The inner component background is now transparent or a slightly darker shade
                className="block p-4 rounded-xl hover:bg-[#262727] transition-colors duration-300 cursor-pointer bg-transparent"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={meeshoLogo} // Placeholder for logo variable
                    alt="Meesho Logo"
                    className="w-14 h-14 object-contain rounded-full bg-black p-1"
                  />
                  <div>
                    <p className="font-bold text-base">Meesho</p>
                    <p className="text-sm text-gray-400">Upcoming Analyst Intern · Jan 2026 - Jun 2026 · 6 months</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Block 2: The Tech Stack Card (Takes 1/3 width on medium screens) */}
          <div className="w-full md:w-1/3 p-4 bg-[#101111] rounded-xl shadow-lg flex flex-col items-center justify-between transition-all duration-300 md:h-full flex-grow">
            {/* Mind Map Image */}
            <div className="mb-10 mt-4">
              <img
                src={mindMap}
                alt="Tech Stack Mind Map"
                className="w-48 h-48 object-contain mt-0"
              />
            </div>

            {/* Tech Stack List - Adjusted for better visual spacing */}
            {/* Added mt-4 to the wrapping div to give it some space from the bottom border if needed */}
            <div className="mt-0">
              <h2 className="text-start font-bold text-lg text-white mb-0">Tech Stack</h2>
              <div className="mt-1">
                <p className="text-start text-gray-300 text-base">
                  C++, Python, SQL, Apache Spark, React.js, Big Data Mining, Machine Learning, Statistics, HTML, CSS, Data Structures and Algorithms, Object Oriented Programming, Operating Systems, Database Management Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}