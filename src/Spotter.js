import { useState } from "react"
import { Redirect, Route, Router, Routes } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { LandingPage } from "./views/LandingPage"

// This module determines if the user is logged in
// Sends user to login page if not
// Sends user to Homepage if so

export const Spotter = () => {

    const [token, setTokenState] = useState(localStorage.getItem("token"))


    // this sets the token into the browser if the backend responds valid, then the logic below will check to see if the token is there to continue
    const setToken = (newToken) => {
        localStorage.setItem('token', newToken)
        setTokenState(newToken)
    }


    return (
        <>
            {/* If there is already a token, immediately go to application views which will start with homepage, if not, go to landing page */}
            {
                token
                    ?
                    <Route>


                        <ApplicationViews />


                    </Route>

                    :
                    // Landing page will take user sign in page...register is accessed here
                    <LandingPage setToken={setToken} />
            }




        </>
    )
}