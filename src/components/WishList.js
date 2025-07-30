import React, { useContext, useState } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import Footer from './Footer';

function WishList() {
  const [search, setSearch] = useState('');
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const genreMap = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };

  const filteredMovies = wishlist.filter((movie) =>
    movie.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '92vh' }}>
      <div className="w-100 px-3 mt-4" style={{ flex: 1 }}>
        <h2 className="mb-4 text-center fw-bold">Your Wishlist</h2>

        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            placeholder="Search movies..."
            className="form-control w-50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="table table-bordered bg-light w-100">
          <thead className="bg-secondary text-white">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredMovies.map((movie) => {
              const genreList = movie.genre_ids
                ? movie.genre_ids.map((id) => genreMap[id]).filter(Boolean).join(', ')
                : movie.genre_names?.join(', ') || 'N/A';

              return (
                <tr key={movie.id}>
                  <td className="d-flex align-items-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      style={{ width: '50px', marginRight: '10px', borderRadius: '5px' }}
                    />
                    {movie.title}
                  </td>
                  <td>{movie.vote_average ?? 'N/A'}</td>
                  <td>{movie.popularity ?? 'N/A'}</td>
                  <td>{genreList}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromWishlist(movie.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

            {filteredMovies.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  <div>
                    <h5 className="text-secondary mb-2">Your wishlist is feeling lonely 😔</h5>
                    <p className="text-muted">Add some movies to brighten it up! 🍿🎬</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default WishList;
