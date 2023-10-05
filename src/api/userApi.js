import { API_USER } from "../config"

export const register = (username,  email, password) => {
    let user = {username, email, password}
    return fetch(`${API_USER}/register`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        // body: JSON.stringify({username, email, password})
        body: JSON.stringify(user)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}