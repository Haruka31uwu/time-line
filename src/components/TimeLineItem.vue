<template>
  <div class="timelineitem">
    <div style="position: relative;">
      <div  
      :class="
      index % 2 == 0
        ? 'timelineinfo-container-right'
        : 'timelineinfo-container-left'
    "
  >
    <div
      :id="`infoconnector-${index}`"
      :style="setItemsColor(index,true)"
      :class="
        index % 2 == 0
          ? 'timelineinfoconnector-right timelineinfoconnector '
          : 'timelineinfoconnector-left timelineinfoconnector '
      "
    ></div>
    <div class="timelineinfo opacity-0" :id="`timelineinfo-${index}`">
     <stage-info style="width:100%;" :text="stage.description" :gradient="setGradientColors(index)" :index="index">
    
    </stage-info>
  </div>
  </div>
  <div :id="`${index}-event`" class="timelineevent" >
    <div class="circle"  @click="openItemInformation(index)" @mouseenter="hoverItem(index,true)" @mouseleave="hoverItem(index,false)">
        <span class="event-name" :id="`event-name${index}`">{{ stage.name }}</span>
      <svg class="svg">
        <circle :id='`ci-border${index}`' :style="setItemsColor(index)" class="circle-border" cx="100" cy="100" r="75">
        </circle>
      </svg>
    </div>

  <div :id="`cc-${index}`" class="candidates-container opacity-0" v-if="stage.candidates.length>0" >
    <div class="candidate" v-for="candidate in stage.candidates" :key="candidate.idCandidate" @click="getPostulantData(candidate.idCandidate)">
      <span>{{candidate.name}}</span>
    </div>
  </div>
  <div v-else :id="`cc-${index}`" class="candidates-container opacity-0">
    <h3>Not Postulants here</h3>
    </div>
  </div>
  <div  v-if="!isEnd" >
    <div class="line" >
        <svg class="svg-line">
        <line :id='`li-border${index}`' :style="setItemsColor(index)" x1="0" y1="30" x2="0" y2="100%" stroke="black" stroke-width="1" />
        </svg>
    </div>
  </div></div>
  </div>
</template>
<script>
import  StageInfo from './StageInfo.vue'

export default {
  components: {
    StageInfo,
  },
  props: {
    stage: {
      type: Object,
      required: true,
    },
    isEnd: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
        lines:null,
        itemColors:[
          '#2980B9',
          '#27AE60',
          '#8E44AD',
          '#F39C12',
          '#E74C3C',
          '#3498DB',
          '#1ABC9C',
          '#2C3E50',
          '#E67E22',
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
            '#FAD7A0'
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
            '#BA4A00'
            ],
        itemColorsDark:[
          '#0A3D62',
          '#0E6655',
          '#4A235A',
          '#B9770E',
          '#943126',
          '#1E3799',
          '#148F77',
          '#212F3C',
          '#A04000',
        ]
    };
  },
  methods: {
    async getPostulantData(idCandidate){
      this.$emit('getPostulantData',idCandidate);
    },
    /**
     * Set Circle, Line and Connectors Color
     * @param {Number} index index of the item
     * 
     * @param {Boolean} isItem if is true, the color is for the circle and line, if is false, the color is for connectors
     */
    setItemsColor(index,isItem=false){
      const color=this.itemColors[index>=this.itemColors.length?Math.floor(Math.random() * this.itemColors.length):index];
      return isItem?`border-top:1em dotted 
      ${color}`:`stroke:${color}!important`;
    },
    setGradientColors(index){
      const colorlight=this.randomColorsGradient1[index>=this.randomColorsGradient1.length?Math.floor(Math.random() * this.randomColorsGradient1.length):index];
      const colorNormal=this.itemColors[index>=this.itemColors.length?Math.floor(Math.random() * this.itemColors.length):index];
      const colorDark=this.randomColorsGradient2[index>=this.randomColorsGradient2.length?Math.floor(Math.random() * this.randomColorsGradient2.length):index];
      const style=`-webkit-linear-gradient(90deg, ${colorlight} 5%, ${colorNormal} 53%,${
        colorDark} 91%)`
      console.log(index,style,'owo')
      return  style;
       
    },
    
    openItemInformation(index){
      const itemCircle=document.querySelector(`#ci-border${index}`);
      const timelineInfoConnector=document.querySelector(`#infoconnector-${index}`);
      if(itemCircle.classList.contains('circle-border-clicked')){
        itemCircle.classList.remove('circle-border-clicked')
      }else{
        itemCircle.classList.add('circle-border-clicked')
      }
      const candidatesContainer=document.querySelector(`#cc-${index}`);
      // const timelineInfo=document.querySelector(`#timelineinfo-${index}`);
      if(index%2!=0){
        candidatesContainer.classList.add('candidate-container-rigth');
        candidatesContainer.classList.remove('candidate-container-left');
      }else
      {
        candidatesContainer.classList.add('candidate-container-left');
        candidatesContainer.classList.remove('candidate-container-right');
      }
      if(candidatesContainer.classList.contains('opacity-1')){
        candidatesContainer.classList.remove('opacity-1');
        candidatesContainer.classList.add('opacity-0');
        candidatesContainer.style.display='none';

        timelineInfoConnector.classList.remove('opacity-0');
        timelineInfoConnector.classList.add('opacity-1');
        const timeInfo=document.querySelector(`#timelineinfo-${index}`);
       
        setTimeout(()=>{
          timeInfo.classList.remove('opacity-0');
          timeInfo.classList.add('opacity-1');
        },100)
        setTimeout(()=>{
                  timeInfo.animate([
              {
                transform: "translateY(100%)"
              },
              {
                transform: "translateY(0%)"
              }
          ], {
              duration: 500,
              fill: 'forwards',
            });
        }
        ,100)
      }else{
        candidatesContainer.classList.remove('opacity-0');
        candidatesContainer.classList.add('opacity-1');
        candidatesContainer.style.display='flex';
        timelineInfoConnector.classList.remove('opacity-1');
        timelineInfoConnector.classList.add('opacity-0');
        const timeInfo=document.querySelector(`#timelineinfo-${index}`);
        
        setTimeout(()=>{
          timeInfo.classList.remove('opacity-1');
          timeInfo.classList.add('opacity-0');
        },600)
        setTimeout(()=>{
                  timeInfo.animate([
              {
                transform: "translateY(0%)"
              },
              {
                transform: "translateY(100%)"
              }
          ], {
              duration: 500,
              fill: 'forwards',
            });
        }
        ,100)       
      }
     
      
    },
    hoverItem(index,isHover){
      const itemCircle=document.querySelector(`#ci-border${index}`);
      const eventName=document.querySelector(`#event-name${index}`);
      if(isHover){
        itemCircle.setAttribute('style',`stroke:${this.itemColorsDark[index]}!important`)
        eventName.setAttribute('style','font-weight:bold');
      }else{
        itemCircle.setAttribute('style',`stroke:${this.itemColors[index]}!important`)
        eventName.setAttribute('style','font-weight:400');
      }
    }
  ,
},
  mounted() {
        this.lines = document.querySelectorAll('.line');
        const linesBorder=document.querySelectorAll('line');
        setTimeout(() => {
            this.lines.forEach((line) => {
            line.style.opacity = 1;
            });
            linesBorder.forEach((line) => {
            line.classList.add('line-border');
            });
        }, 1000);
        const linesinfo=document.querySelectorAll('.timelineinfoconnector');
        setTimeout(() => {
            linesinfo.forEach((line) => {
            line.animate([{ opacity: 0 },{opacity:0.25},{opacity:0.5},{opacity:0.75}, { opacity: 1 }], {
                duration: 1500,
                fill: 'forwards',
            });
            
            });
        }, 1500);
        const timeInfo=document.querySelectorAll('.timelineinfo');
        setTimeout(()=>{
          timeInfo.forEach((info)=>{
            info.classList.remove('opacity-0');
            info.classList.add('opacity-1');
            info.animate([
              {   
                transform: "translateY(100%)"
              },
              {
                transform: "translateY(0%)"
              }
          ], {
              duration: 1000,
              fill: 'forwards',
            });
          })
        }
        ,2000)
    
      
    }
};
</script>
<style scoped>
.timelineevent {
  width: 200px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
}
.timelineitem {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.timelineconnector {
  width: 1px;
  height: 7em;
}
.timelineinfo-container-right {
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  left: -32em;
  width: 30em;
  word-break: break-all;
 

}
.timelineinfoconnector-right {
  width: 60%;
  height: 0.1em;
  border-top: 1em dotted black;
  margin-left: 1em;
  margin-top: 8%;
  opacity: 0;
}

.timelineinfoconnector-left {
  width: 60%;
  height: 0.1em;
  border-top: 1em dotted black;
  margin-right: 1em;
  margin-top: 8%;
  opacity: 0;
}

.timelineinfo {
  width: auto;
  padding: 0 2em!important;
  margin-top: 1.5em;
  display: flex;
  align-items: center;
  
  
}
@media (max-width: 1580px) {
  .timelineinfoconnector-right {
    width: 40%;
  }
  .timelineinfoconnector-left {
    width: 40%;
  
}
}
@media (max-width: 1280px) {
  .timelineinfoconnector-right {
    width: 20%;
  }
  .timelineinfoconnector-left {
    width: 20%;
  }
}
@media (max-width: 780px) {
  .timelineinfoconnector-right {
    width: 0;
  }
  .timelineinfoconnector-left {
    width: 0;
  
}
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50%{
    opacity: 0.5;
  }
  75%{
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
.timelineinfo-container-left {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: -32em;
  width: 30em;
  word-break: break-all;
}.svg {
  width: 200px;
    height: 200px;
  margin: 0;
  
  
}.svg-line{
  width: 100px;
  height: 100px;
  margin: 0;
}
.line{
    width: 10px;
    height: 120px;
    margin:0 auto;
    opacity: 0;

}.line-border{
    fill:none;
    stroke: #000;
    stroke-width: 20; /* Ancho del borde */
    stroke-dasharray: 0, 251.2; 
    animation: dash 2s linear forwards; 
    filter: drop-shadow(0.5em -0.4rem 0.2rem #000000);

}
.circle {
    position: relative;
    width: 200px;
    height: 200px;
    cursor: pointer;
}.event-name{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Courier New', Courier, monospace;
  font-weight:400;
  text-align: center;
}
.circle-border {
  fill: none;
  stroke: #000; /* Color del borde */
  stroke-width: 12; /* Ancho del borde */
  stroke-dasharray: 0, 251.2; /* Longitud del trazo */
  stroke-dashoffset: 0; /* Desplazamiento inicial del trazo */
  stroke-linecap: round;
  transform: rotate(-225deg); /* Iniciar la animación desde la parte superior */
  transform-origin: center;
  animation: dash 1s linear forwards; /* Duración de la animación */
  /* add shadow*/
  filter: drop-shadow(0 -0.25rem 0.2rem #000000);
}
@keyframes dash {
  0% {
    stroke-dasharray: 0, 251.2;
  }
  100% {
    stroke-dasharray: 251.2, 0;
  }
}.circle-border-clicked{
  fill:none;
  stroke-width: 12; /* Ancho del borde */
  stroke-dasharray: 0, 251.2; /* Longitud del trazo */
  stroke-dashoffset: 0; /* Desplazamiento inicial del trazo */
  stroke-linecap: round;
  transform: rotate(-225deg); /* Iniciar la animación desde la parte superior */
  transform-origin: center;
  animation: dash2 0.4s linear forwards; /* Duración de la animación */
  /* add shadow*/
  filter: drop-shadow(0 -0.25rem 0.2rem #000000);
}@keyframes dash2 {
  0% {
    stroke-dasharray: 251.2, 0;
  }
  100% {
    stroke-dasharray: 120.2, 120.2;
  }
  
}
.candidates-container{
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  border-radius: 1em;
  box-shadow: 10px 10px 5px 0px rgba(179,179,179,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(179,179,179,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(179,179,179,0.75);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  overflow-y:auto;
  padding:0.5em 0;
}.candidate-container-rigth{
 
  top: 0;
  left:15em;
}.candidate-container-left{

  top:0;
  right: 15em;
}
.candidate{
  padding: 0.8em 0;
  font-family: 'Courier New', Courier, monospace;
  font-weight:400;
  cursor:pointer;
  width: 100%;
  word-break: break-all;
  text-align: center;
}.candidate:hover{
  font-weight: bold;
  background: #F2F3F4;

}.opacity-1{
  opacity: 1!important;
}.opacity-0{
  opacity: 0!important;
}
h3 {
  font-size: 20px;
  background: -webkit-linear-gradient(-91deg, #94A6DC 5%, #68A0EF 53%, #0A49AE 91%);
  -webkit-background-clip: text!important;
  -webkit-text-fill-color: transparent;
  font-family: 'Courier New', Courier, monospace;
  line-height: 25px;
  text-align: center;

}
</style>    