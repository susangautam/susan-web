const Skills = () => {
  const skills = [
    { name: 'HTML', logo: 'html.png' }, 
    { name: 'CSS', logo: 'css.png' },
    { name: 'JavaScript', logo: 'js.png' },
    { name: 'ReactJS', logo: 'react.png' },
    { name: 'TailwindCSS', logo: 'tailwind.png' },
    { name: 'Photoshop', logo: 'photoshop.png' },
    { name: 'Illustrator', logo: 'illustrator.png' },
    { name: 'Figma', logo: 'figma.png' },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-50">
      <div className="container mx-auto text-center">
     
        <h2 className="text-4xl font-bold text-primary">Skills</h2>

      
        <div className="flex justify-center mt-6 flex-wrap gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-accent py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
             
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-16 h-16 mb-2 object-contain"
              />
           
              <span className="text-black font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
