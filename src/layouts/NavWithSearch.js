import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SearchBar from './SearchBar';
import MyButton from './MyButton';
import Loggedin from './Loggedin';
import LoggedOut from './LoggedOut';
import { useNavigate } from 'react-router-dom';
//import Logout from '@material-ui/icons/Logout';


export default function NavWithSearch() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    
    const handleLogout=()=>{
        
        localStorage.removeItem("tokenKey")
        localStorage.removeItem("currenUser")
        localStorage.removeItem("userName")
        navigate(0);
    }

    const handleSignUp=()=>{
        navigate("/signup")
    }

    const handleLogin=()=>{
        navigate("/login")
    }


    return (
        <div className="navwithsearch" >
            <div className="nav-search-container">

                <div className= "brand-logo" >
                    <h1 style={{}} >MyCoffee</h1>
                </div>

                <div className="nav-search-button" >
                    <SearchNav />
                    {/* <ButtonNav /> */}
                </div>

                <div className="navwithsearch-user-container" >
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ minWidth: 100, cursor: "pointer" }}>Contact</Typography>
                        <Typography sx={{ minWidth: 100, cursor: "pointer" }}>Profile</Typography>
                        <Tooltip title="Account settings">
                            <IconButton className="user-icon-other" onClick={handleClick} size="small" >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>

                    {localStorage.getItem("currenUser") !=null ? <Loggedin anchorEl={anchorEl} handleClose={handleClose} open={open} handleLogout={handleLogout} /> :
            <LoggedOut  anchorEl={anchorEl} handleClose={handleClose} open={open} handleSignUp={handleSignUp} handleLogin={handleLogin} />    
             }

                </div>
            </div>
        </div>
    );
}



function SearchNav() {
    return (
        <div className="searchnav" >
           <SearchBar  /> 
        </div>
        
    )

}

