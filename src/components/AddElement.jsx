import React, { useState, useContext } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Rating from '@mui/material/Rating'
import { FormControl, Select, InputLabel, MenuItem, Stack } from '@mui/material'

import AppContext from '../lib/context'

export default function AddElement({ open, handleClose }) {
  const { dispatchEvent } = useContext(AppContext)
  const [name, setName] = useState('')
  const [score, setScore] = useState(1)
  const [category, setCategory] = useState('')

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  const addNewElement = async () => {
    if (!name || score < 1 || score > 5 || !category) return
    const payload = { name, score }
    if (category === 'movies') {
      await dispatchEvent('ADD_MOVIE', payload)
    }
    if (category === 'musics') {
      await dispatchEvent('ADD_MUSIC', payload)
    }
    if (category === 'games') {
      await dispatchEvent('ADD_GAME', payload)
    }

    console.log('payload', payload)
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Nouvel élément</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Pour ajouter un élément à vos collections, entrez son titre,
          choisissez sa catégorie et donnez une note sur 5.
        </DialogContentText>
        <Stack spacing={2}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Titre"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Rating
            name="simple-controlled"
            value={score}
            onChange={(event, newValue) => {
              setScore(newValue)
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Catégorie"
              onChange={handleChange}
            >
              <MenuItem value="movies">Films</MenuItem>
              <MenuItem value="games">Jeux</MenuItem>
              <MenuItem value="musics">Albums</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={addNewElement}>Ajouter</Button>
      </DialogActions>
    </Dialog>
  )
}
