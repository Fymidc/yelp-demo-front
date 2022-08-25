import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import UpdateModal from './UpdateModal'

import { Menu, MenuItem } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../actions/commentActions';

function DropdownMenu(props) {
  const [nopen, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  const dispatch = useDispatch()

  const handleDelete=()=>{
    const id=props.data.id
    dispatch(deleteComment(id))
    
  }

 
  


  return (
    <>
      <UpdateModal handleClose={handleClose} comment={props.data} open={nopen} />

      <Menu
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
        onClick={props.handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >


        <MenuItem onClick={()=>handleOpen()} >
          <ListItemIcon >
            <EditIcon  fontSize="small" />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={()=>handleDelete()} >
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>

    </>

  )
}

export default DropdownMenu
