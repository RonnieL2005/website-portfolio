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




  <Element name="experience" className="h-screen bg-white pt-20 flex flex-col items-center">
  <div className="w-full max-w-4xl">
    <div className="experience-section mt-10 text-center">
      <div className="job">
        <h3 className="text-xl md:text-2xl font-bold">EXPERIENCE</h3>
        <div className="mt-2 text-md md:text-lg font-semibold text-gray-600">
          <p>2+ years of experience in backend and frontend development.</p>
        </div>
      </div>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold mt-20 text-center">EDUCATION</h2>
    <div className="education-section mt-10 text-center">
      <div className="education">
        <h3 className="text-xl md:text-2xl font-bold">Bachelor of Science, Data Science and Analytics</h3>
        <p className="text-ms md:text-lg text-black font-bold">United States International University</p>
        <p className="text-md md:text-lg font-semibold text-black text-2xl">Graduating in August 2028</p>
        <div className="mt-2 text-md md:text-lg font-semibold text-gray-600">
          <p>Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, AI machine learning</p>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mt-10">Certificate in Software Engineering</h3>
        <p className="text-md md:text-lg font-bold text-black">Moringa School</p>
        <p className="text-md md:text-lg font-semibold text-black">Graduated May 2024</p>
        <div className="mt-2 text-md md:text-lg font-semibold text-gray-600">
          <p>Relevant coursework: Web Development, UI/UX Design, Data Structures, Frontend and Backend Development</p>
        </div>
      </div>
    </div>
  </div>
</Element>




<Element name="projects" className="h-screen bg-white pt-20 flex flex-col items-center">
  <div className="w-full max-w-4xl">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">PROJECTS</h2>
    <div className="project text-center">
      <p className="text-lg mb-6 font-bold">
        "MyDuka" is an inventory management application designed to streamline record-keeping and stock-taking processes for businesses. The application offers a comprehensive solution for generating and visualizing weekly, monthly, and annual reports, empowering business owners to make more informed decisions.
      </p>
      <div className="flex justify-center space-x-4 mb-4 font-semibold ">
        <a href="https://github.com/Daveroy-Mutisya/MyDuka-Backend/tree/dev" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm1 14.93v1.27c0 .59-.05.85-.14 1.11-.09.26-.21.48-.37.65-.16.18-.37.32-.63.42-.25.1-.54.15-.88.15h-1.6c-.33 0-.62-.05-.87-.15a1.7 1.7 0 01-.63-.42c-.16-.17-.29-.39-.37-.65-.08-.26-.13-.52-.14-1.11V14a2.7 2.7 0 01.27-1.25c.12-.27.29-.5.52-.72.23-.22.51-.4.84-.54.33-.14.7-.21 1.1-.21h.94c.39 0 .76.07 1.1.21.33.14.61.32.84.54.22.22.4.45.52.72.12.27.19.57.27 1.25zm-1-10.73c-4.63 0-8.4 3.78-8.4 8.4 0 3.7 2.4 6.83 5.72 7.94.42.08.57-.18.57-.4 0-.2-.01-.92-.01-1.8-2.09.38-2.53-.51-2.68-.98-.09-.23-.48-.98-.82-1.18-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.52 7.52 0 012 0c1.53-1.05 2.2-.82 2.2-.82.45 1.1.17 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.08-1.87 3.76-3.65 3.96.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .22.15.48.57.4a8.4 8.4 0 005.72-7.94c0-4.62-3.77-8.4-8.4-8.4z" clipRule="evenodd" />
          </svg>
          GitHub Repo
        </a>
      </div>
    </div>
  </div>
</Element>



<Element name="contact" className="h-screen bg-white pt-0 flex flex-col justify-center items-center">
  <div className="w-full max-w-4xl">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Contact Me</h2>
    <div className="contact-info text-center">
      <p className="text-lg mb-4 font-bold text-gray-600">For inquiries, you can reach me at:</p>
      <p className="text-xl font-bold mb-2">Email:</p>
      <p className="text-lg mb-6 font-bold text-gray-600"><a href="mailto:ronnielangat2020@gmail.com" className="font-bold text-gray-600 hover:underline">ronnielangat2020@gmail.com</a></p>
      <p className="text-xl font-bold mb-2">Phone:</p>
      <p className="text-lg mb-6"><a href="tel:+254717660856" className="font-bold text-gray-600 hover:underline">(+254) 717660856</a></p>
    </div>
  </div>
</Element>

    </div>
  );
};

export default App;

