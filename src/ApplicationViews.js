import { Route, Routes } from "react-router-dom"
import { Register } from "./components/auth/Register"
import { Homepage } from "./views/Homepage"



export const ApplicationViews = () => {
    return (
        <>

            <h1>NAVBAR</h1>


            <Route exact path="/home">
                <Homepage />
            </Route>

        </>
    )
}