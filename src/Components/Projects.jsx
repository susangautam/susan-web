const Projects = () => {
  const projects = [
    {
      name: 'Interior Designing',
      description: 'A detailed project showcasing modern and creative interior designs.',
      link: 'https://github.com/susangautam/Interior-Design-Project',
      image: '/public/interior copy.jpg',
    },
    {
      name: '100 Mini Projects',
      description: '100 miniprojects using HTML,CSS and JavaScript.',
      link: 'https://github.com/susangautam/Web-Dev-Challange',
      image: 'web.jpg',
    },
    {
      name: 'Graphics Designing',
      description: 'Here are some of my Graphics Designing Projects.',
      link: 'https://www.behance.net/susangautam1',
      image: 'graphics-designing.png',
    },
    {
      name: 'Alime Project',
      description: 'This is a clone of alime project.',
      link: 'https://github.com/susangautam/Alime-project',
      image: 'alime.png',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-xs w-full rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image with hover effect */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Text content with hover effects */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-secondary font-medium group-hover:text-primary transition-colors duration-300 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
