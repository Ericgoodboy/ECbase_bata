<template>
  <div id="app">
    <headerblock></headerblock>
    <navblock></navblock>
    <!-- <persioninfo></persioninfo> -->
    <publish></publish>
    <v-footer></v-footer>
  </div>
</template>

<script>
// import feedback from './components/feedback'
import publish from './components/publish'
import persioninfo from './components/persionInfo/personInfo'
import headerblock from './components/headerblock'
import navblock from './components/nav'
import v_footer from './components/footer'
export default {
  name: 'app',
  components: {
    publish,
    headerblock,
    navblock,
    "v-footer":v_footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
