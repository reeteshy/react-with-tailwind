import React from 'react'
import { Outlet } from 'react-router-dom'

function ProtectedLayout() {
  return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
  )
}

export default ProtectedLayout