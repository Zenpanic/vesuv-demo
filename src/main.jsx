import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './routes/home'
import Movies from './routes/movies'
import Games from './routes/games'
import Musics from './routes/musics'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="games" element={<Games />} />
        <Route path="musics" element={<Musics />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)
