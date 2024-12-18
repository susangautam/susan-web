

const Projects = () => {
  const projects = [
    {
      name: 'Interior Designing',
      description: 'A detailed project showcasing modern and creative interior designs.',
      link: 'https://github.com/susangautam/Interior-Design-Project',  // GitHub link
      image: '/public/interior copy.jpg',
    },
  
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-xs w-full rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                <a
                  href={project.link}  
                  target="_blank"  
                  rel="noopener noreferrer" 
                  className="inline-block mt-4 text-secondary font-medium hover:underline"
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
