import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
<nav className="flex bg-white h-14 fixed top-0 left-0 z-50 w-full justify-between px-6">
  <div className="font-danfo font-bold text-3xl text-black p-3">
    Ronnie.Dev
  </div>
  <div className="md:hidden text-2xl p-4">
    <button onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="text-black focus:outline-none">
      ☰
    </button>
  </div>
  <div className={`flex md:flex-row space-y-4 md:space-y-0 md:items-center ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
    <div className="relative">
    </div>
    <div className={`flex ${isMenuOpen ? 'flex-col' : 'flex-row'} md:mx-4`}>
      {/* Conditionally apply flex-col for mobile screens */}
      <Link
        to="about"
        smooth={true}
        duration={300}
        className="font-major-mono font-bold text-xl text-black cursor-pointer md:mx-4"
        easing="easeInQuart"
        onClick={() => setIsMenuOpen(false)}
      >
        About
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={300}
        className="font-major-mono font-bold text-xl text-black cursor-pointer md:mx-4"
        easing="easeInQuart"
        onClick={() => setIsMenuOpen(false)}
      >
        Experience
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={300}
        className="font-major-mono font-bold text-xl text-black cursor-pointer md:mx-4"
        easing="easeInQuart"
        onClick={() => setIsMenuOpen(false)}
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={300}
        className="font-major-mono font-bold text-xl text-black cursor-pointer md:mx-4"
        easing="easeInQuart"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </Link>
    </div>
  </div>
</nav>


  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="about" className="h-screen bg-white pt-0.5 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0">
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h1 className="font-extrabold text-black text-3xl md:text-5xl font-darker-grotesque">
              Full-Stack Software engineer👋
            </h1>
            <p className="font-semibold text-gray-500 text-lg md:text-xl">
              Hi, I'm Ronnie Langat. A passionate full-Stack software engineer based in Nairobi, Kenya 📍
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/ronnie-langat-52062628b/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.568 0H3.43C1.536 0 0 1.536 0 3.43v17.137C0 22.464 1.536 24 3.43 24h17.138c1.893 0 3.43-1.536 3.43-3.43V3.43C24 1.536 22.464 0 20.568 0zM7.465 20.568H4.52V9.597h2.945v10.971H7.466zM6.992 8.009a1.964 1.964 0 0 1-1.965-1.964 1.964 1.964 0 1 1 3.93 0 1.964 1.964 0 0 1-1.965 1.964zm13.576 12.559h-2.944v-5.487c0-1.311-.026-3.003-1.827-3.003-1.828 0-2.11 1.429-2.11 2.903v5.586h-2.943V9.597h2.827v1.548h.04c.395-.748 1.358-1.537 2.787-1.537 2.986 0 3.536 1.964 3.536 4.513v5.447h-.002z"/>
                </svg>
              </a>
              <a href="https://github.com/RonnieL2005/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.285-.01-1.037-.015-2.03-3.338.724-4.042-1.606-4.042-1.606-.547-1.386-1.335-1.755-1.335-1.755-1.092-.746.083-.731.083-.731 1.207.085 1.843 1.24 1.843 1.24 1.072 1.837 2.81 1.305 3.496.998.109-.776.422-1.305.768-1.605-2.683-.307-5.504-1.34-5.504-5.966 0-1.318.471-2.394 1.241-3.233-.124-.306-.538-1.527.117-3.18 0 0 1.01-.324 3.3 1.234a11.564 11.564 0 0 1 3-.396c1.02.002 2.045.137 3 .396 2.287-1.558 3.296-1.234 3.296-1.234.656 1.653.243 2.874.119 3.18.774.839 1.238 1.915 1.238 3.233 0 4.638-2.826 5.656-5.516 5.958.433.373.823 1.107.823 2.227 0 1.607-.014 2.896-.014 3.287 0 .321.187.696.799.577C20.565 21.798 24 17.304 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <img src="/ronnie-photo.jpeg" alt="Ronnie" className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg" />
        </div>
        <div className="flex items-center space-x-4 mt-10 md:mt-20">
          <p className="font-darker-grotestque font-bold text-xl md:text-3xl text-black">
            Tech Stack |
          </p>
          <div className="flex items-center space-x-2">
            <FaReact size={24} color="#61DAFB" />
            <FaJs size={24} color="#F7DF1E" />
            <FaPython size={24} color="#3776AB" />
            <FaHtml5 size={24} color="#E34F26" />
            <FaCss3Alt size={24} color="#1572B6" />
            <FaDatabase size={24} color="#336791" />
          </div>
        </div>
      </Element>

      <Element name="experience" className="h-screen bg-white pt-20">
        <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
        <p>Experience section content goes here...</p>
      </Element>

      <Element name="projects" className="h-screen bg-gray-400 pt-20">
        <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
        <p>Projects section content goes here...</p>
      </Element>

      <Element name="contact" className="h-screen bg-gray-500 pt-20">
        <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        <p>Contact section content goes here...</p>
      </Element>
    </div>
  );
};

export default App;

