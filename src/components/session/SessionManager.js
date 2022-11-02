import { host } from "../.."


export const saveNewWorkout = (workoutObject) => {

    return fetch(`${host}/save_new_workout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(workoutObject)

    }
    ).then(
        (res) => res.json()
    )
}

export const get_profile_plans = () => {
    return fetch(`${host}/sessions`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }

    }
    ).then(
        (res) => res.json()
    )
}

export const get_profile = (profileId) => {
    return fetch(`${host}/profile/${profileId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }

    }
    ).then(
        (res) => res.json()
    )
}