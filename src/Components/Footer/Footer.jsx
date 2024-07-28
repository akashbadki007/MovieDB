import React from 'react';
import { FaLinkedin,FaGithub,FaYoutube, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        <div className="text-center md:text-left mb-3 md:mb-2">
          <p className="text-lg font-semibold mb-1 lg:mb-0">Akash Anil Badki</p>
          <p className="sm:w-[300px] lg:w-[400px] text-sm">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
        </div>

        <div className="mb-2 sm:mb-8 flex flex-col justify-center items-center text-center md:text-left">

          <div>
            <p href="#" className="text-lg font-semibold md:mb-0 md:mr-4">Social</p>
          </div>

          <div className='flex gap-3 mt-2 justify-center items-center'>

            <a 
             href=" https://www.linkedin.com/in/akash-badki-2a1a82175" 
             target="_blank" rel="noopener noreferrer">
              <FaLinkedin 
              className="w-7 h-7 text-white hover:text-blue-400 transition duration-300" />
            </a>

            <a 
             href="https://github.com/akashbadki007" 
             target="_blank" rel="noopener noreferrer">
              <FaGithub 
               className="w-7 h-7 text-white hover:text-blue-400 transition duration-300" 
               alt="linkedin-logo" 
               />
            </a>

            <a 
             href="https://akashbadki007.github.io/Portfolio/" 
             target="_blank" title='Portfolio' rel="noopener  noreferrer">
              <img 
               className="w-8 h-8 text-white hover:bg-blue-400 transition duration-300 rounded-3xl" 
               src="src\assets\portfolio-logo.jpg" 
               alt="portfolio-logo" 
              />
            </a>

            <a 
             href="https://usabilityhubs.netlify.app/#" 
             target="_blank" title='UsabilityHubClone Project' rel="noopener  noreferrer">
              <img 
               className="w-7 h-7 text-white hover:bg-blue-400 transition duration-300 rounded-xl" 
               src="src\assets\usability_hub_logo.png" 
               alt="UsabilityHub logo" 
              />
            </a>

            <a 
             href="https://boatclone-akash-badki.netlify.app/#" 
             target="_blank" title='BoatClone Project' rel="noopener  noreferrer">
              <img 
               className="w-10 h-[31px] p-[1px] bg-white transition duration-300 rounded-[30px]" 
               src="src\assets\boat-clone-logo.png" 
               alt="UsabilityHub logo" 
              />
            </a>

          </div>

        </div>

      </div>
      
      <div className='w-full h-[3px] line-hori mb-2'></div>
      <div className="mt-2 mb-1 sm:mb-0 sm:mt-3  text-center text-xs">
        © 2024. Made by Akash Anil Badki
      </div>

    </footer>
  );
}

export default Footer;
