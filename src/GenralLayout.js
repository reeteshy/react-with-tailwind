import React from 'react'
import { Outlet } from 'react-router-dom'

function GenralLayout() {
  return (
   <React.Fragment>
        <Outlet />
   </React.Fragment>
  )
}

export default GenralLayout