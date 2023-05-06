import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import userimage from '../../public/userimage.jpg'

export default function MediaCard({firstName, lastName, email, setShowCard, showCard}) {
  return (
    <div style={{margin: '5%'}}>
    <Card sx={{ maxWidth: 800 }}>
      <CardMedia
        component="img"
        height="140"
        image={userimage}
        alt="user Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Email : {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>setShowCard(false)} size="small">Go To Signup Page</Button>
      </CardActions>
    </Card>
    </div>
  )
}