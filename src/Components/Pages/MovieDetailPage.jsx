import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
      const BASE_URL = 'https://api.themoviedb.org/3';

      try {
        const movieResponse = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
        setMovie(movieResponse.data);

        const castResponse = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[230px] h-[370px] md:w-[330px] mb-3 md:mb-0 md:h-[470px]  rounded img-section box-shadow" />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="mt-2">{movie.overview}</p>
          <p className="mt-2"><strong>Release Date:</strong> {movie.release_date}</p>
          <p className="mt-2"><strong>Rating:</strong> {movie.vote_average}</p>
          <h2 className="text-2xl font-bold mt-8">Cast</h2>
          <div className="flex flex-wrap">
            {cast.map((actor) => (
              <div key={actor.cast_id} className="w-1/2 md:w-1/4 p-2">
                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} className="w-[290px] h-[240px] rounded-[8px]" />
                <p className="text-center mt-2">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
