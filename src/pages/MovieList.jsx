import React from "react";


export default function MovieList() {
    const [movieName, setMovieName] = React.useState('');
    const [details, setDetails] = React.useState([])
    function gettingMovieName(e) {
            // remove unnecessary spaces
            setMovieName(e.target.value.trim());
        
    }

    async function getMovieDetails() {
        const movieDetails = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=be0a73f4`).then(response => response.json());
        console.log(movieDetails);
        if (!movieDetails.Search) {
            setDetails([]); // Reset to empty array if no movies found
            return;
        }
        const details = movieDetails.Search.map((item) => (
            {
                imgUrl: item.Poster,
                names: item.Title,
                type: item.Type,
                year: item.Year
            }))
        console.log(details);
        setDetails(details);

    }


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
                    ))
                    }
                </div>
            </div>
        </>
    )
}