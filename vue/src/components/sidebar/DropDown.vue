<template>
  <section>
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
section {
  margin-bottom: 50px;
}
section h5 {
  color: #293241;
  padding: 0;
  margin: 0;
  margin: 20px 0;
  padding: 0 10px;
}
ul {
  padding: 0;
  margin: 0;
  padding: 0 10px;
}
li {
  color: #14b8a6;
  list-style: none;
  margin: 20px 0;
  display: flex;
  gap: 15px;
  font-family: sans-serif;
  overflow: hidden;
  height: 1.2rem;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>