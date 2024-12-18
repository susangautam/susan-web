const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white text-black"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-16">
        
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="/profile.jpg" 
            alt="Susan Gautam"
            className="rounded-full shadow-lg border-4 border-secondary mx-auto lg:mx-0 w-60 h-60 lg:w-80 lg:h-80 object-cover"
          />
        </div>

      
        <div className="lg:w-2/3 lg:pl-16 text-center lg:text-left">
         

          <p className="text-lg md:text-xl leading-relaxed">
           Hello everyone, I am a <span className="text-primary font-semibold">graphic designer</span> and{" "}
            <span className="text-highlight font-medium">aspiring web developer</span> with a deep passion for combining 
            creativity with technical expertise. Currently pursuing a{" "}
            <span className="font-semibold text-gray-800">BSc in CSIT</span>, I bring fresh perspectives to 
            my work at <span className="font-semibold text-primary">NSK Group Nepal</span>, where I design 
            innovative solutions that blend aesthetics and technology seamlessly.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            With an innate drive for problem-solving and a love for innovation, I look forward to collaborating on projects that 
            challenge boundaries and inspire creativity. Lets create something exceptional together!
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/susan-gautam-20502b311/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-lg font-semibold bg-secondary text-black rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              Connect with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
