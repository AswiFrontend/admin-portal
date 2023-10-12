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
@import '../styles/bar-graph.scss';
</style>