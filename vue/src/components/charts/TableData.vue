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
@import '../../styles/table.scss';
</style>






