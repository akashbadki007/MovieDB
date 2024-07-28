import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchMovies } from './api';

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get('q');
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    if (query) {
      searchMovies(query, currentPage).then((response) => setMovies(response.data.results));
    }
  }, [query, currentPage]);

  return (
    <div className="container mx-auto p-4">

      <h1 className="text-2xl font-bold mb-6">Search Results</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
      {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="block">
            <div className="bg-white rounded-lg box-shadow overflow-hidden img-section">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
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
      <div className="flex justify-center my-4">
        <button
          onClick={() => setCurrentPage(page - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-2">{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 mx-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
