import { host } from "../.."


export const get_all_exercises = () => {


    return fetch(`${host}/exercises`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}