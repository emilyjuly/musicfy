import axios, {AxiosInstance} from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer BQAQG535r_K_Kob9cRF1FjwhUGnnKTT38t8ZGtBfTdZDhoBOsyd-Gn_YOEFZpYuxNqkdfwt-G5t9IsrLe7BFmGJ0dbUrXOkacbWx9_Qq-ep6KvHo1fs'
    }
})

export default instance;