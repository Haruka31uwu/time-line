<template>
    <div class="timeline-individual-container">
    <svg
      width="500"
      height="600"
      viewBox="0 0 1000 2000"
      xmlns="http://www.w3.org/2000/svg">
      <defs v-for="(item,index) in numberOfPaths " :key="`def-${index}`" >
        <linearGradient v-if="(index) % 5 === 0" :id="`fillGradient-${index+1}`"
        :x1="getX1(index+1)" :x2="getX2(index+1)" y1="0%" y2="100%"
        >
        <stop offset="0%" :style="`stop-color: ${randomColors[Math.floor(Math.random()*randomColors.length)]}; stop-opacity: 1`" >
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
              <stop offset="0%" :stop-color="randomColors[Math.floor(Math.random()*randomColors.length)]">
                  <animate
                      attributeName="offset"
                      :values="Math.floor((index)/5)%2==0?'0; 1':'1; 0'"
                      :begin="`${timeBetweenPaths*(index+1)}s`"
                      :dur="timeBetweenPaths+'s'"                    
                      repeatCount="1"
                      fill="freeze"
                  />
              </stop>
              <stop offset="100%" :stop-color="randomColors[Math.floor(Math.random()*randomColors.length)]">
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
        <rect class="path-track-rect"  style="cursor: pointer;" 
          :id="`${index}-owo`" 
          width="200"
          height="400"
          :x="(index %10) ==0?'0':'950'" 
          :y="`${ (Math.floor(index / 5)>1?(Math.floor(index / 5)-1)*190+100:0)}`" 
          :clip-path="`url(#curvePath-${index+1})`" 
          v-if="(index ) % 5 === 0"
          fill="none">
        </rect>
        <path v-else class="path-track-rect" style="cursor: pointer;" :d="
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
        <circle class='item' v-if="(index ) % 2 !== 0 && (index ) % 5 !== 0" :cx="getItemPosition(index)" :cy="120+(190*(Math.floor((index)/5)))" r="50" fill="black" />
      </g>
    </svg>
    <flag-component class="flag" />
    </div>
</template>
<script>
import FlagComponent from '../components/FlagComponent.vue';

export default {
    components:{
        FlagComponent
        
    },
    data(){
        return{
            timeBetweenPaths:0.05,
            numberOfPaths:50,
            randomColors:[
            '#2980B9',
            '#27AE60',
            '#8E44AD',
            '#F39C12',
            '#E74C3C',
            '#3498DB',
            '#1ABC9C',
            '#2C3E50',
            '#E67E22',
            ]
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
    getItemPosition(index){
      let startX = 0;
      const rowIndex = Math.floor(index / 5);
// Si la fila actual es par, comienza con un valor ascendente
      if (rowIndex % 2 === 0) {
        startX = 250 + ((index - 1) % 5) * 200; // Espacio entre elementos: 200
        console.log(rowIndex,index,startX)

      } else {
        // Si la fila actual es impar, comienza desde el final de la fila anterior con un valor descendente
        startX = 250 + 200 * (5 - (index % 5));
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
        z-index: 1;
    }.item{
        width:100px;
        height: 100px;
        fill: none;
        stroke: #000; /* Color del borde */
        stroke-width: 12; /* Ancho del borde */
        stroke-dashoffset: 0; /* Desplazamiento inicial del trazo */
        stroke-linecap: round;
        transform-origin: center;
        animation: dash 1s linear forwards; /* Duración de la animación */
        /* add shadow*/
        filter: drop-shadow(0 -0.25rem 0.2rem #000000);
        z-index:2;


    } .path-track-rect:hover{
      animation: path-track-rect-hover 1s ease-in-out;
      transform-origin: center;
      transition: 0.5s ease-in-out;
      /* not stop animation on hover out */
      animation-iteration-count: 1  ;

    }
    @keyframes path-track-rect-hover{
      0%{
        transform: scale(1);
      }
      50%{
        transform: scale(1.1);
      }
      100%{
        transform: scale(1);
      }
    }
.timeline-individual-container{
    width: 100%;
    height: 100%;
    position: relative;

    overflow: hidden;
    z-index: 1;
}.flag{
    position: absolute;
    top:2200px;
    right:420px;
    z-index: 2;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

@keyframes dash2 {
  0% {
    stroke-dasharray: 351.0, 0;
  }
  50% {
    stroke-dasharray: 0,351;
  }
  100% {
    stroke-dasharray: 351, 0;
  }
  
}

.item:hover{
    cursor: pointer;
}
@keyframes bounce{
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.1);
    }
    
}

</style>