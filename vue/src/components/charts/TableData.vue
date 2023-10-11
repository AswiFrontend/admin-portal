<template>
  <main class="table-data">
    <h5>Waiting Actions</h5>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div class="card">
      <TabView>
        <TabPanel header="Unshipped Orders" badge="9">
          <SingleTable />
          <SingleTable />
          <SingleTable />
          <SingleTable />
          <SingleTable />
          <SingleTable />
        </TabPanel>
        <TabPanel header="Unreturned Messages">
          <SingleTable />
          <SingleTable />
          <SingleTable />
          <SingleTable />
        </TabPanel>
      </TabView>
    </div>
  </main>
</template>

<script setup>
import SingleTable from "./SingleTable.vue";
</script>

<style lang="scss">
.table-data {
  width: 28rem;
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
  margin-top: 1rem;
  height: 35rem;
  overflow-y: scroll;
  .table-data-card {
    height: 4rem !important;
    font-size: 10px;
    background-color: #f3fbfb !important;
    color: black;
  }
}
</style>






