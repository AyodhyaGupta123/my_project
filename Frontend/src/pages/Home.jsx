import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-16">
      {/* Hero Section */}
     <section
  className="relative text-white py-20 text-center bg-cover bg-center"
  style={{
    backgroundImage: `url('http://infinitumdigital.com/wp-content/uploads/2015/07/shutterstock_122664079.jpg')`, 
  }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-900/80"></div>

  <div className="container relative z-10 mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Build Your Dream Website & Mobile App
    </h1>
    <p className="text-lg md:text-xl mb-8">
      We create custom websites, mobile apps, provide cloud solutions,
      domains, and complete website maintenance services.
    </p>
    <div className="flex justify-center gap-4">
      <Link
        to="/services"
        className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
      >
        Our Services
      </Link>
      <Link
        to="/contact"
        className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What We Offer
          </h2>
          <div className="grid gap-8 md:grid-cols-4 cursor-pointer">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-xl shadow-lg text-center text-white overflow-hidden">
              {/* Background Slide Animation */}
              <div className="absolute inset-0 bg-white opacity-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/domain.png"
                    alt="web"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Websites</h3>
                <p className="text-sm">
                  Professional and responsive websites tailored to your business
                  needs.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-r from-pink-500 to-rose-500 p-6 rounded-xl shadow-lg text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/smartphone.png"
                    alt="mobile"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Mobile Applications
                </h3>
                <p className="text-sm">
                  High-performing Android & iOS apps with modern features.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-xl shadow-lg text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/cloud.png"
                    alt="cloud"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
                <p className="text-sm">
                  Secure cloud hosting & storage to keep your business online
                  24/7.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/maintenance.png"
                    alt="domain"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Domain & Maintenance
                </h3>
                <p className="text-sm">
                  Domain setup and complete maintenance for your existing
                  websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to take your business online?
        </h2>
        <Link
          to="/contact"
          className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
