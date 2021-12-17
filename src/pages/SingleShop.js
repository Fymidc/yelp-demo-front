import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, Divider, Link } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorderOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CallIcon from '@mui/icons-material/CallEndOutlined';
import DirectionIcon from '@mui/icons-material/DirectionsOutlined';
import LanguageIcon from '@mui/icons-material/LanguageOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Comment from '../layouts/Comment';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOneCafeById } from '../actions/cafeActions';
import Nav from '../layouts/Nav';
import CommentModal from '../layouts/CommentModal';
import { createLike, deleteLike, getAllLikes, getCustomerLikes } from '../actions/likeActions';



function SingleShop() {

    

    const state = useSelector(state => state.cafe)
    const lstate = useSelector(state => state.like)
    const ustate = useSelector(state => state.user)

    const dispatch = useDispatch();

    useEffect(() => {
        const customerid = ustate.user.id
        const restaurantid = state.cafe.id
        dispatch(getCustomerLikes(customerid,restaurantid))
        dispatch(getOneCafeById());
        
    }, [lstate.clikes.length,lstate.likes])


    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLike=()=>{
      const [id] = lstate.clikes.slice(-1);
        const customerid = localStorage.getItem("currenUser")
        const restaurantid = state.cafe.id
   

      if(lstate.clikes.length===0){
        dispatch(createLike(customerid,restaurantid))

      }else{
        dispatch(deleteLike(id.id))
      }

      
  }

  //like post yapıldı sadece--
  //post requestlere authorize token ekle ve post isteği yap
  
    

    return (
        <div>
            <div style={{marginTop:"1rem"}}>
              <Nav/>  
            </div>
            
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
                    <Button style={{ marginTop: "1rem", marginRight: "1rem" }} color="warning" startIcon={<StarIcon />} onClick={()=>handleOpen()} variant="outlined">Write a Review</Button>
                    <Button style={{ marginTop: "1rem", marginRight: "1rem" }} color="warning" startIcon={<LikeIcon />} 
                    variant={lstate.clikes.find(x=>x.customerId ===ustate.user.id) ? "contained":"outlined"}
                    onClick={()=>handleLike()}
                    >Like</Button>

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
                        <CommentModal handleClose={handleClose} open={open} />
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

    const cstate = useSelector(state => state.cafe)
    const state = useSelector(state => state.like)
    console.log(state.likes.length)


    const dispatch = useDispatch();

    useEffect(() => {
        const id = cstate.cafe.id
        dispatch(getAllLikes(id))
    }, [state.likes.length])

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
                                {state.likes.length} <FavoriteBorderIcon style={{position:"absolute",marginLeft:"0.5rem",color:"red"}} />
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
