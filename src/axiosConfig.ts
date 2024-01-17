import axios, {AxiosInstance} from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
})

export default instance;