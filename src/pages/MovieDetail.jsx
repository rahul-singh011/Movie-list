import { useParams } from "react-router-dom"; // To fetch the movie ID from the URL
import { useState, useEffect } from "react";
import { getMovieDetails } from "../services/api";
import "../css/MovieDetail.css";


function MovieDetail() {
  const { id } = useParams(); // Extracting movie ID from the URL params
  const [movie, setMovie] = useState(null); // State to store the movie data
  const [error, setError] = useState(null); // State to handle any errors

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id); // Fetch movie details using the ID
        setMovie(data); // Set the fetched movie details in state
      } catch (err) {
        setError("Failed to load movie details"); // Handle errors
      }
    };
    fetchMovieDetails();
  }, [id]); // Re-run the effect when the movie ID changes

  if (error) return <div>{error}</div>; // Display error message if there's an error

  if (!movie) return <div>Loading...</div>; // Display loading message while the movie details are being fetched

  return (
    <div>
      <h2>{movie.title}</h2> {/* Display the movie title */}
      <p>{movie.overview}</p> {/* Display the movie overview */}
      <p>Rating: {movie.vote_average}</p> {/* Display the movie rating */}
      <p>Release Date: {movie.release_date}</p> {/* Display the release date */}
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
      /> {/* Display movie poster */}
      {/* Add any additional movie details here */}
    </div>
  );
}

export default MovieDetail;
