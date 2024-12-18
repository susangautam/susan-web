import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const style = document.createElement('style');
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
      className="flex flex-col items-center justify-center h-screen text-black text-center relative overflow-hidden bg-white"
    >
   
      <div className="absolute top-0 left-0 w-full h-full animate-bgShift"></div>

  
      <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fadeIn text-primary">
        Susan Gautam
      </h1>
      <p className="text-xl md:text-2xl mt-4 opacity-0 animate-slideIn delay-200">
        Graphics Designer | Frontend Developer
      </p>


      <div className="mt-12 text-lg text-gray-500 opacity-0 animate-fadeIn delay-600">
        <p>Explore my work and experience.</p>
      </div>
    </section>
  );
};

export default Home;
