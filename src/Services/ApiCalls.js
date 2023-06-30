import axios from 'axios';

export const loginUser = async (body) => {
    let res = await axios.post('http://localhost:3000/login', body)
    return res.data.token
}

export const registerUser = async (body) => {
    let res = await axios.post('http://localhost:3000/register', body)
    return res.data
}