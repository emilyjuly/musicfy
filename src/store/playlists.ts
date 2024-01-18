import { defineStore } from 'pinia'
import instance from "../axiosConfig.ts";
import { useTokenStore } from "./token.ts";
import axios from 'axios'
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
    state: () => ({ playlists: [] as Playlist[], startIndex: 0 }),
    actions: {
        async getPlaylists(startIndex: number): Promise<void>{
            const tokenStore = useTokenStore();
            const playlistsId: string[] = ['37i9dQZF1DX6aTaZa0K6VA', '37i9dQZF1EQoqCH7BwIYb7', '37i9dQZF1EQncLwOalG3K7', '37i9dQZF1EQnqst5TRi17F', '37i9dQZF1EVJHK7Q1TBABQ', '37i9dQZF1EVHGWrwldPRtj']
            this.playlists = [];

            try {
                for (let i = startIndex; i < startIndex + 3; i++) {
                    const response = await instance.get(`/playlists/${playlistsId[i]}`)
                    this.playlists.push(response.data)
                    console.log(response.data)
                }
            } catch (error) {
                if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
                    console.log('O token é inválido, ', error)
                    await tokenStore.getToken();
                    await this.getPlaylists(0)
                }
                console.error('Não foi possível obter as playlists, ', error)
            }
        },

        moveLeft(): void {
            if (this.startIndex >= 0) {
                this.startIndex -= 3;
                this.getPlaylists(this.startIndex);
            }
        },

        moveRight(): void {
            if (this.startIndex + 3 <= this.playlists.length) {
                this.startIndex += 3;
                this.getPlaylists(this.startIndex)
            }
        }
    },
})