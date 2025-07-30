import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import Footer from './Footer';

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const API_KEY = 'aed304ba314670c90c89fb52775926ca';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${currentPage}`
        );
        const data = await res.json();

        const validMovies = data.results.filter((movie) => movie.poster_path);
        setMovies(validMovies);
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const renderMovieGrid = () => {
    const columnsPerRow = 8;
    const rows = [];

    for (let i = 0; i < movies.length; i += columnsPerRow) {
      const rowItems = movies.slice(i, i + columnsPerRow);

      // If it's the last row and has less than 8 items
      if (i + columnsPerRow >= movies.length && rowItems.length < columnsPerRow) {
        const grid = [];

        let movieIndex = 0;
        for (let j = 0; j < columnsPerRow; j++) {
          if (j % 2 === 0 && movieIndex < rowItems.length) {
            const movie = rowItems[movieIndex];
            grid.push(
              <MovieCard
                key={movie.id}
                id={movie.id} // ✅ Important for wishlist
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
              />
            );
            movieIndex++;
          } else {
            grid.push(<div key={`gap-${i}-${j}`} />);
          }
        }

        rows.push(grid);
      } else {
        // Full row
        rows.push(
          rowItems.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
              vote_average={movie.vote_average}
              popularity={movie.popularity}
              genre_ids={movie.genre_ids}
            />

          ))
        );
      }
    }

    return rows.flat();
  };

  return (
    <div className="w-100 px-0 mt-4">
      <h2 className="text-center mb-4">Trending Movies</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '16px',
        }}
      >
        {renderMovieGrid()}
      </div>

      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        totalPages={totalPages}
      />
      <Footer/>
    </div>
  );
}

export default TrendingMovies;
