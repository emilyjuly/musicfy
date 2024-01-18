// Seu componente Vue
<script setup lang="ts">
const props = defineProps({
  data: Object
});
</script>

<template>
  <div class="container">
    <a :href="`https://open.spotify.com/playlist/${props.data && props.data.id}`" target="_blank" title="Ao clicar aqui, você será direcionado a playlist no Spotify">
      <img alt="Imagem de capa da playlist" :src="props.data && props.data.images[0].url"/>
    </a>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

img {
  width: 450px;
  height: 450px;
}
</style>
