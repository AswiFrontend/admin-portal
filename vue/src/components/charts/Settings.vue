
<template>
  <div class="card flex justify-content-center">
    <i class="pi pi-ellipsis-v" @click="toggle"></i>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
const menu = ref();
const items = ref([
  {
    label: "",
    items: [
      {
        label: "Complete",
        icon: "pi pi-check",
      },
      {
        label: "Cancel",
        icon: "pi pi-times",
      },
      {
        label: "Details",
        icon: "pi pi-external-link",
      },
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>