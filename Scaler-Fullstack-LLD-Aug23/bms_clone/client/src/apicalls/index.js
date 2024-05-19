import axios from 'axios'

export const axiosInstance = axios.create({
    headers: {
        baseURL : 'http://0.0.0.0:8080',
        credentials: 'include',
        // method: 'post',
        'Content-Type': "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})