// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import Favorites from './views/Favorites.vue';
import Mediateka from './views/Mediateka.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/favorites', component: Favorites },
    { path: '/mediateka', component: Mediateka },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
