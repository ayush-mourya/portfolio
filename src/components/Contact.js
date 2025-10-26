import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return;
    }

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScwQ3PR8yJcl8ny80aerxwiLb6wod2NyRFN6rAbcKCaX1VhfA/viewform"; // your Google Form URL

    const formDataToSend = new FormData();
    formDataToSend.append("entry.705687917", formData.name); // name field ID
    formDataToSend.append("entry.844594148", formData.email); // email field ID
    formDataToSend.append("entry.1072831026", formData.message); // message field ID

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white min-h-screen flex items-center justify-center py-20 px-12"
    >
      <div className="container">
        <div className="bg-[#262727] rounded-t-lg p-3 flex items-center justify-between shadow-lg border-b-2 border-gray-600">
          <div className="flex space-x-3">
            <span className="h-3 w-3 bg-red-500 rounded-full"></span>
            <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
            <span className="h-3 w-3 bg-green-500 rounded-full"></span>
          </div>
        </div>

        <div className="bg-[#101111] rounded-b-lg shadow-lg py-8 md:py-24 px-6 md:px-72 border border-[#262727]">
          <h2 className="text-4xl font-bold mb-4">Let's Talk!</h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you're looking for a developer, a designer, or a freelancer, I'm always happy to chat.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label className="block text-md font-medium text-gray-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Ayush Mourya"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-md placeholder-gray-400 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="ayush22126@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-md placeholder-gray-400 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-200 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Hi, I'm interested in working with you."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-md placeholder-gray-400 text-white resize-y"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSent}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold text-lg transition-all duration-200 ${
                isSent
                  ? "bg-green-600 border border-green-500"
                  : "bg-[#2a2a2a] border border-gray-600 hover:bg-[#333]"
              }`}
            >
              {isSent ? "Sent ✅" : "Send Message"}{" "}
              {!isSent && <FiSend className="ml-2" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
