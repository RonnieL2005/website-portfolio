import React from 'react';
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div>
      <nav className="flex bg-white w-full h-14 fixed top-0 z-50">
        <div className="flex items-center justify-between w-full px-6">
          <div className="font-danfo font-bold text-3xl text-black">
            Ronnie.Dev
          </div>
          <div className="flex space-x-4">
            <Link
              to="about"
              smooth={true}
              duration={300}
              className="font-major-mono text-xl text-black cursor-pointer"
              spy={true}
              activeClass="active"
              offset={-70}
              delay={0}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={300}
              easing="easeInQuart" 
            >
              About
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={300}
              className="font-major-mono text-xl text-black cursor-pointer"
              easing="easeInQuart" 
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={300}
              className="font-major-mono text-xl text-black cursor-pointer"
              easing="easeInQuart" 
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={300}
              className="font-major-mono text-xl text-black cursor-pointer"
              easing="easeInQuart" 
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <Element name="about" className="h-screen bg-gray-100 pt-20">
        <h2 className="text-3xl font-bold">About</h2>
        <p>About section content goes here...</p>
      </Element>

      <Element name="experience" className="h-screen bg-gray-200 pt-20">
        <h2 className="text-3xl font-bold">Experience</h2>
        <p>Experience section content goes here...</p>
      </Element>

      <Element name="projects" className="h-screen bg-gray-300 pt-20">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p>Projects section content goes here...</p>
      </Element>

      <Element name="contact" className="h-screen bg-gray-400 pt-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p>Contact section content goes here...</p>
      </Element>
    </div>
  );
}

export default App;

