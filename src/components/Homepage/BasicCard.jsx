import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './BasicCard.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }} className='ho'>
      <CardContent>
       
        <Typography variant="h5" component="div" style={{color:"#009FAC", fontWeight:'bold' }}>
         <h1> NatWest {bull}One{bull}</h1>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
          Easy {bull} Fast {bull} Secure {bull} Rewarding
        </Typography>
        <Typography variant="body2">
         <h5> Try new NatWest One platform. It is Super Easy, Fast, Reliable and Rewarding as well.</h5>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='/Services' style={{color:"#009FAC",fontWeight:'bold'}}>Know More</Button> 
      </CardActions>
    </Card>
  );
}
