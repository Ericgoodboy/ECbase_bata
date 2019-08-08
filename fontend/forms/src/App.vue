<template>
  <div id="app">
    <headerblock></headerblock>
    <navblock></navblock>
    <!-- <persioninfo></persioninfo> -->
    <transition name="bounce">
      <router-view></router-view>
    </transition>
    <v-footer></v-footer>
  </div>
</template>

<script>
// import feedback from './components/feedback'
// import publish from './components/publish'
// import persioninfo from './components/persionInfo/personInfo'
import headerblock from './components/headerblock'
import navblock from './components/nav'
import v_footer from './components/footer'
export default {
  name: 'app',
  components: {
    // publish,
    headerblock,
    navblock,
    "v-footer":v_footer
  }
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0); 
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: .2
  }
  100% {
    transform: scale(1);
    opacity: 1
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
