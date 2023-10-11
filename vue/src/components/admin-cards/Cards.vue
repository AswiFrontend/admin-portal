<template>
  <section class="admin-card card table-data-card" :style="{ backgroundColor: color }">
    <article>
      {{ text }}

      <i :class="icon" data-pc-section="icon" style="font-size: 1.6rem"></i>
    </article>
    <span>{{ number }}</span>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["text", "number", "color", "icon"]);
</script>

<style lang="scss" scoped>
.admin-card {
  width: 15rem;
  height: 6rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: .2rem;
  color:#fff;
flex-grow: 2;
  article {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  span{
    font-size: 28px;
    font-weight: bold;
  }
}
</style>