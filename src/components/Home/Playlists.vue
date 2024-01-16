<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { usePlaylistsStore } from "../../store/playlists.ts";
import PlaylistCard from "./PlaylistCard.vue";

const store = usePlaylistsStore()
store.getPlaylists()
</script>

<template>
  <div class="container">
    <div class="top">
      <h1 class="main_h1">Feito para você</h1>
      <div class="controls">
        <div class="chevrons">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
        <a href="#">Ver todos</a>
      </div>
    </div>
    <div class="playlists-container">
      <div v-for="playlist in store.playlists" :key="playlist.id">
        <PlaylistCard :data="playlist"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
}

.main_h1 {
  font-weight: 400;
}

.controls {
  display: flex;
  gap: 40px;
}

.controls a {
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 16px;
}

.chevrons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.playlists-container {
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 10px;
}
</style>