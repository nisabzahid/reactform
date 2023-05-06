"use client"
import React, { useState } from 'react'
import {Grid, TextField, Typography} from '@mui/material'
import {Box} from '@mui/system'
import {styled} from '@mui/material/styles'
import Head from 'next/head'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import SaveIcon from '@mui/icons-material/Save'

import LoadingButton from '@mui/lab/LoadingButton'
import Link from 'next/link'

import MediaCard from './card'

 import {COLORS} from './colors'
 const StyledLoadingButton = styled(LoadingButton, {
  shouldForwardProp: (prop) =>
    prop !== 'useSmallFont' &&
    prop !== 'fullWidth' &&
    prop !== 'longText' &&
    prop !== 'narrow' &&
    prop !== 'marginBottom',
})((props) => ({
  '&.MuiLoadingButton-root': {
    height: props.small ? 32 : 50,
    fontSize: props.useSmallFont ? 16 : 18,
    fontWeight: '500 !important',
    marginBottom: props.marginBottom ? props.marginBottom : 24,
    borderRadius: 6,
    lineHeight: props.small ? '100%' : '1.2rem',
    marginRight: props.fullWidth ? 0 : 10,
    marginLeft: props.fullWidth ? 0 : 10,
    paddingLeft: props.longText || props.narrow ? 16 : 32,
    paddingRight: props.longText || props.narrow ? 16 : 32,
    color: '#000',
    background: COLORS.primary[500],
  },
  '&:hover.MuiLoadingButton-root': {
    background: COLORS.primary[500],
    boxShadow: '0 10px 12px rgba(0,0,0,0.08)',
  },
  '&:disabled': {
    background: `${COLORS.surface[200]} !important`,
    color: COLORS.surface[300],
  },
}))

const user = {
  firstName : "john",
  lastName: "doe",
}


const StyledGrid = styled(Grid)(({theme}) => ({
  '&.MuiGrid-container': {
    width: 510,
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 68,
    paddingBottom: 50,
    [theme.breakpoints.down(769)]: {
      paddingTop: 20,
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.down(350)]: {paddingLeft: 5, paddingRight: 10},
    [theme.breakpoints.up(1450)]: {paddingTop: 64, paddingBottom: 40},
    flex: 1,
  },
}))

const Signup = () => {

  const [showCard, setShowCard]= useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      password: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters.')
        .required('Password is required.'),
      firstName:  Yup.string()
      .min(2, 'First Name must be at least 2 characters.')
      .required('First Name is required.'),
      lastName:  Yup.string()
      .min(2, 'Last Name must be at least 2 characters.')
      .required('Last Name is required.'),
      email: Yup.string().required('Email cannot be blank.').email('Validate email required'),
    }),
    onSubmit: (values) => {

      
      setShowCard(true)
      
    },
  })


  return (
    <Box>

      <Head>
        <title>Watermalonmarket | Signup</title>
      </Head>
      {showCard ? <MediaCard firstName={formik.values.firstName} lastName={formik.values.lastName} email={formik.values.email} setShowCard={setShowCard}/> :(<StyledGrid container justifyContent="center" alignItems="center" direction="column">
        <Grid item style={{marginBottom: 29}}>
          <Typography variant="body2" component="p" style={{fontSize: 21, lineHeight: '26px'}}>
            Hi there,
            <br />
            Welcome to Watermalonmarket!
          </Typography>
        </Grid>
        <Grid item flex={1}>
          <Box
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{
              '& .MuiTextField-root': {mb: '15px', height: 56},
              '& .MuiOutlinedInput-root': {borderRadius: 0},
            }}
            noValidate
            autoComplete="off"
          >
            <TextField defaultValue={formik.values.firstName}  
            style={{marginBottom: 24, width: '100%'}}
            
            type="text"
            value={formik.values.firstName}
            label="First Name"
            name="first name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            
            />
            <TextField defaultValue={formik.values.lastName}  
            style={{marginBottom: 24, width: '100%'}}
            
            type="text"
            value={formik.values.lastName}
            label="Last Name"
            name="Last name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}/>
            <TextField defaultValue={formik.values.email} 
            style={{marginBottom: 24, width: '100%'}}
           
            type="email"
            value={formik.values.email}
            label="Email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}/>
            
            
            
            
            <TextField
              style={{marginBottom: 24, width: '100%'}}
              sx={12}
              type="password"
              value={formik.values.password}
              label="Create a password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <StyledLoadingButton
              type="submit"
              style={{marginBottom: 24, width: '100%'}}
              fullWidth
              // loading={auth.isSaving}
              loadingPosition="start"
              startIcon={<SaveIcon style={{display: 'none'}} />}
            >
              Create Account
            </StyledLoadingButton>
          </Box>
        </Grid>
        <Grid item>
          <Typography>
            Already have an account? <Link disa href="/">Login</Link>
          </Typography>
        </Grid>
      </StyledGrid>)}
    </Box>
  )
}

export default Signup