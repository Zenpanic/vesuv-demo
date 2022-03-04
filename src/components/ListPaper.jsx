import React, { useEffect, useState } from 'react'
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

export default function ListPaper({ label, list }) {
  const [collection, setCollection] = useState(0)

  useEffect(() => {
    if (list?.length) {
      setCollection(list.length)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined">
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
            Note moyenne: 5/5
          </Typography>
          </Stack>
      </Button>
    </ThemeProvider>
  )
}
