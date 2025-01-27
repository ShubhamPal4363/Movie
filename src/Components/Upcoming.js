import React, { useEffect, useState } from 'react';
import Like from "../Assets/like.png";
import "../Style/style.css";
import { Link } from 'react-router-dom';

function Upcoming() {

  const api = 'c45a857c193f6302f2b5061c3b85e743';
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`)
      .then(res=>res.json())
      .then(json=>{
        console.log(json.results)
        setMovieData(json.results)
      })
  }, [])

  return (
    <>
      <div className="movie-cards py-5">
        <div className="see-more">
          <h5>upcoming</h5>
          <Link to="/popular">see more</Link>
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-center gap-1'>
          {
            movieData.length > 0 && movieData.map((movie) => {
              return (
                <div className="movie movie-popular pt-3 col-12" key={movie.id} style={{width: "27.5%"}}>
                  <Link to={"/detail/" + movie.id}>
                    <img className='img-fluid movie-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-images" />
                  </Link>
                  <img className='img-fluid like-icon' src={Like} alt="like-icon-img" />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Upcoming
