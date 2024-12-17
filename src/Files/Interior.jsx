import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Interior = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [inView, setInView] = useState(false); // To trigger animation on scroll

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDescription = () => setDescriptionExpanded(!descriptionExpanded);

  const galleryImages = [
    "/src/Files/1.jpg",
    "/src/Files/2.jpg",
    "/src/Files/3.jpg",
    "/src/Files/4.jpg",
    "/src/Files/5.jpg",
    "/src/Files/6.jpg",
    "/src/Files/7.jpg",
    "/src/Files/8.jpg",
    "/src/Files/9.jpg",
    "/src/Files/10.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Intersection Observer hook for detecting section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting); // Update state when in view
      },
      { threshold: 0.3 } // Trigger animation when 30% of the element is in view
    );
    
    const target = document.getElementById("services");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900 text-white shadow-lg">
        <nav className="container mx-auto flex justify-between items-center p-5">
          <a href="#home" className="text-2xl font-light">
            Interior Designs
          </a>
          <div className="relative">
            <button onClick={toggleMenu} className="lg:hidden text-xl">
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
            <ul
              className={`absolute right-0 top-16 lg:static lg:flex lg:space-x-6 bg-gray-800 lg:bg-transparent lg:p-0 p-4 rounded-lg transition-all ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              {["Home", "About", "Gallery", "Services", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="block text-white hover:text-gray-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/src/Files/hero.jpg')" }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-5xl font-bold">Interior Designs</h2>
          <h3 className="text-2xl mt-2">Transforming spaces, elevating lives.</h3>
          <p className="mt-4">
            Crafting unique interiors that reflect your style and enhance every moment.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="border-2 border-transparent text-white py-2 px-4 rounded hover:border-gray-300">
              Order Now
            </button>
            <button className="border-2 border-white text-white py-2 px-4 rounded hover:border-gray-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <div className="mx-auto max-w-xl">
            {/* Animated Content Wrapper */}
            <div
              className={`relative overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                descriptionExpanded ? "max-h-screen" : "max-h-32"
              }`}
            >
              <p className="text-left leading-relaxed">
                Experience the pinnacle of interior design with a company dedicated to
                transforming spaces with innovative, high-quality solutions. Our expert
                team crafts bespoke designs tailored to your unique style, incorporating the
                latest trends and technologies for a seamless blend of beauty and functionality.
              </p>
            </div>
            {/* Button */}
            <div className="mt-4">
              <button
                onClick={toggleDescription}
                className="bg-gray-800 border border-gray-600 py-2 px-6 rounded text-sm hover:bg-gray-700 hover:border-white transition-all"
              >
                {descriptionExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-900 text-white text-center">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Current Image */}
          <div className="flex justify-center mb-6">
            <img
              src={galleryImages[currentImageIndex]}
              alt={`Gallery ${currentImageIndex + 1}`}
              className="rounded-lg w-full max-h-[500px] object-cover"
            />
          </div>
          {/* Arrows */}
          <div className="flex justify-between">
            <button
              onClick={handlePreviousImage}
              className="bg-gray-700 text-white p-3 rounded hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={handleNextImage}
              className="bg-gray-700 text-white p-3 rounded hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with Scroll Animation */}
      <section id="services" className="py-16 bg-gray-900 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out ${
              inView ? "opacity-100 transform-none" : "opacity-0 transform translate-y-10"
            }`}
          >
            {/* Service Cards */}
            {[
              { title: "Residential Design", description: "Transforming your home into a haven with unique and bespoke interiors." },
              { title: "Commercial Design", description: "Crafting functional and appealing spaces for businesses and offices." },
              { title: "Custom Furniture", description: "High-quality custom furniture to complement your unique interiors." }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Interior Designs. All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Interior;
