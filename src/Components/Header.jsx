import { useState } from "react";
import { Link } from "react-scroll"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-200 text-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
       
        <a href="#home" className="cursor-pointer">
          <img 
            src="logo-01.png" 
            className="h-10 mt-0 sm:mt-4 md:mt-0" 
          />
        </a>

        {/* Nav Bar */}
        <nav>
          <ul className="hidden md:flex space-x-12 text-lg mr-10">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-secondary cursor-pointer p-2 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-secondary cursor-pointer transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-secondary cursor-pointer transition"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="hover:text-secondary cursor-pointer transition"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-secondary cursor-pointer transition"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        {/*Responsive Menu*/}  
        <button
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-black focus:outline-none hover:text-secondary cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/*Responsive*/}  
      {menuOpen && (
        <div className="md:hidden bg-white text-black z-40">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-[#FACC15] cursor-pointer transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-[#FACC15] cursor-pointer transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-[#FACC15] cursor-pointer transition"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-[#FACC15] cursor-pointer transition"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="hover:text-[#FACC15] cursor-pointer transition"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
