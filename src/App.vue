<template>
  <responsive-menu></responsive-menu>
  <nav-bar></nav-bar>
  <section class="w-full">
    <div class="w-full md:w-2/3 mx-auto lg:px-4 flex justify-center flex-col lg:flex-row lg:mt-14">
      <grid-item></grid-item>
      <info-item></info-item>
    </div>
  </section>
</template>

<script>
import NavBar from './components/NavBar.vue';
import GridItem from './components/GridItem.vue';
import InfoItem from './components/InfoItem.vue';
import ResponsiveMenu from './components/ResponsiveMenu.vue';

export default {
  components: {
    NavBar,
    GridItem,
    InfoItem,
    ResponsiveMenu
  }
}
</script>