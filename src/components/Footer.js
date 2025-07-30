import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-center py-4"
      style={{
        background: 'linear-gradient(to right, #141e30, #243b55)',
        color: '#f0f0f0',
        fontSize: '0.95rem',
        letterSpacing: '0.5px',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
        marginTop: '0px',
      }}
    >
      <p className="mb-1">
        🎬 <strong>Movie Hub</strong> — Dive into the world of movies!
      </p>
      <p className="mb-0" style={{ fontSize: '0.85rem', color: '#ccc' }}>
        © 2025 Movie Hub | Built with ❤️ using React & TMDB API
      </p>
    </footer>
  );
};

export default Footer;
