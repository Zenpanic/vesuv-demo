import * as React from 'react'
import './App.css'

import { Link, Outlet } from 'react-router-dom'

import { Container } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Menubar from './components/Menubar'

export default function App() {
  return (
    <>
      <Menubar />
      <h1>Vos collections</h1>
      <Link to="/movies">Films</Link>
      <Link to="/games">Jeux</Link>
      <Link to="/musics">Albums</Link>
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </>
  )
}
