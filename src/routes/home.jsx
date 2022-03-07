import React, { useContext, useState, useMemo } from 'react'

import HelpIcon from '@mui/icons-material/Help'

import {
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material'

import AppContext from '../lib/context'

import ListPaper from '../components/ListPaper'
import { MusicNoteOutlined } from '@mui/icons-material'

export default function Home() {
  const { movies, games, musics } = useContext(AppContext)

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const averageMovies = useMemo(() => {
    if (movies.length < 1) return 1
    let grade = 0
    let item
    for (item of movies) {
      grade += item.score
    }
    return Math.round(grade / movies.length)
  }, [movies])

  const averageGames = useMemo(() => {
    if (games.length < 1) return 1
    let grade = 0
    let item
    for (item of games) {
      grade += item.score
    }
    return Math.round(grade / games.length)
  }, [games])

  const averageMusics = useMemo(() => {
    if (musics.length < 1) return 1
    let grade = 0
    let item
    for (item of musics) {
      grade += item.score
    }
    return Math.round(grade / musics.length)
  }, [musics])

  return (
    <Stack sx={{ height: 600 }}>
      <Stack spacing={2} justifyContent="center" alignItems="stretch">
        <Typography
          gutterBottom
          sx={{ fontSize: 25, marginTop: 3, textAlign: 'center' }}
        >
          Vos collections
        </Typography>
        <ListPaper label="films" list={movies} grade={averageMovies} />
        <ListPaper label="jeux" list={games} grade={averageGames} />
        <ListPaper label="albums" list={musics} grade={averageMusics} />
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Comment utiliser cette application ?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Pour ajouter un élément, cliquez sur l'icône "+" en haut à gauche
              de votre écran. Pour accéder à vos collections, utilisez les
              raccourcis dans la barre de navigation au bas de l'écran.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Compris !
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
      <Stack
        alignItems="center"
        sx={{ position: 'fixed', bottom: 70, right: 20 }}
      >
        <Button
          variant="contained"
          onClick={handleClickOpen}
          startIcon={<HelpIcon />}
          sx={{ mt: 5 }}
        >
          Aide
        </Button>
      </Stack>
    </Stack>
  )
}
