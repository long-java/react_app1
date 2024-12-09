import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  const handleClickHomeButton = () => {
    navigate('/home')
  }
  const handleClickLoginButton = () => {
    navigate('/login')
  }
  return (
    <Stack>
      <Typography textAlign='center' variant="h5">404 Not Found</Typography>
      <Link to="/home" style={{ textAlign: 'center', display: 'block' }}>Click to redirect to home</Link>
      <Button onClick={() => handleClickLoginButton()}>Login</Button>
      <Button onClick={() => handleClickHomeButton()}>Home</Button>
    </Stack>
  )
}

export default NotFound