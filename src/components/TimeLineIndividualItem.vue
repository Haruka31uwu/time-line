<template>
    <div>
    <svg
  width="1000"
  height="1000"
  viewBox="0 0 1000 1000"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
        <linearGradient v-for="(item,index) in numberOfPaths " :key="index" :id="`fillGradient-${index+1}`">
            
            <stop offset="0%" stop-color="black">
                <animate
                    attributeName="offset"
                    values="0; 1"
                    :begin="`${timeBetweenPaths*(index+1)}s`"
                    :dur="timeBetweenPaths+'s'"                    
                    repeatCount="1"
                    fill="freeze"
                />

            </stop>
            <stop offset="100%" stop-color="white">
            <animate
              attributeName="offset"
              values="0; 1"
              :begin="`${timeBetweenPaths*(index+1)}s`"
              :dur="timeBetweenPaths+'s'"                    
              repeatCount="1"
              fill="freeze"
            />
          </stop>
        </linearGradient>
      </defs>

  <path  d="M 50 0 C 50,100, 135,100 150 100 v 50 C 40 150,0 105,0 0 h 50 Z"/>
  
  <path class="path-track-rect" 
    id="path-1"
    d="M 150 100 h 150 v 50 h -150 Z"
    fill="white"></path>
  <path class="path-track-rect" id="path-2" d="M 300 100 h 200 v 50 h -200"   fill="white" stroke-width="1" ></path>
  <path class="path-track-rect" d="M 500 100 h 200 v 50 h -200"  fill="white"  stroke-width="1" ></path>
  <path class="path-track-rect" d="M 700 100 h 200 v 50 h -200"   fill="white"  stroke-width="1" ></path>
  <path d="M 900 100 C 1020,100, 1020,300 900 300 v -50 C 950 250, 950 150,900 150" stroke="red" stroke-width="1" fill="black"/>
  <path d="M 900 300 h -200 v -50 h 200" stroke="red" stroke-width="1"></path>

</svg>
    </div>
</template>
<script>
// import anime from 'animejs';

export default {
    data(){
        return{
            timeBetweenPaths:0.15,
            numberOfPaths:5,
        }
    },methods:{
      fillGradient(){  
        const paths= document.querySelectorAll('.path-track-rect');
        let index=0;
        setInterval(()=>{
          paths[index].style.fill="url(#fillGradient-"+(index+1)
            index++;
        if(index==paths.length){
          index=0;
        }
        },this.timeBetweenPaths*1000)
    },
},
    mounted(){
        this.fillGradient();
      
    }
}
</script>
<style>
    .curve-item{
        position: absolute;
        left: 0;
        top: 10em;
    }svg{
        width: 100%;
        height: 100%;
    }.item{
        width:100%;
        height: 100%;
    } 





</style>