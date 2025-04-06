import '../App.css';
import {NavLink,Link} from 'react-router-dom'

export default function Header(){
    return(
        <div className="nav-container">
            <div className="nav-logo">
            <Link to='/'>
            <img src="https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=" alt="" />
            </Link>
                
            </div>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='./movielist'>MovieList</Link>
                <Link to='./favourites'>Favourites</Link>
                <Link to='./aboutus'>About Us</Link>
                <Link to='./contactus'>Contact Us</Link>
                   
            </div>
            <div className="nav-profile">
                <img src="https://img.freepik.com/premium-vector/een-man-met-een-paars-hemd-en-een-blauw-hemd-met-een-paarse-kraag_969863-208745.jpg?semt=ais_hybrid" alt="" />
            </div>
        </div>
    )
}