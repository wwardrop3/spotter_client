import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { get_all_exercises } from "../components/exercise/ExerciseManager"
import { get_profile_plans, get_profile_sessions, get_session_detail, get_session_exercises } from "../components/session/SessionManager"


export const Homepage = () => {

    const [exercises, setExercises] = useState()
    const [profilePlans, setProfilePlans] = useState()
    const [sessionExercises, setSessionExercises] = useState()
    const [sessionDetail, setSessionDetail] = useState(false)


    useEffect(
        () => {
            get_all_exercises()
                .then(
                    (response) => {
                        setExercises(response)
                    }
                )
        }, []
    )


    useEffect(
        () => {
            get_profile_plans()
                .then(
                    (response) => {
                        setProfileSessions(response)
                    }
                )
        }, []
    )





    return (
        <>
            <Container >

                <h1>Home</h1>

                {exercises?.map(exercise => {
                    return (
                        <>
                            <h1>{exercise.name}, {exercise.count}</h1>
                        </>
                    )
                }
                )}


                {profilePlans?.map(plan => {
                    return (
                        <>
                            <h1>{plan.profile.bio}</h1>
                            <button onClick={
                                () => {
                                    setProfilePlans(get_profile_plans(plan.id))
                                }
                            }>Show Session Exercises</button>
                        </>
                    )
                }
                )}

                {sessionDetail ?
                    sessionExercises.map(sessionExercise => {
                        return <h3>{sessionExercise.exercise.name}</h3>
                    }
                    )
                    : ""



                }

            </Container>


        </>
    )
}