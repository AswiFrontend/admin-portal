<template>
  <main class="charts-view">
    <BarGraph />
    <TableData />
    <PieChart />

    <LineChart />
  </main>
</template>

<script setup>
import BarGraph from "@/components/charts/BarGraph.vue";
import TableData from "@/components/charts/TableData.vue";
import PieChart from "./PieChart.vue";
import LineChart from "@/components/charts/LineChart.vue";
</script>

<style lang="scss" scoped>
.charts-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  aside {
    width: 50rem;
    height: 40rem;
    display: flex;
    flex-wrap: wrap;
  }
  .pie-card {
    display: flex;
  }
}
</style>