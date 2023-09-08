<template>
  <div id="app">
  <time-line v-show="false"/>
  <time-line-individual />
  <flag-component/>
  </div>
</template>

<script>
import TimeLine from './components/TimeLine.vue'
import TimeLineIndividual from './components/TimeLineIndividual.vue';
export default {
  name: 'App',
  components: {
    TimeLine,
    TimeLineIndividual,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

