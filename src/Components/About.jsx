const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row">
        
        {/* Left Section - Timeline/Skills */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary">About Me</h2>
          <ul className="text-lg opacity-80">
            <li className="mb-4">Graphic Design</li>
            <li className="mb-4">Web Development (HTML, CSS, JavaScript, React)</li>
            <li className="mb-4">UI/UX Design</li>
            <li className="mb-4">Problem Solving & Innovation</li>
          </ul>
        </div>

        {/* Right Section - Interactive Text */}
        <div className="lg:w-1/2 lg:pl-16 space-y-4 mt-6 lg:mt-0">
          <p className="text-lg opacity-80">
            I started my career in graphic design and have since expanded into frontend development, blending design skills with coding knowledge. Currently pursuing a BSc in CSIT, I aim to bridge the gap between creativity and technology.
          </p>

          <p className="text-lg opacity-80">
            My journey is all about evolving and constantly learning new technologies to solve problems creatively. I look forward to working on exciting projects that challenge boundaries.
          </p>

          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/susan-gautam-20502b311/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-lg font-semibold text-black bg-white border-2 border-primary rounded-full relative overflow-hidden group"
            >
              {/* Button Text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Connect with Me</span>
              
              {/* Background fill animation */}
              <span className="absolute top-0 left-0 w-full h-full bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-1200 ease-in-out z-0"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
