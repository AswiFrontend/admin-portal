<template>
  <main>
    <section class="header-right">
      <InputTag />
      <Menu />
      <i class="pi pi-fw pi-cog " data-pc-section="icon" style="font-size:1rem"></i>
      <i class="pi pi-arrow-left " data-pc-section="icon" style="font-size:1rem"></i>

    </section>
    <section></section>
    <section></section>
  </main>
</template>

<script setup>
import InputTag from "./InputTag.vue";
import Menu from "./Menu.vue";
</script>

<style lang="scss" scoped>
.header-right{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2.5rem;
    padding:  1rem;
  
}
</style> 