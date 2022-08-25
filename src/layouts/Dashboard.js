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
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'


function Dashboard() {




    // console.log(path)

    return (
        <div className="dashboard">
            <Router>
                <Routes>
                    <Route exact path="/"
                        element={<LandingPage />}
                    />
                    <Route exact path="/login"
                        element={<LogInPage />}
                    />
                    <Route exact path="/signup"
                        element={<SignUpPage />}
                    />
                    <Route exact path="/shops"
                        element={<ShopsList />}
                    />
                    <Route exact path="/shops/:id"
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
