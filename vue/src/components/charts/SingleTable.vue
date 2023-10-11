<template>
  <main class="single-table">
    <article>
      <h5>order <Badge value="#54386"></Badge></h5>
      <p>1 Bamboo Watch, 3 Blue Band</p>
    </article>
    <Settings />
  </main>
</template>

<script setup>
import Settings from "./Settings.vue";
</script>

<style lang="scss" scoped>
.single-table {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e8f7f7;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem 0;

  h5,
  p {
    margin: 0;
    padding: 0;
  }
  p {
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>