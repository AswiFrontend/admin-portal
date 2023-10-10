
<template>
  <div class="card flex justify-content-center">
    <Avatar
      image="https://freya.primevue.org/layout/images/avatar/square/avatar-m-1.jpg"
      class="mr-2"
      size="small"
      shape="circle"
      @click="toggle"
    />

    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    <Toast />
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
        label: "Profile",
        icon: "pi pi-fw pi-user",
      },
      {
        label: "Settings",
        icon: "pi pi-fw pi-cog",
      },
      {
        label: "logout",
        icon: "pi pi-sign-out",
      },
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>