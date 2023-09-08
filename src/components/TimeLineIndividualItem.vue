<template>
    <div>
    <svg
  width="1000"
  height="600"
  viewBox="0 0 1000 3000"
  xmlns="http://www.w3.org/2000/svg">
  <defs v-for="(item,index) in numberOfPaths " :key="`def-${index}`" >
    <linearGradient v-if="(index) % 5 === 0" :id="`fillGradient-${index+1}`"
    :x1="getX1(index+1)" :x2="getX2(index+1)" y1="0%" y2="100%"
    >
    <stop offset="0%" style="stop-color: black; stop-opacity: 1" >
      <animate attributeName="offset" values="0; 1" :begin="`${timeBetweenPaths*(index+1)}s`"
      :dur="timeBetweenPaths+'s'"  repeatCount="1" fill="freeze"/>
      </stop>
      <stop offset="100%" style="stop-color: white; stop-opacity: 0" >
        <animate attributeName="offset" values="0; 1" :begin="`${timeBetweenPaths*(index+1)}s`"
        :dur="timeBetweenPaths+'s'"  repeatCount="1" fill="freeze"/></stop>

    </linearGradient>
    <clipPath :id="`curvePath-${index+1}`" v-if="(index ) % 5 === 0" >
      <path v-if="index==0" d="M 50 0 C 50,100, 135,100 150 100 v 50 C 40 150,0 105,0 0 h 50 Z"/> 
      <path
        v-if="((index ) % 5)==0 && ((index ) % 10)!=0 && index!=0"
        :d="`M 950 ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+100:100)} 
        C 1125 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+100:100)},
        1140 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+340:340)}, 
        950 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+340:340)} 
        v -50 
        C 1010 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+295:295)},
        1070 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+180:180)}, 
        950 ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+150:150)} v -50 Z`"
        
      /> 
       <path
        v-if="((index ) % 10)==0 && index!=0"
        :d="`M 150 ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+100:100)} 
        C -20 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+100:100)},
        -20 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+340:340)}, 
        150 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+340:340)} 
        v -50 
        C 65 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+295:295)},
        65 
        ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+150:150)}, 
        150 ${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+150:150)} v -50 Z`"
       
      />    

    </clipPath>
        <linearGradient :id="`fillGradient-${index+1}`" v-if="(index ) % 5 !== 0">        
            <stop offset="0%" :stop-color="Math.floor((index)/5)%2==0?'black':'white'">
                <animate
                    attributeName="offset"
                    :values="Math.floor((index)/5)%2==0?'0; 1':'1; 0'"
                    :begin="`${timeBetweenPaths*(index+1)}s`"
                    :dur="timeBetweenPaths+'s'"                    
                    repeatCount="1"
                    fill="freeze"
                />
            </stop>
            <stop offset="100%" :stop-color="Math.floor((index)/5)%2==0?'white':'black'">
            <animate
              attributeName="offset"
              :values="Math.floor((index)/5)%2==0?'0; 1':'1; 0'"
              :begin="`${timeBetweenPaths*(index+1)}s`"
              :dur="timeBetweenPaths+'s'"                    
              repeatCount="1"
              fill="freeze"
            />
          </stop>
        </linearGradient>
    </defs>

    <g v-for="(item,index) in numberOfPaths " :key="index">
      
      <rect class="path-track-rect" 
        :id="`${index}-owo`" 
        width="200"
        height="400"
        :x="(index %10) ==0?'0':'950'" 
        :y="`${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+100:0)}`" 
        :clip-path="`url(#curvePath-${index+1})`" 
        v-if="(index ) % 5 === 0"
        fill="none">
      </rect>
      <path v-else class="path-track-rect" :d="
      Math.floor((index)/5)%2==0?
      `M ${getPathData(index)} 
      ${100+(190*(Math.floor((index)/5)))}
       h 200 
       v 50 
       h -200`
      :
      `M ${getPathData(index)} 
      ${100+(190*(Math.floor((index)/5)))} 
      h -200 
      v 50 
      h 200 
      Z`" fill="white"  ></path>
    </g>
    <!-- <path
        d="M 950 100 C 1125 100,1140 340, 950 340 v -50 C 65 295, 1070 180, 950 150 v -50 Z"
        fill="none"
        stroke="red"
        stroke-width="1"
      /> -->
       
      
    <!-- <path class="path-track-rect" 
    id="path-1"
    d="M 150 100 h 150 v 50 h -150 Z"
    fill="white"></path>
    <path class="path-track-rect" id="path-2" d="M 300 100 h 200 v 50 h -200"   fill="white" stroke-width="1" ></path> -->
    <!-- <path class="path-track-rect" d="M 500 100 h 200 v 50 h -200"  fill="white"  stroke-width="1" ></path>
    <path class="path-track-rect" d="M 700 100 h 200 v 50 h -200"   fill="white"  stroke-width="1" ></path>
    <path d="M 900 300 h -200 v -50 h 200" stroke="red" stroke-width="1"></path> -->
    <!-- <path d="M 900 100 C 1020,100, 1020,300 900 300 v -50 C 950 250, 950 150,900 150" stroke="red" stroke-width="1" fill="black"/> -->


</svg>
    </div>
</template>
<script>
// import anime from 'animejs';

export default {
    data(){
        return{
            timeBetweenPaths:0.05,
            numberOfPaths:100,
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
    getPathData(index) {
      let startX = 0;
      const rowIndex = Math.floor(index / 5);
// Si la fila actual es par, comienza con un valor ascendente
      if (rowIndex % 2 === 0) {
        startX = 150 + ((index - 1) % 5) * 200; // Espacio entre elementos: 200
        console.log(rowIndex,index,startX)

      } else {
        // Si la fila actual es impar, comienza desde el final de la fila anterior con un valor descendente
        startX = 150 + 200 * (5 - (index % 5));
      }

return startX;
    },
    getX1(index){
        if(index==1){
          return '0%';
        }else if(6+(10*(index%10))){
          return '0%';
        }else{
          return '100%';
    }
  },getX2(index){
    if(index==1){
      return '100%';
    }else if( 6+(10*(index%10))){
      return '0%';
    }else{
      return '100%';
    }
  }
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