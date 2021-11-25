import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

function SingleShop() {
    return (
        <div>
            <div className="single-shop" >
                <div className="single-shop-imgs">
                    <img alt="rst" src="https://s3-media0.fl.yelpcdn.com/bphoto/U7O_GUIzkkDmAKN2vBCAgA/l.jpg" />
                    <img alt="rst" src="https://s3-media0.fl.yelpcdn.com/bphoto/pgKjcSxas0KKfgcGNSGHiQ/l.jpg" />
                    <img alt="rst" src="https://s3-media0.fl.yelpcdn.com/bphoto/_EbhnDZ86_DodMzY5tXVJg/l.jpg" />

                </div>
                <div className="single-shop-cart" >
                    <SingleShopBox />
                </div>

            </div>


        </div>
    )
}

export default SingleShop










function SingleShopBox() {
    return (
        <Paper sx={{ boxShadow:"none", color:"white" ,backgroundColor:"transparent", p: 2, padding: "2rem", margin: 'auto', marginTop: "11rem", maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} xs container sx={{ fontWeight:"bold", textAlign: "left" }} >
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid  item xs>
                            <Typography sx={{ fontWeight:"bold"}} gutterBottom variant="h3" component="div">
                                Cafe Name  My Cafe
                            </Typography>
                            <Typography sx={{ fontWeight:"bold"}}variant="body1" component="div">
                                10/LİKE
                            </Typography>
                            <Typography sx={{fontWeight:"bold", cursor: 'pointer' }} variant="body1" gutterBottom>
                                Cafe info-(tea etc.)
                            </Typography>
                            <Typography sx={{ fontWeight:"bold"}} variant="body1" >
                                isOpen!
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
