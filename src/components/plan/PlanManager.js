import { host } from "../.."

export const get_profile_plans = () => {
    return fetch(`${host}/plans`, {
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


export const get_plan = (planId) => {
    return fetch(`${host}/plans/${planId}`, {
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