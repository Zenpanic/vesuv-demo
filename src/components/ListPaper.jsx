import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, Stack } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6b1b9a',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
})

export default function ListPaper({ label, list, grade }) {
  const [collection, setCollection] = useState(0)

  const navigate = useNavigate()

  const goToPage = (page) => {
    if (page !== 'films' && page !== 'jeux' && page !== 'albums') return
    let adresse
    if (page === 'films') {
      adresse = 'movies'
    }
    if (page === 'albums') {
      adresse = 'musics'
    }
    if (page === 'jeux') {
      adresse = 'games'
    }
    navigate(`${adresse}`)
  }

  useEffect(() => {
    if (list?.length) {
      setCollection(list.length)
    }
  }, [list])

  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" onClick={() => goToPage(label)}>
        <Stack>
          <Typography
            sx={{ fontSize: 22, fontWeight: 600 }}
            align="center"
            padding={1}
            color="primary"
          >
            {`${collection} ${label}`}
          </Typography>
          <Typography
            sx={{ fontSize: 18, fontWeight: 500 }}
            align="center"
            padding={1}
            color="secondary"
          >
            Note moyenne: {grade}/5
          </Typography>
        </Stack>
      </Button>
    </ThemeProvider>
  )
}
