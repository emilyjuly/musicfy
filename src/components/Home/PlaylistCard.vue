// Seu componente Vue
<script setup lang="ts">
const props = defineProps({
  data: Object
});

const getImageUrlByHeight = (height: number) => {
  const image = props.data && props.data.images.find(img => img.height === height);
  return image ? image.url : null;
};
</script>

<template>
  <div class="container">
    <img alt="Imagem de capa da playlist" :src="getImageUrlByHeight(640)"/>
    <p>{{ props.data && props.data.name }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 300px;
  height: 300px;
}
</style>
