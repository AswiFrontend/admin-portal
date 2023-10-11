
<template>
  <div class="card  justify-content-center">
    <Dropdown
      v-model="selectedTime"
      :options="time"
      optionLabel="name"
      placeholder=""
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTime = ref({ name: "Daily", code: "daily" });
const time = ref([
  { name: "Daily", code: "daily" },
  { name: "Weekly", code: "weekly" },
  { name: "Monthly", code: "monthly" },
]);
</script>