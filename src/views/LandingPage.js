import { useState } from "react"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"


export const LandingPage = ({ setToken }) => {
    const [hideLogin, setHideLogin] = useState(false)
    const [hideRegister, setHideRegister] = useState(true)



    return (
        <>

            <section className="loginPage">

                <div className="spotterLogo">
                    <h1>Spotter Logo</h1>
                </div>

                <div className="loginForm" hidden={hideLogin}>

                    <Login setToken={setToken} />

                    <button onClick={
                        () => {
                            setHideLogin(true)
                            setHideRegister(false)
                        }
                    }>
                        Register
                    </button>

                </div>





                <div className="registerForm" hidden={hideRegister}>
                    <Register />

                    <button onClick={
                        () => {
                            setHideLogin(false)
                            setHideRegister(true)
                        }
                    }>Cancel</button>
                </div>

            </section>

        </>
    )
}