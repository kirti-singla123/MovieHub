import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* MovieHub */}
      <Link className="navbar-brand fw-bold fs-4 text-warning" to="/">
        🎬 MovieHub
      </Link>

      {/* WishList next to MovieHub with same style */}
      <ul className="navbar-nav d-flex flex-row gap-3">
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-4 text-warning" to="/WishList">
            WishList
          </Link>
        </li>
      </ul>
    </nav>
  );
}
