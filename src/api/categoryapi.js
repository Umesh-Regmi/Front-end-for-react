import { API } from "../config"


export const getAllCategories = () => {
    return fetch(`${API}/category/getallcategories`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}