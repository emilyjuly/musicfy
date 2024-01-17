// Seu componente Vue
<script setup lang="ts">
const props = defineProps({
  data: Object
});
</script>

<template>
  <div class="container">
    <img alt="Imagem de capa da playlist" :src="props.data && props.data.images[0].url"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 450px;
  height: 450px;
}
</style>
