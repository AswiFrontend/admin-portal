
<template>
  <main class="bar-graph">
    <section class="bar-section">
      <article>
        <h5>Orders</h5>
        <p>Your Daily orders data from last 30 days</p>
        <div class="orders-text">
          <p>
            <span> Total Orders </span>
            <strong> 178 </strong>
          </p>
          <p>
            <span> Total Units </span>
            <strong> 432 </strong>
          </p>
          <p>
            <span> Total Sales </span>
            <strong> $5,564.00 </strong>
          </p>
          <p>
            <span> Avg. sales /orders item </span>
            <strong> $29.00</strong>
          </p>
          <p>
            <span> Avg. units/order item</span>
            <strong>1.3 </strong>
          </p>
        </div>
      </article>
      <Options />
    </section>
    <div class="card">
      <Chart
        type="bar"
        :data="chartData"
        :options="chartOptions"
        height="400"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Options from "./Options.vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  return {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
    ],
    datasets: [
      {
        type: "bar",
        label: "Orders",
        backgroundColor: "#2bd8a6",
        data: [
          7, 10, 4, 12, 3, 5, 1, 8, 7, 9, 14, 11, 6, 3, 2, 4, 10, 12, 13, 8, 6,
          9, 5, 2, 11, 1, 13, 14, 3, 7,
        ],
      },
      {
        type: "bar",
        label: "Units",
        backgroundColor: "#8adcd3",
        data: [
          8, 5, 2, 13, 7, 10, 8, 6, 14, 8, 11, 10, 7, 1, 14, 9, 2, 9, 7, 12, 4,
          5, 13, 10, 2, 12, 6, 9, 3, 4,
        ],
      },
    ],
  };
};
const setChartOptions = () => {
  const textColor = "";
  const textColorSecondary = "";
  const surfaceBorder = "";

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltips: {
        mode: "index",
        intersect: false,
      },
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>
<style lang="scss" scoped>
.bar-section {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.orders-text{
    display: flex;
    gap: 2rem;
    p{
        display: flex;
        flex-direction: column;
        font-size: 12px;
    }
}
.bar-graph{
    margin: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 1rem;
    border-radius: 30px;
    background-color: white;

}
</style>