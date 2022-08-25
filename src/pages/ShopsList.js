import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import FilterSide from '../layouts/FilterSide';
import { Divider } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {  getOneCafeById } from '../actions/cafeActions';

import { useNavigate } from 'react-router-dom';
import NavWithSearch from '../layouts/NavWithSearch';
import { getAllComments } from '../actions/commentActions';
import { getAllLikes } from '../actions/likeActions';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function ShopsList() {

    const state = useSelector(state => state.cafe)
   


   

   const length = state.cafes.length

    useEffect(() => {

        if (length=== 1) {

        } else if (length=== 0) {
            
            
        }
    }, [length=== 0])

    return (
        <div>
            <NavWithSearch />
            <div style={{ display: "flex", width: "100%", marginTop: "4.8rem", justifyContent: "space-around" }} >

                <div className="filter-side" style={{ width: "20%" }} >
                    <FilterSide />
                </div>

                <div style={{ width: "50%" }} >


                    {state.cafes.length > 0 ? state.cafes.map(cafe => (
                        <Shops key={cafe.id} id={cafe.id} cafe={cafe} />

                    )) : (<div> No result found </div>)}

                </div>

                <div className="shoplist-right-container" style={{ width: "20%" }} >
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            Have you had our app on your phone!
                            Try it for best experience!
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontWeight: "bold", marginTop: "1rem", display: "flex", justifyContent: "center", textAlign: "center" }} >
                            Google Play
                            <ShopIcon color="warning" sx={{ marginLeft: "1rem" }} />
                        </Typography>
                    </Grid>
                </div>


            </div>
        </div>
    )
}


function Shops(props) {

   

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCafeById = (props) => {
        dispatch(getOneCafeById(props));
        dispatch(getAllComments(props));
        dispatch(getAllLikes(props));
        navigate("/shops/" + props)
        console.log("tıkladım", props)
    }

   


    return (
        <Paper sx={{ overflow: "hidden", p: 2, padding: "1rem", marginBottom: "2rem", Width: 900, flexGrow: 1, height: "210px" }}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 208, height: 208 }}>
                        <Img alt="complex" src={props.cafe.images ? props.cafe.images[0] : ""} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12}  container sx={{ textAlign: "left" }} >
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography onClick={() => handleCafeById(props.id)} sx={{ cursor: 'pointer' }} gutterBottom variant="h5" component="div">
                                {props.cafe.restaurantName}
                            </Typography>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2" gutterBottom>
                                {props.cafe.info}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.cafe.adress}
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
//https://images.pexels.com/photos/8144690/pexels-photo-8144690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

export default ShopsList
