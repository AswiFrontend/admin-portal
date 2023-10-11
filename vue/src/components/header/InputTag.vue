
<template>
  <div class="card flex flex-wrap justify-content-center gap-3">
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
<style scoped>
.p-inputtext {
  border-radius: 4rem;
  width: 13rem;
  background-color: #dee2e6 !important;
  height: 33px;
  outline: none;
}
</style>