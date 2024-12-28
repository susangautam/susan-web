import { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"; 

const Home = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes bgShift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .animate-bgShift {
        animation: bgShift 10s ease infinite;
        background-size: 200% 200%;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen px-6 md:px-12 bg-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full animate-bgShift opacity-20"></div>

      {/* Left Text Section */}
      <div className="z-10 max-w-lg md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          Susan Gautam
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Graphics Designer | Frontend Developer
        </p>
        <div className="text-gray-600 text-base md:text-md w-96">
          <p>Explore my work and experience in creative design and development.</p>
        </div>
        {/* Social Media Icons */}
        <div className="mt-4 flex space-x-4 justify-center md:justify-start">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primary p-3 rounded-full shadow-md hover:bg-secondary transition duration-300"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primary p-3 rounded-full shadow-md hover:bg-secondary transition duration-300"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primary p-3 rounded-full shadow-md hover:bg-secondary transition duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex items-center justify-center md:w-1/2 sm:mt-96 md:mt-0">
        <div className="relative bg-secondary p-3 rounded-lg shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <img
            src="profile.jpg"
            alt="Susan Gautam"
            className="rounded-lg w-80 h-80 sm:w-96 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
