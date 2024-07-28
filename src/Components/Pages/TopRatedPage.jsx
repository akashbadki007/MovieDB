import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import '.../App.css'

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPage}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6"> Top Rated Movies </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="block">
            <div className="bg-white rounded-lg box-shadow overflow-hidden img-section">
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-[250px] h-[280px] rounded-lg object-cover"
              />
              <div className="p-4">
                <h2 className="text-[16px] font-semibold">{movie.title}</h2>
                <p className="text-gray-600">Rating: {movie.vote_average}/10</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-1">
        <button
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-2">{currentPage}</span>
        <button
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
