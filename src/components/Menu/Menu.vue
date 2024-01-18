<script setup lang="ts">
import HomeMenu from "./HomeMenu.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";

const showMenu = ref(true);
</script>

<template>
  <aside class="show_aside" v-if="showMenu">
    <div class="aside_top">
      <h1 class="aside_h1" @click="$router.push('/')">Musicfy</h1>
      <button class="aside_btn" type="button" @click="showMenu = false">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </button>
    </div>
    <div class="aside_menu">
      <HomeMenu/>
    </div>
  </aside>
  <aside v-if="!showMenu" class="menu_bar">
    <button class="aside_btn" type="button" @click="showMenu = true">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
  </aside>
</template>

<style scoped>
.show_aside {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 20%;
  background: rgba(21, 21, 21, 0.25);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.aside_top {
  display: flex;
  justify-content: space-between;
  padding: 50px 0 0 40px;
  width: 100%;
}

.aside_h1 {
  font-size: 35px;
  transition: 0.4s;
  cursor: pointer;
}

.aside_h1:hover {
  color: #46f5ec;
  transition: 0.4s;
}

.aside_menu {
  display: flex;
  flex-direction: column;
  padding: 40px 0 0 40px;
}

.aside_btn {
  border: none;
  padding: 10px;
  width: 35px;
  height: 40px;
  background: rgb(255, 255, 255);
  color: #d800f8;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s;
}

.aside_btn:hover {
  background-color: #46f5ec;
  transition: 0.4s;
}

.menu_bar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 35px;
  background: rgba(21, 21, 21, 0.25);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 50px 0 0 0;
}
</style>