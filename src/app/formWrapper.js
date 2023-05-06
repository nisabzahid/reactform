import {styled} from '@mui/material'
export  const FormWrapper = styled('div')(({theme}) => ({
    paddingTop: '92px',
    backgroundColor: '#ECEFF1',
    [theme.breakpoints.up('sm')]: {
      marginTop: '48px',
      backgroundColor: '#ECEFF1',
      border: '1px solid #B0BEC5',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      width: '439px',
      padding: '48px',
      position: 'absolute',
      left: 'calc(50% - 439px/2 + 0.5px)',
      top: '80px',
    },
    root: {
      backgroundColor: 'red',
    },
  }))