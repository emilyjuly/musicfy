<script setup lang="ts">
const menuItems = [
  {
    name: "Home",
    icon: 'home'
  },
  {
    name: 'Favorites',
    icon: 'heart'
  },
  {
    name: 'Mediateka',
    icon: 'music'
  }
]
</script>

<template>
  <div v-for="item in menuItems" :key="item.name">
    <div class="menu-container">
      <font-awesome-icon :icon="[ 'fas', item.icon ]"/>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
}
</style>
