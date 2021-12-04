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

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';



export default function Comment() {
  
  const comment = useSelector(state => state.comment)

  console.log("comment",comment.comments)

  return (

<>
{comment.comments.map(comment=>(
      <Card sx={{ maxWidth: "inherit",boxShadow:"none",marginTop:"3rem" }}>
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            U
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={comment.customerName}
        subheader="created at can be added"
      />
      <CardContent>
        <Typography sx={{textAlign:"left"}} variant="body2" color="text.secondary">
        {comment.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
      ))}
    
    </>
  );
}