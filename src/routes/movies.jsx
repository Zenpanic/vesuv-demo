import React, { useContext } from 'react'

import Presentation from '../components/Presentation'

import AppContext from '../lib/context'

export default function Movies() {
  const { movies } = useContext(AppContext)

  return <Presentation data={[...movies]} label="Films" />
}
