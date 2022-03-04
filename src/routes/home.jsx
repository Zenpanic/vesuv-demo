import React, { useEffect, useState } from 'react'

import { Stack, Typography } from '@mui/material'

import ListPaper from '../components/ListPaper'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [games, setGames] = useState([])
  const [musics, setMusics] = useState([])

  useEffect(() => {
    const movieList = localStorage.getItem('movies')
    const gameList = localStorage.getItem('games')
    const musicList = localStorage.getItem('musics')

    if (movieList) setMovies([...JSON.parse(movieList)])
    if (gameList) setGames([...JSON.parse(gameList)])
    if (musicList) setMusics([...JSON.parse(musicList)])
  }, [])

  return (    
    <Stack spacing={2} justifyContent="center" alignItems="stretch">
    <Typography gutterBottom sx={{fontSize: 25}}>
      Vos collections
    </Typography>
      <ListPaper label="films" list={movies} />
      <ListPaper label="jeux" list={games} />
      <ListPaper label="albums" list={musics} />
    </Stack>
  )
}
