<script setup lang="ts">
import Playlists from "../components/Home/Playlists.vue";
import Menu from "../components/Menu/Menu.vue"
import {useTokenStore} from "../store/token.ts";

const tokenStore = useTokenStore()
tokenStore.getToken()
</script>

<template>
  <div class="container">
    <Menu/>
    <main>
      <Playlists />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

main {
  width: 100%;
}

</style>