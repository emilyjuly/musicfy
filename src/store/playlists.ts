import { defineStore } from 'pinia'
import instance from "../axiosConfig.ts";

export const usePlaylistsStore = defineStore('playlists', {
    state: () => ({ playlists: [] }),
    actions: {
        async getPlaylists(): Promise<void>{
            const { data } = await instance.get('/users/316665gp24sj5nck6ptofrtfvzay/playlists');
            console.log(data.items)
            this.playlists = data.items
        },
    },
})