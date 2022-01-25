import axios from 'axios'

export const ROOT_URL = `http://localhost:3000/`

const api = axios.create({
    baseURL: ROOT_URL
})

export const getData = async (endPoint) => {
    try {
        const { data } = await api.get(endPoint)
        return data
    } catch (error) {
        console.log(error?.response?.data?.message)
    }
}
