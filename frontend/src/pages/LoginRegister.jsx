import React from 'react'
import Login from '../components/login/Login'
import Appbar from '../components/appbar'
import Banner from '../components/login/Banner'
import { Grid } from '@mui/material'
import Register from '../components/login/Register'

function LoginRegister() {
  return (
    <div>
        <Appbar/>
        <Banner/>
        <Grid container spacing={2} maxWidth='lg' sx={{margin:"auto",marginTop:'1%'}}>
            <Grid item xs={6} >
            <Login />
            </Grid>
            <Grid item xs={6}>
            <Register/>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default LoginRegister