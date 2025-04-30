import React from 'react'
import axios from 'axios'


const api = axios.create({
  baseURL: "http://www.omdbapi.com/"
});

export const getMovie=()=>{
    return api.get("?s=last twilight&apikey=be0a73f4");
}