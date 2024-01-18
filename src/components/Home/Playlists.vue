<script setup lang="ts">
import { usePlaylistsStore } from "../../store/playlists.ts";
import PlaylistCard from "./PlaylistCard.vue";
import { ref } from 'vue'

const store = usePlaylistsStore()
store.getPlaylists()

let startIndex = ref(0);
let lastIndex = ref(3);
const seeAll = ref(false)

const navigateLeft = () => {
  if (startIndex.value > 0) {
    startIndex.value -= 1
    lastIndex.value -= 1
  }
}

const navigateRight = () => {
  if (lastIndex.value < store.playlists.length) {
    startIndex.value += 1
    lastIndex.value += 1
  }
}
</script>

<template>
  <div class="container">
    <div class="top">
      <h1 class="main_h1">Feito para você</h1>
      <div class="controls">
        <button type="button" class="chevrons" @click="navigateLeft()" :class="{ 'disabled': startIndex === 0 }" v-if="!seeAll">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </button>
        <button type="button" class="chevrons" @click="navigateRight()" :class="{ 'disabled': lastIndex === store.playlists.length }" v-if="!seeAll">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
        <a @click="seeAll = !seeAll">{{ seeAll ? 'Ver menos' : 'Ver todos'  }}</a>
      </div>
    </div>
    <div class="playlists-container" v-if="!seeAll">
      <div v-for="playlist in store.playlists.slice(startIndex, lastIndex)" :key="playlist.id">
        <PlaylistCard :data="playlist"/>
      </div>
    </div>
    <div class="playlists-grid" v-if="seeAll">
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
  text-decoration: underline;
  cursor: pointer;
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

.playlists-grid {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 60px;
  margin-bottom: 60px;
}

</style>