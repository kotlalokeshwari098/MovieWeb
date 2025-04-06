import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import '../App.css'

function MovieDetails() {
    const [detail,setDetails]=useState([])
    const params=useParams();
    console.log(params)
//    let showDetails;

useEffect(()=>{
   async function getDetails(){
        const details=await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=be0a73f4`)
        const response=await details.json();
        
        setDetails(response)       
        console.log(response);
   }
   getDetails()
},[])
    

// getDetails()
  return (
    <div className="details-container">
        <div className="left-details-container">
             <img src={detail.Poster} alt="" />
        </div>
        <div className="right-details-container"> 
              <div className='title'><b>Title:</b>{detail.Title}</div>
            <div className="genre">
              <b>Genre:</b>{detail.Genre}</div>
              <div className="actors"><b>Actors:</b>{detail.Actors}</div>
              <div className="country"><b>Country:</b>{detail.Country}</div>
              <div className="language"><h3>Language:</h3>{detail.Language}</div>
              <div className="language"><h3>Released:</h3>{detail.Released}</div>
              <div className="plot"><h3>Plot:</h3>{detail.Plot}</div>
        </div>
    </div>
  )
}

export default MovieDetails
