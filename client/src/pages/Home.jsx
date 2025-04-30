import React, { useEffect } from 'react'
import {movieCategories} from '../list'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'



function Home() {
   const [details,setDetails]=useState([])
  let ids= movieCategories.map((item)=>(item.ids.map((id)=>((id)))))
// console.log(ids)
const [values,setValues]=useState();

  useEffect(()=>{
       
        let arrayMovies=ids.map((item)=>(
          item.map((stu)=>(
            // console.log(stu)
            fetch(`http://www.omdbapi.com/?i=${stu}&apikey=be0a73f4`)
                         .then(resp=>resp.json())
                         .then(data=>setDetails(prev =>
                         [...prev,data]
  ))
            ))            
        ))
           
  },[])
  // console.log(details)
let chunks=[]
  for(let i=0;i<details.length;i+=5){
      let array=details.slice(i,i+5)
      // console.log(array)
      chunks.push(array);
  }
  console.log(chunks)

 let det= chunks.map((category)=>(
       <MovieCard movie={category} />
  ))

  return (
    <div className='popular'>
      <h2>Popular</h2>
      <div className="popular-movies">
         {det}
      </div>
    </div>
  )
}

export default Home
