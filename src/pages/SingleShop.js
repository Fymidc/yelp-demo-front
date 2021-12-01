import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, Divider, Link } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorderOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CallIcon from '@mui/icons-material/CallEndOutlined';
import DirectionIcon from '@mui/icons-material/DirectionsOutlined';
import LanguageIcon from '@mui/icons-material/LanguageOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Comment from '../layouts/Comment';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOneCafeById } from '../actions/cafeActions';



function SingleShop() {

    const state = useSelector(state => state.cafe)

    console.log("single den gelen state", state.cafe)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneCafeById());
    }, [])


    return (
        <div>
            <div className="single-shop" >
                <div className="single-shop-imgs">
                    {state.cafe.images ? state.cafe.images.map(i => (
                        <img alt="rst" src={i} />
                    )) : ""}
                    <img alt="rst" src="https://s3-media0.fl.yelpcdn.com/bphoto/_EbhnDZ86_DodMzY5tXVJg/l.jpg" />

                    {/* <img alt="rst" src="https://s3-media0.fl.yelpcdn.com/bphoto/_EbhnDZ86_DodMzY5tXVJg/l.jpg" />
  <img alt="rst" src="https://s3-media0.fl.yelpcdn.com/bphoto/U7O_GUIzkkDmAKN2vBCAgA/l.jpg" />
                    <img alt="rst" src="https://s3-media0.fl.yelpcdn.com/bphoto/pgKjcSxas0KKfgcGNSGHiQ/l.jpg" />
                    <img alt="rst" src="https://s3-media0.fl.yelpcdn.com/bphoto/_EbhnDZ86_DodMzY5tXVJg/l.jpg" /> */}
                </div>
                <div className="single-shop-cart" >
                    <SingleShopBox state={state} />
                </div>

            </div>

            <div >
                <div style={{ marginLeft: "5rem", textAlign: "left" }} >
                    <Button style={{ marginTop: "1rem", marginRight: "1rem" }} color="warning" startIcon={<StarIcon />} variant="outlined">Write a Review</Button>
                    <Button style={{ marginTop: "1rem", marginRight: "1rem" }} color="warning" startIcon={<LikeIcon />} variant="outlined">Like</Button>
                    <Button style={{ marginTop: "1rem", marginRight: "1rem" }} color="warning" startIcon={<BookmarkIcon />} variant="outlined">Save</Button>

                </div>
            </div>

            <div style={{ marginTop: "2rem", margin: "2rem 5rem", justifyContent: "space-between", height: "50rem", display: "flex" }} >
                <div style={{ width: "67%" }}>
                    <Divider variant="middle" />
                    <div style={{ display: "flex", justifyContent: "space-around" }} >


                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "0.5rem", width: "40%", }} >
                            {state.cafe.amenities ? state.cafe.amenities.map(i => (
                                <b style={{ borderBottom: "1px solid black", width: "30%", margin: "0.5rem" }} variant="body1" >
                                    {i}
                                </b>
                            )) : ""}

                        </div>

                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
                            <Typography sx={{ padding: "1rem" }} >
                                Menu
                            </Typography>
                            <Button
                                href={state.cafe.menu}
                                style={{ marginBottom: "1rem", marginRight: "1rem" }} color="warning"
                                startIcon={<LanguageIcon />} variant="outlined">Website Menu</Button>

                        </div>




                    </div>
                    <Divider variant="middle" />


                    <div>
                        <Comment />
                        <Divider />
                        <Comment />
                        <Divider />
                    </div>


                </div>

                <div style={{ position: "sticky", top: 0, zIndex: 2 }} >
                    <Card sx={{ border: "1px solid #ebe4c6", maxWidth: 405, textAlign: "left" }}>
                        <CardContent>
                            <Typography sx={{ padding: "1rem", fontSize: 16, position: "relative" }} color="body1" startIcon={<StarIcon />} gutterBottom>
                                {state.cafe.telno} <CallIcon style={{ right: "0", fontSize: "inherit", position: 'absolute', top: '15px' }} />
                            </Typography>
                            <Divider />
                            <Typography sx={{ padding: "1rem", mb: 1.5, position: "relative" }} color="body1"  >
                                {state.cafe.adress}
                                <DirectionIcon style={{ right: "0", fontSize: "inherit", position: 'absolute', top: '15px' }} />
                            </Typography>
                            <Divider />
                            <Typography sx={{ padding: "1rem", position: "relative" }} variant="body2">
                                <Link href={state.cafe.website} underline="none">
                                    {state.cafe.website}
                                </Link>
                                <LanguageIcon style={{ right: "0", fontSize: "inherit", position: 'absolute', top: '15px' }} />
                            </Typography>
                        </CardContent>

                    </Card>
                </div>

            </div>


        </div>
    )
}

export default SingleShop










function SingleShopBox(props) {
    console.log("props deneme", props.state.cafe)
    return (
        <Paper sx={{ boxShadow: "none", color: "white", backgroundColor: "transparent", p: 2, padding: "2rem", margin: 'auto', marginTop: "11rem", maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} xs container sx={{ fontWeight: "bold", textAlign: "left" }} >
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="h3" component="div">
                                {props.state.cafe.restaurantName}
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }} variant="body1" component="div">
                                10/LİKE
                            </Typography>
                            <Typography sx={{ fontWeight: "bold", cursor: 'pointer' }} variant="body1" gutterBottom>
                                {props.state.cafe.info}
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }} variant="body1" >
                                {props.state.cafe.open === true ? "Open" : "closed"}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
