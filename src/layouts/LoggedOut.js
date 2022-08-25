import React from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';
import {ListItemIcon, Menu, MenuItem } from '@mui/material'

function LoggedOut(props) {
    return (
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

       
        
        <MenuItem onClick={()=>props.handleLogin()} >
            <ListItemIcon>
                <LoginIcon fontSize="small" />
            </ListItemIcon>
            Log In
        </MenuItem>
        <MenuItem onClick={()=>props.handleSignUp()} >
            <ListItemIcon>
                <PersonAddAltIcon fontSize="small" />
            </ListItemIcon>
            Sign Up
        </MenuItem>
    </Menu>
    )
}

export default LoggedOut
