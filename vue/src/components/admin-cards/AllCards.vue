<template>
  <main>
    <Cards
      v-for="card in cardsData"
      :text="card.text"
      :number="card.number"
      :icon="card.icon"
      :color="card.color"
      :key="card.text"
    />
  </main>
</template>

<script setup>
import Cards from "./Cards.vue";
import { ref } from "vue";
const cardsData = ref([
  { text: "Orders", number: 23, icon: "pi pi-chart-line", color: "#ffffff" },
  {
    text: "Revenue",
    number: "$1548.26",
    icon: "pi pi-dollar",
    color: "#14b8a6",
  },
  {
    text: "Buyer Messages",
    number: "2",
    icon: "pi pi-envelope",
    color: "#919293",
  },
  { text: "CTR", number: "12%", icon: "pi pi-chart-bar", color: "#606162" },
  {
    text: "Out of Stock Product",
    number: "4",
    icon: "pi pi-box",
    color: "#ffad40",
  },
]);
</script>

<style lang="scss" scoped>
main {
  padding: 1rem;
  background-color: #eef0f4;
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;
  section:first-child {
    color: #000;
  }
}
</style>