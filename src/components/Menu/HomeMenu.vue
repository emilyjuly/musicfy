<script setup lang="ts">
const menuItems = [
  {
    name: "Home",
    icon: 'home',
    path: '/'
  },
  {
    name: 'Favorites',
    icon: 'heart',
    path: '/favorites'
  },
  {
    name: 'Mediateka',
    icon: 'music',
    path: '/mediateka'
  }
]
</script>

<template>
  <div v-for="item in menuItems" :key="item.name">
    <div class="menu-container" :class="{'selected': $route.path === item.path}" @click="$router.push(`${item.path}`)">
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
  color: rgba(255, 255, 255, 0.57);
  cursor: pointer;
  transition: 0.4s;
}

.menu-container:hover, .selected:hover {
  color: #46f5ec;
  transition: 0.4s
}

.selected {
  color: white;
  cursor: pointer;
  transition: 0.2s;
}
</style>
