import { defineStore } from 'pinia'
import axios, {AxiosInstance} from "axios";

const instanceToken: AxiosInstance = axios.create({
    baseURL: 'https://accounts.spotify.com/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})

export const useTokenStore = defineStore('token', {
    actions: {
        async getToken() {
            const clientId = import.meta.env.VITE_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
            const grantType = import.meta.env.VITE_GRANT_TYPE;

            const data = new URLSearchParams();
            data.append('client_id', clientId);
            data.append('client_secret', clientSecret);
            data.append('grant_type', grantType);

            try {
                const response = await instanceToken.post('/token', data);
                localStorage.clear()
                localStorage.setItem('access_token', response.data.access_token)
            } catch (error) {
                console.error('Erro ao obter token:', error);
                throw error;
            }
        }
    },
})