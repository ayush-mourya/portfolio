import React from "react";

function Header() {
    const nav_arr = [
        { name: "About", link: "#about" },
        { name: "Experience", link: "#experience" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 h-20 bg-black shadow-md">
            <div className="w-full h-full flex justify-between items-center px-25 md:px-40">

                <span className="text-lg">ayush22126@iiitd.ac.in</span>

                {/* Center Navigation */}
                <nav className="flex space-x-20">
                    {nav_arr.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className="text-lg hover:scale-105 transition-transform duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
