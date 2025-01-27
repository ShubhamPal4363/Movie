import React, { useState } from 'react';
import Like from "../Assets/black-like.png";
import Top from "../Assets/black-top.png";
import Popular from "../Assets/black-popular.png";
import Upcoming from "../Assets/black-upcoming.png";
import User from "../Assets/black-user.png";
import "../Style/style.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="glass-nav bg-body-tertiary collapse navbar-collapse flex-column align-items-baseline p-4" id="navbarTogglerDemo01">
          <Link className="navbar-brand border-bottom border-black border-3 w-100" to="/">Hidden brand</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex flex-column border-bottom border-3 border-black w-100 py-2">
            <li className="nav-item d-flex gap-2 py-2">
              <img className='img-fluid' src={Popular} alt="popular-icon" />
              <Link className="nav-link p-0" aria-current="page" to="/popular">popular</Link>
            </li>
            <li className="nav-item d-flex gap-2 py-2">
              <img className='img-fluid' src={Top} alt="top-icon" />
              <Link className="nav-link p-0" to="/top-rated">top rated</Link>
            </li>
            <li className="nav-item d-flex gap-2 py-2">
              <img className='img-fluid' src={Upcoming} alt="upcoming-icon" />
              <Link className="nav-link p-0" to="/upcoming">upcoming</Link>
            </li>
            <li className="nav-item d-flex gap-2 py-2">
              <img className='img-fluid' src={Like} alt="favourite-icon" />
              <Link className="nav-link p-0" to="/favourite">favourite</Link>
            </li>
          </ul>
          <a className="w-100 account-link" to="#">Accounts</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex flex-column w-100">
            <Link to="/sign-up" className='text-decoration-none'>
            <li className="nav-item d-flex gap-2 py-2">
              <img className='img-fluid' src={User} alt="user-icon" />
              <a className="nav-link p-0 text-capitalize" aria-current="page" to="#">sign up</a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
