<template>
    <div>
      <div class="timeline-individual-container">
    <svg
      width="100%"
      height="100%"
      :viewBox="`-100 0 1400 ${40*numberOfPaths}`"
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
        <clipPath class="curve-path" :id="`curvePath-${index+1}`" v-if="(index ) % 5 === 0" >
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
          Z`" fill="white"  >
        </path>
        <circle class='item-event' :id="`event-${index}`" v-if="(index) % 5 !== 0 && (index ) % 4=== 0 " 
        :cx="getItemPosition(index)" 
        :cy="120+(190*(Math.floor((index)/5)))" r="70" fill="none" />
      </g>
      <g>
        <linearGradient v-for="(stg,index3) in stage" 
          :key="`event-${index3}`" 
          :id="`event-${index3}`"  
          >
            <stop offset="0%" :style="`stop-color: ${randomColors[Math.floor(Math.random()*randomColors.length)]}; stop-opacity: 1`" />
            <stop offset="100%" :style="`stop-color: ${randomColors[Math.floor(Math.random()*randomColors.length)]}; stop-opacity: 1`" />
          </linearGradient>
      </g>
    </svg>
    <flag-component class="flag" :flag-url="flagUrl"/>
    <span v-for="(stg,index4) in stage" 
    :key="`event-item-${index4}`" 
    class="event-item-stg"
    :id="`event-item-${index4}`" >{{ stg.name }}</span>
    <span v-for="(stg,index5) in stage" 
    :key="`event-item2-${index5}`" 
    class="event-item-stg-date"
    >
    {{ stg.created_at }}
    </span>
  </div>
  <div class='backdrop' @click="hiddenWelcome()"></div>
    <welcome-component class="welcome-component" @click="hiddenWelcome()"/>
    </div> 
</template>
<script>
import FlagComponent from '../components/FlagComponent.vue';
import WelcomeComponent from '../components/WelcomeComponent.vue';
export default {
    props:{
      stage:{
        type:Array,
        default:()=>([{
          applicant_status_id: 2,
          comment:"Comentario 90",
          created_at: "2023-09-18 10:00:00",
          name: "PHONE INTERVIEW"
        }]
        )
      },
      numberOfPaths:{
        type:Number,
        default:10
      },
      welcomeStatus:{
        type:Number,
        default:8
      },
      statusNamePosition:{
        type:Object,
        default:()=>({
          x:120,
          y:90
        })
      },
      statusDatePosition:{
        type:Object,
        default:()=>({
          x:190,
          y:50
        })
      },
      flagPosition:{
        type:Object,
        default:()=>({
          x:320,
          y:270
        })
      },
      flagUrl:{
        type:String,
        default:`require(@/assets/flag-animation.png)`
      },
      backUrl:{
        type:String,
        default:require('@/assets/info.svg')
      },
      
    },
    components:{
        FlagComponent,
        WelcomeComponent
        
    },
    data(){
        return{
            timeBetweenPaths:0.05,
            
            randomColors:[
            '#2980B9',
            '#27AE60',
            '#8E44AD',
            '#F39C12',
            '#E74C3C',
            '#3498DB',
            '#1ABC9C',
            '#2C3E50',
            ],
            randomColorsGradient1:[
            '#8EBCDB',
            '#88C7A2',
            '#DDB2F0',
            '#EECE9A',
            '#FA9F95',
            '#85C5F0',
            '#7BE6D1',
            '#515961',

            ],
            randomColorsGradient2:[
            '#007BCE',
            '#02BD50',
            '#B101FD',
            '#E38D04',
            '#F61900',
            '#44A2E0',
            '#21E0B9',
            '#303B47',

            ]
        }
    }
    ,methods:{
      /**
       * @description Fill the timeline path tracks with a gradient
       * @description  Fill the Events with a gradient
       *  @description Show the welcome component
       * @parameter {void}
       * 
       */
      fillGradient(){  
        //Render timeline Sections
        const paths= document.querySelectorAll('.path-track-rect');
        let index=0;
        let index2=0;
        setInterval(()=>{
          if(paths[index]){
            paths[index].style.fill="url(#fillGradient-"+(index+1)+")";
          }
            index++;
          if(index==paths.length){
            index=0;
          }
        },this.timeBetweenPaths*1000)
        //Render timeline events
        const interval2=setInterval(()=>{
          const events= document.querySelectorAll('.item-event');
          const eventsItems= document.querySelectorAll('.event-item-stg');
          if(events[index2]){ 
            
            events[index2].style.stroke=`url(#event-${index2==4?1:index2})`
            events[index2].style.strokeWidth="16"

            paths[index].setAttribute('pointer-events','none')
          const randomInt=Math.floor(Math.random()*this.randomColors.length);
          if(eventsItems[index2]){
            eventsItems[index2].style.background=this.randomColors[randomInt];
          }
          
          }
          index2++;
          if(index2==events.length){
            clearInterval(interval2);
          }
        },this.timeBetweenPaths*7000)
        if(this.stage.findIndex((item)=>item.applicant_status_id==this.welcomeStatus)!=-1){
          this.showWelcome()
        }
       setTimeout(()=>{
        this.setFlagPosition();
       },this.timeBetweenPaths*700*this.stage.length*1.2)
      },
      setFlagPosition(){
        const paths= document.querySelectorAll('.path-track-rect');
        const lastPath= paths[paths.length-1];
        const flag= document.querySelector('.flag');
        flag.style.position="absolute";
        flag.style.left=lastPath.getBoundingClientRect().x+this.flagPosition.x+'px';
        flag.style.top=lastPath.getBoundingClientRect().y-this.flagPosition.y+'px';

      },
      showWelcome(){
        setTimeout(()=>{
          const timeline= document.querySelector('.timeline-individual-container');
          const welcome= document.querySelector('.welcome-component');
          const backdrop= document.querySelector('.backdrop');
          timeline.style.transition="0.5s ease-in-out";
          timeline.style.pointerEvents="none";
          timeline.style.filter="blur(5px)";
          backdrop.style.opacity="1";
          backdrop.style.zIndex="2";

          welcome.classList.remove('dnone');
          welcome.classList.add('dblock');
        },this.timeBetweenPaths*7000*this.stage.length*1.2)
      },
      getPathData(index) {
        let startX = 0;
        const rowIndex = Math.floor(index / 5);
  // Si la fila actual es par, comienza con un valor ascendente
        if (rowIndex % 2 === 0) {
          startX = 150 + ((index - 1) % 5) * 200; // Espacio entre elementos: 200

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

        } else {
          // Si la fila actual es impar, comienza desde el final de la fila anterior con un valor descendente
          startX = 250 + 200 * (5 - (index % 5));
          if((index-1)%5==0){
            startX=50 + 200 * (5 - (index % 5));
          }
        }
        return startX;
      },
      getEventPosition(index){
        let startX = 0;
        const rowIndex = Math.floor(index / 5);
        // Si la fila actual es par, comienza con un valor ascendente
        if (rowIndex % 2 === 0) {
          startX = 250 + ((index - 1) % 5) * 200; // Espacio entre elementos: 200

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
      },
      getX2(index){
        if(index==1){
          return '100%';
        }else if( 6+(10*(index%10))){
          return '0%';
        }else{
          return '100%';
        }
      },
      setEventsPosition(){
        const events= document.querySelectorAll('.event-item-stg');
        const eventCircles= document.querySelectorAll('.item-event');
        const eventDateItems= document.querySelectorAll('.event-item-stg-date');
        events.forEach((event,index)=>{
        if(eventCircles[index]){
          event.style.left=eventCircles[index].getBoundingClientRect().x+this.statusNamePosition.x+'px';
          event.style.top=eventCircles[index].getBoundingClientRect().y-this.statusNamePosition.y+'px';
          eventDateItems[index].style.left=eventCircles[index].getBoundingClientRect().x+this.statusDatePosition.x+'px';
          eventDateItems[index].style.top=eventCircles[index].getBoundingClientRect().y-this.statusDatePosition.y+'px';
        }
        }) 
      }
    ,hiddenWelcome(){
      const timeline= document.querySelector('.timeline-individual-container');
      const welcome= document.querySelector('.welcome-component');
      const backdrop= document.querySelector('.backdrop');
      if(timeline.style.pointerEvents=='none'){
      timeline.style.transition="0.5s ease-in-out";
      timeline.style.pointerEvents="auto";
      timeline.style.filter="blur(0px)";
      timeline.style.background="white";
      backdrop.style.opacity="1";
      backdrop.style.zIndex="-1";
      welcome.classList.remove('dblock');
      welcome.classList.add('dnone');
    }
    }
  },
      mounted(){
          this.fillGradient();
          this.setEventsPosition();
      }
}
</script>
<style scoped>
    .curve-item{
        position: absolute;
        left: 0;
        top: 10em;
    }svg{
        width: 100%;
        height: 100%;
        z-index: 0;
    }.item-event{
      stroke: white;
      stroke-width: 10;
      fill: none;
      animation: dash 1s ease-in-out infinite;
      transform-origin: center;
      transition: 0.5s ease-in-out;
      /* not stop animation on hover out */
      animation-iteration-count: 1  ;
    }

    
     
.timeline-individual-container{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
}

@keyframes dash2 {
  0% {
    stroke-dasharray: 351.0, 150;
  }
  50% {
    stroke-dasharray: 0,351;
  }
  100% {
    stroke-dasharray: 351, 0;
  }
  
}
@keyframes dash {
  0% {
    stroke-dasharray: 0.0, 0;
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
    
}.event-item-stg{
  position: absolute;
  z-index:10;
  font-size: 1.7em;
  text-align: start;
  word-break: break-word;
  width: 400px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  -webkit-background-clip: text!important;
  -webkit-text-fill-color: transparent;
}.event-item-stg-date{
  position:absolute;
  z-index:10;
  font-size: 1.2em;
  font-weight: lighter;
  text-align: end;
  word-break: break-word;
  width: auto;
}.welcome-component{
  position:absolute;
  top:10%;
  left:22%;
  display:none;
  z-index:3;

}.dblock{
  display:block!important;
}.dnone{
  display: none !important;;
}.backdrop{
  opacity:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.8);
  position:absolute;
  top:0;
  z-index:-1;
  transition: 0.5s ease-in-out;
}

</style>