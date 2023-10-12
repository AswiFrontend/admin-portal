
<template>
  <main class="table-products">
    <article></article>
    <section>
      <div class="card">
        <DataTable
          :value="products"
          tableStyle="min-width: 50rem"
          :paginator="true"
          :rows="3"
        >
          <template #header>
            <div
              class="flex flex-wrap gap-2 align-items-center justify-content-between search-in-table"
            >
              <h4 class="m-0">Ad Management</h4>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText placeholder="Search..." />
                <Button
                  icon="pi pi-upload"
                  severity="help"
                  rounded
                  class="ml-2 bg-green-300 border-none"
                />
              </span>
            </div>
          </template>

          <Column field="name" header="Name"></Column>
          <Column field="image" header="">
            <template #body="{ data }">
              <img class="thumbnail-table" :src="data.image" alt="" />
            </template>
          </Column>

          <Column field="adROI" header="Ad ROI"></Column>
          <Column field="adCTR" header="Ad CTR"></Column>
        </DataTable>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  {
    name: "Add a Touch of Luxury to Your Phone",
    adROI: "10%",
    adCTR: "6%",
    image: "https://freya.primevue.org/demo/images/product/black-watch.jpg",
  },
  {
    name: "Add a Touch of Luxury to Your Phone",
    adROI: "10%",
    adCTR: "6%",
    image: "https://freya.primevue.org/demo/images/product/green-earbuds.jpg",
  },

  {
    name: "Add a Touch of Luxury to Your Phone",
    adROI: "10%",
    adCTR: "6%",
    image: "https://freya.primevue.org/demo/images/product/yoga-set.jpg",
  },
]);
</script>
<style lang="scss" scoped>
@import "../styles/table.scss";
</style>