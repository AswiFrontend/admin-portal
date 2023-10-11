
<template>
    <aside
      class="side-bar"
      @mouseenter="visible = true"
      @mouseleave="visible = false"
      :class="!visible ? 'remove-scroll' : ''"
    >
      <header><Icon v-if="!visible" /> <Logo v-if="visible" /></header>

      <section>
        <DropDown
          v-for="(option, index) in options"
          :list="option"
          :key="index + option"
          :visible="visible"
        />
      </section>
    </aside>
</template>

<script setup>
import { ref } from "vue";
import Icon from "./Icon.vue";
import Logo from "./Logo.vue";
import DropDown from "./DropDown.vue";
const visible = ref(false);

const options = ref([
  {
    head: "DASHBOARDS",
    items: [
      { icon: "pi pi-home", label: "E-Commerce" },
      { icon: "pi pi-image", label: "Banking" },
    ],
  },
  {
    head: "APPS",
    items: [
      { icon: "pi pi-comment", label: "Blog" },
      { icon: "pi pi-calendar", label: "Calendar" },
      { icon: "pi pi-comments", label: "Chat" },
      { icon: "pi pi-folder", label: "Files" },
      { icon: "pi pi-envelope", label: "Mail" },
      { icon: "pi pi-check-square", label: "Task List" },
    ],
  },
  {
    head: "UI KIT",
    items: [
      { icon: "pi pi-id-card", label: "Form Layout" },
      { icon: "pi pi-check-square", label: "Input" },
      { icon: "pi pi-bookmark", label: "Float Label" },
      { icon: "pi pi-info-circle", label: "Invalid State" },
      { icon: "pi pi-box", label: "Button" },
      { icon: "pi pi-table", label: "Table" },
      { icon: "pi pi-share-alt", label: "Tree" },
      { icon: "pi pi-chart-line", label: "Panel" },
      { icon: "pi pi-copy", label: "Overlay" },
      { icon: "pi pi-image", label: "Media" },
    ],
  },
  {
    head: "PRIME BLOCKS",
    items: [
      { icon: "pi pi-eye", label: "Free Blocks" },
      { icon: "pi pi-globe", label: "All Blocks" },
    ],
  },
]);
</script>

<style scoped>
@import "../../styles/side-bar.scss";
</style>