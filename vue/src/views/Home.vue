<template>
  <main class="home-view">
    <Header />
    <Message icon="null" :unstyled="false"
      >👋 Hello! Welcome to Freya! Before start please complete your profile to
      know you better.
    </Message>
    <AllCards />
    <Charts />
    <Table />
  </main>
</template>

<script setup>
import Header from "../components/header/Header.vue";
import AllCards from "../components/admin-cards/AllCards.vue";
import Charts from "./Charts.vue";
import Table from "@/components/Table.vue";
</script>

<style lang="scss" scoped>
@import '../styles/header.scss';
</style>