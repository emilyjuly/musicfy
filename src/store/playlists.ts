import { defineStore } from 'pinia'
import { useTokenStore } from "./token.ts";
import axios, {AxiosInstance} from 'axios'
interface Playlist {
    collaborative: boolean;
    description: string;
    external_urls: { spotify: string };
    followers: { href: null; total: number };
    href: string;
    id: string;
    images: { url: string }[]; // Pode haver mais propriedades em 'images'
    name: string;
    owner: {
        display_name: string;
        external_urls: { [key: string]: string };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    primary_color: string;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        items: any[]; // Pode haver uma interface específica para 'items'
        limit: number;
        next: string | null;
        offset: number;
        // ... outras propriedades ...
    };
    type: string;
    uri: string;
}

export const usePlaylistsStore = defineStore('playlists', {
    state: () => ({ playlists: [] as Playlist[] | string[] }),
    actions: {
        async getPlaylists(): Promise<void>{
            const tokenStore = useTokenStore();
            const playlistsId: string[] = ['37i9dQZF1DX6aTaZa0K6VA', '37i9dQZF1EQoqCH7BwIYb7', '37i9dQZF1EQncLwOalG3K7', '37i9dQZF1EQnqst5TRi17F', '37i9dQZF1EVJHK7Q1TBABQ', '37i9dQZF1EVHGWrwldPRtj', '37i9dQZEVXbMDoHDwVN2tF', '37i9dQZF1EIUBOZW3khPcg', '37i9dQZF1DXbYM3nMM0oPk']
            this.playlists = [];
            const token = await tokenStore.getToken()
            const api: AxiosInstance = axios.create({
                baseURL: 'https://api.spotify.com/v1',
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                }
            })

            for (let i = 0; i < playlistsId.length; i++) {
                try {
                    const response = await api.get(`/playlists/${playlistsId[i]}`)
                    this.playlists.push(response.data)
                } catch (error) {
                    if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
                        console.log('O token é inválido, ', error)
                        await tokenStore.getToken()
                        await this.getPlaylists()
                    } else if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
                        console.log('O ID da playlists é inválido, ', error)
                        playlistsId.splice(i, 1)
                    }
                    console.log('Não foi possível obter essa playlist');
                }
            }
        },
    },
})