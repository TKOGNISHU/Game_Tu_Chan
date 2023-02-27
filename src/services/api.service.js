import axios from "axios"

const commonConfig = {
    // headers: {
        // "Content-Type": "application/json",
        // Accept: "application/json",
    // }
}
//multipart/form-data
//application/x-www-form-urlencoded
export default (baseURL) => {
    return axios.create ({
        baseURL,
        ...commonConfig,
    })
}
