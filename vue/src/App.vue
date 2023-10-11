<template>
  <main>
    <SideBar />
    <main class="home-wrapper">
      <Home />
    </main>
  </main>
</template>

<script setup>
import SideBar from "@/components/sidebar/SideBar.vue";
import Home from "@/views/Home.vue";
</script>

<style>
@import "./styles/main.scss";
</style>
