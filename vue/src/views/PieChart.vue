
<template>
  <main class="pie-chart">
    <div class="card flex justify-content-center">
      <Chart
        type="doughnut"
        :data="chartData"
        :options="chartOptions"
        class="w-full md:w-30rem"
        width="00"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
});

const chartData = ref();
const chartOptions = ref({
    cutout: "60%",
  
});

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: [
          documentStyle.getPropertyValue("--blue-500"),
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--green-500"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--blue-400"),
          documentStyle.getPropertyValue("--yellow-400"),
          documentStyle.getPropertyValue("--green-400"),
        ],
      },
    ],
   
  };
};
</script>

<style scoped>
@import '../styles/bar-graph.scss';

</style>