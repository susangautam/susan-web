import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <footer className="bg-white text-white py-12 mt-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
       
            <div className="text-center md:text-left">
              <h2 className="text-3xl text-primary font-bold mb-4">Susan Gautam</h2>
              <p className="text-gray-400 mb-6">
              I am passionate about learning new things and find great joy in helping others along their learning journey. Sharing knowledge and supporting growth is something I truly value.
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://www.facebook.com/xuxantgtm/" className="text-gray-400 hover:text-secondary transition-colors">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
               
                <a href="https://www.instagram.com/xuxant_gtm/?next=%2F" className="text-gray-400 hover:text-secondary transition-colors">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/susan-gautam-20502b311/" className="text-gray-400 hover:text-secondary transition-colors">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-secondary transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-secondary transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-secondary transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-secondary transition-colors">Experience</a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-4">
                Have a project in mind? Get in touch with me today.
              </p>
              <form action="#" method="POST" className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 bgnone rounded-md text-primary border border-primary focus:outline-none"
                />
                <textarea
                  placeholder="Your message"
                  className="w-full p-3 bg-none rounded-md text-primary border border-primary focus:outline-none"
                  rows="4"
                ></textarea>
                <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-secondary transition-colors duration-300 ease-in">
                  Send Message
                </button>
              </form>
            </div>
          </div>

         
          <div className="mt-12 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Susan Gautam. All Rights Reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
