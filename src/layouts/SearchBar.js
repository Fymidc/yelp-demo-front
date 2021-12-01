import  React,{useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MyButton from './MyButton';
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCafes, getOneCafeById } from '../actions/cafeActions';

export default function SearchBar() {


  const [input, setinput] = useState("")
  const [fcafes, setfcafes] = useState([])
  const state = useSelector(state => state.cafe)


    const dispatch = useDispatch();




    useEffect(() => {
        dispatch(getAllCafes());
    }, [])

    const inputHandler=(e)=>{
       setinput(e.target.value)
    }

    console.log("cafe state",state.cafes)

    const handleClick=()=>{
      //console.log("bastım yeni icona")
    }

    const submitHandler=(e)=>{
     // let ninput =  JSON.stringify(input.toUpperCase());
      //let ncafes = state.cafes.map(cafe=>cafe.restaurantName.toUpperCase())
      //console.log("deneme",ncafes[2].includes("VOI CADDE"))

     let deneme=state.cafes.map(c=> 
       c.restaurantName.includes(input)
     )

      console.log("submitted")
      console.log("mapped",deneme)
      console.log('input',input)
      console.log("fcafes",fcafes)
      
    }

   
    return (
        <Stack className="search-stack" spacing={2} >


        <TextField 
            color="warning"
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                submitHandler();
                ev.preventDefault();
              }
            }}
            onChange={(e)=>inputHandler(e)}
            label="Find coffee place"
            InputProps={{
                type: 'search',
                style:{color:'black',backgroundColor:'white' ,borderColor:'black'},
                root:{color:'black'},
                endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon onClick={()=>handleClick()} />
                      </IconButton>
                    </InputAdornment>
                  )
            }}
            
        />


        </Stack>
    );
}