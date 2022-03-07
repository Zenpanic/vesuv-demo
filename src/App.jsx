import React, { useState, useEffect } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'

import { Container } from '@mui/material'

import AppContext from './lib/context'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Menubar from './components/Menubar'
import Bottomnav from './components/Bottomnav'

export default function App() {
  const [movies, setMovies] = useState([])
  const [games, setGames] = useState([])
  const [musics, setMusics] = useState([])

  const [query, setQuery] = useState('')

  const changeQuery = value => {
    setQuery(value)
  }

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      setMovies([...JSON.parse(localStorage.getItem('movies'))])
    }
    if (localStorage.getItem('games')) {
      setGames([...JSON.parse(localStorage.getItem('games'))])
    }
    if (localStorage.getItem('musics')) {
      setMusics([...JSON.parse(localStorage.getItem('musics'))])
    }
  }, [])

  const updateCollections = (category) => {
    if (category === 'movies') {
      localStorage.setItem('movies', JSON.stringify([...movies]))
    }
    if (category === 'games') {
      localStorage.setItem('games', JSON.stringify([...games]))
    }
    if (category === 'musics') {
      localStorage.setItem('musics', JSON.stringify([...musics]))
    }
  }

  useEffect(() => {
    updateCollections('movies')
  }, [movies])

  useEffect(() => {
    updateCollections('musics')
  }, [musics])

  useEffect(() => {
    updateCollections('games')
  }, [games])

  const dispatchEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_MOVIE':
        setMovies([...movies, payload])
        return
      case 'ADD_GAME':
        setGames([...games, payload])
        return
      case 'ADD_MUSIC':
        setMusics([...musics, payload])
        break
      default:
    }
  }

  return (
    <AppContext.Provider value={{ movies, games, musics, dispatchEvent, query, changeQuery }}>
      <Menubar />
      <Container maxWidth="sm">
        <Outlet />
      </Container>
      <Bottomnav />
    </AppContext.Provider>
  )
}
