import React from 'react'
import LandingPage from '../pages/LandingPage'
import ShopsList from '../pages/ShopsList'
import SingleShop from '../pages/SingleShop'
import Nav from './Nav'
import NavWithSearch from './NavWithSearch'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Dashboard() {


    const path = window.location.pathname;

    console.log(path)

    return (
        <div className="dashboard">
            {path === "/" ? <Nav /> : <NavWithSearch />}

            <Router>
                <Routes>
                    <Route exact path="/"
                        element={<LandingPage />}
                    />
                    <Route exact path="/shops"
                        element={<ShopsList />}
                    />
                    <Route exact path="/shops/:name"
                        element={<SingleShop />}
                    />

                </Routes>
            </Router>
            {/* <LandingPage/> */}

            {/* <ShopsList />  route ekle /shops da görüntüle get all shops */}
            {/*<SingleShop /> route ekle /{shopname or id} getid or getbyname */}
        </div>
    )
}


export default Dashboard

//img alt="bg" src="https://images.pexels.com/photos/3465604/pexels-photo-3465604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
