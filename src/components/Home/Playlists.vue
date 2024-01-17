<script setup lang="ts">
import { usePlaylistsStore } from "../../store/playlists.ts";
import PlaylistCard from "./PlaylistCard.vue";

const store = usePlaylistsStore()
store.getPlaylists(0)
</script>

<template>
  <div class="container">
    <div class="top">
      <h1 class="main_h1">Feito para você</h1>
      <div class="controls">
        <button type="button" class="chevrons" @click="store.moveLeft()" :class="{ 'disabled': store.startIndex === 0 }">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </button>
        <button type="button" class="chevrons" @click="store.moveRight()" :class="{ 'disabled': store.startIndex === 3 }">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
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
  align-items: center;
  gap: 20px;
}

.controls a {
  color: white;
  font-weight: 400;
  font-size: 16px;
}

.chevrons {
  border: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: white;
}

.playlists-container {
  display: flex;
  justify-content: space-around;
}

.disabled {
  cursor: not-allowed;
  color: rgba(255, 255, 255, 0.31);
}
</style>