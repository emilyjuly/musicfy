<script setup lang="ts">
import HomeMenu from "../components/Home/HomeMenu.vue";
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const showMenu = ref(true);
</script>

<template>
  <aside class="show_aside" v-if="showMenu">
    <div class="aside_top">
      <h1 class="aside_h1">Musicfy</h1>
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
  flex-direction: column;
  height: 100vh;
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