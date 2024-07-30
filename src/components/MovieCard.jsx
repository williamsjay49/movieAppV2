export function MovieCard({ movie }) {
  return (
    <div className="movie_card">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      </figure>
      <div className="movie_card__info">
        <p className="movie_card__info--tag">
          <small>RELEASE DATE: {movie.release_date}</small>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
