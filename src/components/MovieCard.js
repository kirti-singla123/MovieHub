import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

function MovieCard({ id, title, image, vote_average, popularity, genre_ids }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const isWishlisted = wishlist.some((item) => item.id === id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id,
        title,
        poster_path: image,       
        vote_average,
        popularity,
        genre_ids,                
      });
    }
  };

  return (
    <div
      className="card shadow"
      style={{
        width: '100%',
        height: '280px',
        borderRadius: '8px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.4)';
        e.currentTarget.style.cursor = 'pointer';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0, 0, 0, 0.15)';
      }}
    >
      {/* ❤️/❌ Toggle Wishlist Button */}
      <button
        className="btn btn-sm"
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          fontSize: '20px',
          background: 'transparent',
          border: 'none',
          color: 'white',
          textShadow: '0 0 5px black',
        }}
        onClick={toggleWishlist}
        title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      >
        {isWishlisted ? '❌' : '❤️'}
      </button>

      {/* Movie Title Overlay */}
      <div
        className="text-white text-center"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'rgba(51, 51, 51, 0.7)',
          padding: '8px',
          fontSize: '14px',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default MovieCard;
