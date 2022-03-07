import React, { useContext, useMemo } from 'react'

import { DataGrid } from '@mui/x-data-grid'
import { Typography } from '@mui/material'

import AppContext from '../lib/context'

export default function Presentation({ data, label }) {
  const { dispatchEvent } = useContext(AppContext)

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    {
      field: 'titre',
      headerName: 'Titre',
      width: 150,
    },
    {
      field: 'score',
      headerName: 'Score',
      width: 110,
    },
  ]

  const rows = useMemo(
    () =>
      data.map((item, index) => ({
        id: index,
        titre: item.name,
        score: `${item.score}/5`,
      })),
    [data]
  )

  return (
    <div style={{ height: 500, width: '100%', marginTop: '2rem' }}>
      <Typography
        gutterBottom
        sx={{ fontSize: 25, marginTop: 3, textAlign: 'center' }}
      >
        {label}
      </Typography>
      <DataGrid
        rows={rows ? rows : []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
