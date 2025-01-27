import React, { useEffect, useState } from 'react';
import Search from "../Assets/black-search.png";
import User from "../Assets/black-user.png";
import Like from "../Assets/like.png";
import "../Style/style.css";
import { Link } from 'react-router-dom';

function Home() {

  // https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1


  const api = 'c45a857c193f6302f2b5061c3b85e743';
  const [movieData, setMovieData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [upData, setUpData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`)
      .then(res=>res.json())
      .then(json=>{
        // console.log(json.results)
        setMovieData(json.results)
      })

      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`)
      .then(res=>res.json())
      .then(json=>{
        // console.log(json.results)
        setTopData(json.results)
      })

      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`)
      .then(res=>res.json())
      .then(json=>{
        console.log(json.results)
        setUpData(json.results)
      })
  }, [])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${searchQuery}&page=1`)
        .then(res => res.json())
        .then(json => {
          setSearchResults(json.results);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <>
      <div className="search-user d-flex align-items-center justify-content-between">
        <div className="search">
          <input className='rounded ps-3' type="text" name="search" id="search-data" value={searchQuery} onChange={handleSearchChange} placeholder="Search for movies..." />
          <img className='search-icon img-fluid' src={Search} alt="search-icon" />
        </div>
        <Link className='text-decoration-none text-black' to="/sign-up">
        <div className="user d-flex gap-2 align-items-center">
          <h5 className='mb-0 text-capitalize'>sign up</h5>
          <img className='img-fluid' src={User} alt="user-icon" />
        </div>
        </Link>
      </div>

      {searchQuery && searchResults.length > 0 && (
        <div className="movie-cards py-5">
          <h5>Search Results</h5>
          <div className='d-flex flex-wrap gap-1'>
            {
              searchResults.map((movie) => (
                <div className="movie pt-3 col-12" key={movie.id} style={{width: "32.5%"}}>
                  <Link to={`/detail/${movie.id}`}>
                    <img className='img-fluid movie-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-images" />
                  </Link>
                  <img className='img-fluid like-icon' src={Like} alt="like-icon-img" />
                </div>
              ))
            }
          </div>
        </div>
      )}

      {!searchQuery && (
      <>
        <div className="movie-cards pt-5">
          <div className="see-more">
            <h5>movie</h5>
            <Link to="/popular">see more</Link>
          </div>
          <div className='d-flex gap-1'>
            {
              movieData.length > 0 && movieData.slice(0, 4).map((movie) => {
                return (
                  <div className="movie pt-3 col-12" key={movie.id}>
                    <Link to={"/detail/" + movie.id}>
                      <img className='img-fluid movie-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-images" />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="movie-cards pt-5">
          <div className="see-more">
            <h5>top rated</h5>
            <Link to="/top-rated">see more</Link>
          </div>
          <div className='d-flex gap-1'>
            {
              topData.length > 0 && topData.slice(0, 4).map((movie) => {
                return (
                  <div className="movie pt-3 col-12" key={movie.id}>
                    <Link to={"detail/" + movie.id}>
                      <img className='img-fluid movie-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-images" />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="movie-cards py-5">
          <div className="see-more">
            <h5>upcoming</h5>
            <Link to="/upcoming">see more</Link>
          </div>
          <div className='d-flex gap-1'>
            {
              upData.length > 0 && upData.slice(0, 4).map((movie) => {
                return (
                  <div className="movie pt-3 col-12" key={movie.id}>
                    <Link to={"detail/" + movie.id}>
                      <img className='img-fluid movie-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-images" />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
      )}
    </>
  )
}

export default Home
