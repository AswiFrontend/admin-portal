
<template>
  <main class="line-chart">
    <div class="card">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="h-30rem"
        height="350"
        width="600"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        fill: false,
        borderColor: documentStyle.getPropertyValue("--blue-500"),
        yAxisID: "y",
        tension: 0.4,
        data: [65, 59, 80, 81, 56, 55, 10],
      },
     
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          drawOnChartArea: false,
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>

<style>
@import '../../styles/bar-graph.scss';
</style>