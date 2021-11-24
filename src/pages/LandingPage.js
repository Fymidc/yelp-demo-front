import React from 'react'
import SearchBar from '../layouts/SearchBar'
import MyButton from '../layouts/MyButton'

function LandingPage() {

    const padding="3rem"

    return (
        <div className="landing-page" >
            <div className="dashboardimg" ></div>
            <LandingHeader/>

            <div className="search-bar" >
                 <SearchBar  />

                <MyButton padding={padding} />
            </div>
           

        </div>
    )
}


function LandingHeader(){
    return(
        <div className="landing-header-texts" >
            <h1>My <b>Coffee</b> Place</h1>

            <div>
                <h3>Hi Fatih</h3>
                <h3>Have you had coffee?</h3> 
            </div>
            
        </div>
    )
}

export default LandingPage
