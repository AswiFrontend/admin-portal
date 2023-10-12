<template>
  <section class="drop-down-side-bar">
    <h5>
      <span v-if="visible">{{ list.head }}</span>
    </h5>
    <ul>
      <li v-for="(item, index) in list.items" :key="item + index">
        <i :class="item.icon"> </i>
        <transition>
          <label v-if="visible" for=""> {{ item.label }} </label>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["list", "visible"]);
</script>

<style lang="scss" scoped>
@import '../../styles/side-bar.scss';
</style>