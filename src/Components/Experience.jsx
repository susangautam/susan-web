import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faPenNib, faUsers, faMedal } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const experiences = [
    {
      date: "2022 - 2023",
      role: "College Representative",
      organization: "CSITAN Rupandehi",
      description:
        "Fulfilled the role as College Representative of Bhairahawa Multiple Campus, learning various technical and non-technical skills.",
      icon: faUniversity,
    },
    {
      date: "2022 - Present",
      role: "Graphics Designer",
      organization: "NSK Group Nepal",
      description:
        "Currently working as a Graphics Designer in NSK Group Nepal, creating various creative brand designs and social media posts.",
      icon: faPenNib,
    },
    {
      date: "2023 - 2024",
      role: "Executive Member",
      organization: "CSITAN-Rupandehi",
      description:
        "Working as an executive member in CSITAN-Rupandehi. Actively involved in organizing and leading events that enhance both technical and non-technical skills for fellow CSIT students.",
      icon: faUsers,
    },
    {
      date: "2024 - Present",
      role: "Vice-President",
      organization: "CSITAN-Rupandehi",
      description: "Actively serving as the Vice-President of CSITAN - Rupandehi, with a dedication to uplifting the organization by fostering innovation, collaboration, and growth within the local and national tech community.",
      icon: faMedal,
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-primary text-center mb-10">
          Experience
        </h2>

       
        <div className="relative flex justify-center items-center">
     
          <div className="absolute top-1/2 w-full border-t-2 border-gray-400 z-0"></div>

   
          <div className="flex justify-between w-full space-x-8 z-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-1/4 max-w-xs group"
              >
              
                <div className="w-16 h-16 rounded-full bg-primary border-4 border-white flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <FontAwesomeIcon icon={exp.icon} className="text-white text-3xl group-hover:text-white transition-all duration-300" />
                </div>

             
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 h-64">
                  <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-sm text-secondary font-semibold mt-1">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-600 mt-3">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
