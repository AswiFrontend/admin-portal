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

<style lang="scss">
@import '../../styles/card.scss';
</style>