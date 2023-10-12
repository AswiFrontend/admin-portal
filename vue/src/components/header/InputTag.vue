
<template>
  <div class="card flex flex-wrap justify-content-center gap-3 header-input">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText size="small" v-model="value" placeholder="Search" />
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>
<style lang="scss">
@import '../../styles/header.scss';

</style>