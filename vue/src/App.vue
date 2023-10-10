<template>
  <main>
    <Home />

    <SideBar />

  </main>
</template>

<script setup>
import SideBar from "@/components/sidebar/SideBar.vue";
import Home from "@/views/Home.vue";
</script>

<style>
@import "./styles/main.scss";
</style>
