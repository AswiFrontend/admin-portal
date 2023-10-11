<template>
  <main>
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
.p-message.p-message-info {
  background: #ffffff !important;
  border: none !important;
  border-width: 0 0 0 6px !important;
  color: gray !important;
  border-radius: 20px !important;
}
.p-message .p-message-text {
  font-size: 10px !important;
}
</style>