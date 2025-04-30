import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import { getMovie } from "../services/GetServices";


export default function MovieList() {
    const [movieName, setMovieName] = React.useState('');
    const [details, setDetails] = React.useState([])
    function gettingMovieName(e) {
            // remove unnecessary spaces
            setMovieName(e.target.value.trim());
        
    }
//  const API = `http://www.omdbapi.com/?s=${movieName}&apikey=be0a73f4`;
   

async function getMovieDetails() {
//    const API = `http://www.omdbapi.com/?s=titanic&apikey=be0a73f4`;
  // const movieDetails = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=be0a73f4`).then(response => response.json());
  // console.log(movieDetails);
  try {
    // const datas = await axios.get(API);
    const datas = await getMovie();
    console.log(datas.data.Search);
    const details =datas.data.Search.map((item) => ({
      imgUrl: item.Poster,
      names: item.Title,
      imdbID: item.imdbID,
      type: item.Type,
      year: item.Year,
    }));
    console.log(details);
    setDetails(details);
    
  } catch (error) {
    console.log('Error message:',error.message);
    console.log('error status:',error.response.status);
    console.log('Error data',error.response.data);
  }
  // if (!movieDetails.Search) {
  //     setDetails([]); // Reset to empty array if no movies found
  // return;
  // }
  
}
    useEffect(()=>{
     getMovieDetails();
    },[])
   


    return (
        <>
       
            <div className="movie-list-container">
                <div className="search-bar">
                    <input type="text" placeholder="Enter the movie name"
                        onChange={gettingMovieName} />
                    <span onClick={getMovieDetails}class="material-symbols-outlined">
                        search
                    </span>
                </div>
                <div className="movie-list">
                    {details.map((movie, index) => (
                        <Link to={movie.imdbID}>
                        <div className="movie-card" key={index}>
                            <div className="movie-image">
                                <img src={movie.imgUrl} alt="" />
                            </div>
                            <div className="movie-name">
                                {movie.names}
                            </div>
                            <div className="type">
                                {movie.type}
                            </div>
                            <div className="movie-description">
                                <p>{movie.year}</p>
                            </div>
                        </div>
                        </Link>
                    ))
                    }
                </div>
            </div>
          
        </>
    )
}