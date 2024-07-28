
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import '../App.css'
import { FaUser} from 'react-icons/fa';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      setQuery('')
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
   
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center gap-3 md:gap-0">

        <div className="flex items-center lg:gap-[40px]">

          <a href="/" className="text-white text-xl sm:text-2xl font-bold"> MovieDB </a>
          <div className="hidden md:flex sm:space-x-1 lg:space-x-6 ml-10">
            <Link to="/" className="text-gray-300 hover:text-white">Popular</Link>
            <Link to="/top-rated" className="text-gray-300 hover:text-white">Top Rated</Link>
            <Link to="/upcoming" className="text-gray-300 hover:text-white">Upcoming</Link>
          </div>

        </div>

        <div className="flex items-center space-x-4 md:gap-4">
          <form onSubmit={handleSearch}  className="flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-[90px] sm:w-full sm:text-lg px-4 py-1 rounded-l bg-gray-700 text-white focus:outline-none"
            />

            <button
              type="submit"
              className="hidden sm:block ml-1 sm:ml-3 px-3 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600"
            >
              Search
            </button>
          </form>

          <button 
           className="text-gray-300 md:hidden focus:outline-none"
           onClick={toggleMenu} >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
           
          </button>

          <Link to="/signin" className="text-gray-300 hover:text-white hidden md:flex ">
           <FaUser className='w-[30px] h-[25px] mt-1' title='Sign In' />
          </Link>

        </div>
       
   
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-3 text-center">
          <Link to="/" className="text-white" onClick={closeMenu} > Popular </Link>
          <Link to="/top-rated" className="text-white" onClick={closeMenu} > Top Rated </Link>
          <Link to="/upcoming" className="text-white" onClick={closeMenu} > Upcoming </Link>
          <Link to="/signin" className="text-gray-300 hover:text-white flex justify-center items-center">
           <FaUser className='w-[30px] h-[25px] mt-1' title='Sign In' />
          </Link>
        </div>
      )}

    </nav>
   
  );

};

export default Navbar;