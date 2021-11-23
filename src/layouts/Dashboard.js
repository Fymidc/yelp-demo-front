import React from 'react'
import LandingPage from '../pages/LandingPage'
import ShopsList from '../pages/ShopsList'
import SingleShop from '../pages/SingleShop'

function Dashboard() {
    return (
        <div className="dashboard">
            
            {/* <LandingPage/> */}

             <ShopsList /> {/* route ekle /shops da görüntüle get all shops */}
            {/* <SingleShop/> route ekle /{shopname or id} getid or getbyname */}
        </div>
    )
}


export default Dashboard

//img alt="bg" src="https://images.pexels.com/photos/3465604/pexels-photo-3465604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
