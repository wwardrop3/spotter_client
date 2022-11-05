import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { get_all_exercises } from "../components/exercise/ExerciseManager"
import { get_plan, get_profile_plans } from "../components/plan/PlanManager"


export const Homepage = () => {

    const [exercises, setExercises] = useState()
    const [profilePlans, setProfilePlans] = useState()
    const [planDetail, setPlanDetail] = useState(
        [

            {
                plan_sessions: ""
            }

        ]

    )


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
                        setProfilePlans(response)
                    }
                )
        }, []
    )


    const toggleDetail = (planId) => {



        if (document.getElementById(`plan_detail_${planId}`).style.display == "block") {
            document.getElementById(`plan_detail_${planId}`).style.display = "none"
        } else {
            get_plan(planId).then(

                (response) => {
                    setPlanDetail(response)
                }
            )
            document.getElementById(`plan_detail_${planId}`).style.display = "block"

        }

    }



    return (
        <>
            <Container >
                <div>

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
                        let num = 0
                        return (
                            <>
                                <h1>{plan.profile.bio}</h1>
                                <button onClick={
                                    () => {

                                        toggleDetail(plan.id)


                                    }
                                }>View plan {plan.id}</button>

                                <div style={{ display: "none" }} id={`plan_detail_${plan.id}`}>


                                    {planDetail.plan_sessions?.map(session => {
                                        num++
                                        return (
                                            <>
                                                <h2>{`Plan ${plan.id}: Session ${num}`}</h2>
                                                {session.session_exercises?.map(exercise => {
                                                    return (
                                                        <>
                                                            <ul>
                                                                <li>{exercise.exercise.name}</li>
                                                                <li>{exercise.weight}</li>
                                                            </ul>
                                                        </>
                                                    )
                                                })}

                                                {session.exercises.map(exercise => {
                                                    return <h4>{exercise.reps}</h4>
                                                })}

                                            </>

                                        )
                                    })}


                                </div>


                            </>
                        )
                    }
                    )}










                </div>









            </Container>


        </>
    )
}