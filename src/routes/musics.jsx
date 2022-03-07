import React, { useContext } from 'react'

import Presentation from '../components/Presentation'

import AppContext from '../lib/context'

export default function Musics() {
  const { musics } = useContext(AppContext)

  return <Presentation data={[...musics]} label="Albums" />
}
