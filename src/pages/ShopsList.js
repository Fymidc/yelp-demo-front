import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import FilterSide from '../layouts/FilterSide';
import { Divider } from '@mui/material';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function ShopsList() {


    

    //console.log(window.location.pathname)
    return (
        <div style={{display:"flex" , width:"100%", marginTop: "4.8rem",justifyContent:"space-around"}} >

            <div className="filter-side" style={{width:"25%" }} >
                <FilterSide />
            </div>
            
            <div>
                <Shops/>
                <Shops/>
                <Shops/>
            </div>

            <div className="shoplist-right-container" style={{width:"25%"}} >
                <Grid item>
                    <Typography variant="subtitle1" component="div">
                        10/LİKE
                    </Typography>
                </Grid>
            </div>


        </div>
    )
}


function Shops(){

    const handleCafeName = (e) => {
        console.log("tıkladım", e.currentTarget.textContent)
    }

    return(
        <Paper sx={{ p: 2, padding: "2rem", marginBottom:"2rem",   maxWidth: 600, flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src="https://images.pexels.com/photos/8144690/pexels-photo-8144690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} xs container sx={{ textAlign: "left" }} >
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography onClick={(e) => handleCafeName(e)} sx={{ cursor: 'pointer' }} gutterBottom variant="h5" component="div">
                            Cafe Name
                        </Typography>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2" gutterBottom>
                            Cafe info-(tea etc.)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Smal adress info
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            One comment if present or empty
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" component="div">
                        10/LİKE
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
    )
}


export default ShopsList
