<template>
  <div id="app">
  <time-line 
  :wrapper-cords="wrapperCords"
/>
    
  </div>
</template>

<script>
import TimeLine from './components/TimeLineIndividual.vue'
export default {
  name: 'App',
  components: {
    TimeLine
    
  },
  data(){
    return{
      wrapperCords:{
        top:0,
        left:0
      }
    }
  },
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

