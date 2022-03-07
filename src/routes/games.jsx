import React, { useContext } from 'react'

import Presentation from '../components/Presentation'

import AppContext from '../lib/context'

export default function Games() {
  const { games } = useContext(AppContext)

  return <Presentation data={[...games]} label="Jeux" />
}
