import * as React from 'react';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SimpleAccordion from './Accordian';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'



const cards = [1];

const theme = createTheme();

export default function Contactus() {


    return (

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="container user-contactus">
                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                                style={{  color: '#009FAC' }}
                            >
                                Happy to Help!
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                We’re here to help – get in touch with us using the contact details below
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
            
                            </Stack>
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth="lg">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={12} md={12}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                //   pt: '0.25%',
                                                height: '60vh'
                                            }}
                                            // image="./assets/contact1.jpg"
                                            image="https://source.unsplash.com/900x600/?call center"
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                                NatWest Group general enquiries

                                            </Typography>
                                            <Typography style={{ textAlign: 'center' }}>
                                                For general enquiries please try our contact us page or call us on one of the numbers below.
                                            </Typography>
                                            <Typography style={{ textAlign: 'center' }}>
                                                Call Telephone Banking Call us on: 03457 888 444. Overseas: 0345 030 3605.
                                            </Typography>
                                            <Typography style={{ textAlign: 'center' }}>
                                                You can also write to us at 250 Bishopsgate, London, EC2M 4AA.
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </div>
            <div className="container">
                <SimpleAccordion />
            </div>

        </ThemeProvider>
    );
}
