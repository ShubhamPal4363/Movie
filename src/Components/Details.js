import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Star from "../Assets/star.png";
import Favourite from "../Assets/like.png";
import Filled from "../Assets/filled-heart.png";
import "../Style/style.css";

function Details() {
  const { id } = useParams();
  // console.log(id);
  const api = 'c45a857c193f6302f2b5061c3b85e743';
  const [detailData, setdetailData] = useState(null);
  const [castData, setCastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`)
        .then(res => res.json())
        .then(json => {
          // console.log(json);
          setdetailData(json);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching movie details:", err);
          setLoading(false);
        });

      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api}&language=en-US`)
        .then(res => res.json())
        .then(json => {
          // console.log(json.cast);
          setCastData(json.cast);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching movie details:", err);
          setLoading(false);
        });

    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  function changeFav() {
    setFav(!fav);
    // console.log(id);
  }

  return (
    <>
    <div className="backdrop-poster py-5 mt-4" style={{
      backgroundImage: detailData.backdrop_path ? `url(https://image.tmdb.org/t/p/w1280${detailData.backdrop_path})` : 'default-image-url.jpg',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '20px',
    }}>
      <div className="row">
        <div className="col-4">
          <div className="movie-img">
            <img className='img-fluid' src={detailData.poster_path ? `https://image.tmdb.org/t/p/w500${detailData.poster_path}` : 'default-poster-url.jpg'} alt={detailData.title} />
          </div>
        </div>
        <div className="col-8">
          <div className="movie-details">
            <ul>
              <li>{detailData.title}</li>
              <li>{detailData.tagline}</li>
              <li>{detailData.release_date}</li>
              <li>{detailData.genres ? detailData.genres.map(genre => genre.name).join(', ') : 'No genres available'}</li>
            </ul>
            <div className="rating d-flex mb-2">
              <div className="rating-star d-flex gap-2">
                <img className='img-fluid' src={Star} alt="star-img" />
                <h5 className='mb-0'>{(detailData.vote_average).toFixed(1)} / 10</h5>
              </div>
              <div onClick={changeFav} className="favorite ms-5" style={{cursor: "pointer"}}>
                <img className='img-fluid' src={!fav ? Filled : Favourite} alt="favourite-img" />
              </div>
            </div>
            <p>{detailData.overview}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="cast-details py-5">
      <h2>cast</h2>
      <div className="row">
        {
          castData && castData.length > 0 ? (
            castData.map((cast) => (
              <div key={cast.cast_id} className="col-4">
                <div className="cast-card">
                  <img className="img-fluid" 
                    src={cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : 'default-profile-image.jpg'} alt={cast.name} 
                  />
                  <div className='py-3'>
                    <h4>{cast.original_name}</h4>
                    <h5><strong>Character:</strong> {cast.character}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No cast data available</p>
          )
        }
      </div>
    </div>
    </>
  );
}

export default Details;
