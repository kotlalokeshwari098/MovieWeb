import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import Favourites from './pages/Favourites'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Layout from './components/Layout'


function Header() {
  return (
    <>
      <BrowserRouter>
       

        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/movielist' element={<MovieList />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          </Route>
          

        </Routes>


      </BrowserRouter>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <Header />


)
