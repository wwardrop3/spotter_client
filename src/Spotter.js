import { useState } from "react"
import { Redirect, Route, Router, Routes } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { LandingPage } from "./views/LandingPage"


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

                    <LandingPage setToken={setToken} />
            }




        </>
    )
}