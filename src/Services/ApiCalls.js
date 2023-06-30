import axios from 'axios';

export const loginUser = async (body) => {
    let res = await axios.post('http://localhost:3000/login', body)
    return res.data.token
}

export const registerUser = async (body) => {
    let res = await axios.post('http://localhost:3000/register', body)
    return res.data
}

export const fetchUserData = async (token) => {
    try {
    const response = await axios.get('http://localhost:3000/profile', {
    headers: {
        Authorization: `Bearer ${token}`
    }
    });
    return response.data;
    } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    }
};
