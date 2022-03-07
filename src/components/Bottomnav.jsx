import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'

import GamesIcon from '@mui/icons-material/Games'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import HomeIcon from '@mui/icons-material/Home'

export default function Bottomnav() {
  const navigate = useNavigate()
  const goToPage = (adresse) => {
    navigate(`${adresse}`)
  }

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        onChange={(event, value) => {
          goToPage(value)
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} value="/" />
        <BottomNavigationAction
          label="Films"
          icon={<LocalMoviesIcon />}
          value="/movies"
        />
        <BottomNavigationAction
          label="Jeux"
          icon={<GamesIcon />}
          value="/games"
        />
        <BottomNavigationAction
          label="Albums"
          icon={<LibraryMusicIcon />}
          value="/musics"
        />
      </BottomNavigation>
    </Paper>
  )
}
