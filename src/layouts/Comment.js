import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListItemIcon from '@mui/material/ListItemIcon';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';
import DropdownMenu from './DropdownMenu';



export default function Comment() {

  const comment = useSelector(state => state.comment)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [edited, setedited] = React.useState("")
  const open = Boolean(anchorEl);
  const handleClick = (event,id) => {
    setAnchorEl(event.currentTarget);
    //console.log("event",event)
    setedited(id)
    
   
  };

  console.log("state: ",edited)

  console.log("deneme",edited.customerId !== 1)

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (

    <>
      {comment.comments.map(data => (
        
        <Card key={data.id} sx={{ maxWidth: "inherit", boxShadow: "none", marginTop: "3rem" }}>

          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                U
              </Avatar>
            }
            action={
              <IconButton onClick={(e)=>handleClick(e,data)}  aria-label="settings">

                <MoreVertIcon />
              </IconButton>
            }
            title={data.customerName}
            subheader="created at can be added"
          />


          <CardContent>
            <Typography sx={{ textAlign: "left" }} variant="body2" color="text.secondary">
              {data.text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>

          {edited.customerId != localStorage.getItem("currenUser")
          ? "" : <DropdownMenu open={open} data={edited} handleClose={handleClose} anchorEl={anchorEl} /> }
          

        </Card>
      ))}





    </>
  );
}

