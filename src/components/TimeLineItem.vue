<template>
  <div class="timelineitem">
    <div
      :class="
        index % 2 == 0
          ? 'timelineinfo-container-right'
          : 'timelineinfo-container-left'
      "
    >
      <div
        :style="setItemsColor(index,true)"
        :class="
          index % 2 == 0
            ? 'timelineinfoconnector-right timelineinfoconnector'
            : 'timelineinfoconnector-left timelineinfoconnector'
        "
      ></div>
      <div class="timelineinfo">
        Quaerat obcaecati voluptatibus architecto iusto suscipit porro facilis
        magnam ut iste mollitia placeat earum quam quis dolorem ducimus eveniet,
        nulla quo similique eligendi, sint, consectetur asperiores! Debitis
        numquam reprehenderit aliquid!
      </div>
    </div>
    <div :id="`${index}-event`" class="timelineevent">
      <div class="circle"  @click="openItemInformation(index)" @mouseenter="hoverItem(index,true)" @mouseleave="hoverItem(index,false)">
          <span class="event-name" :id="`event-name${index}`">{{ stage.name }}</span>
        <svg class="svg">
          <circle :id='`ci-border${index}`' :style="setItemsColor(index)" class="circle-border" cx="100" cy="100" r="75">
          </circle>
        </svg>
      </div>
    </div>
    <div  v-if="!isEnd" >
    <div class="line" >
        <svg class="svg-line">
        <line :id='`li-border${index}`' :style="setItemsColor(index)" x1="0" y1="30" x2="0" y2="100%" stroke="black" stroke-width="1" />
        </svg>
    </div>
    </div>
  </div>
</template>
<script>
export default {
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
    /**
     * Set Circle, Line and Connectors Color
     * @param {Number} index index of the item
     * 
     * @param {Boolean} isItem if is true, the color is for the circle and line, if is false, the color is for connectors
     */
    setItemsColor(index,isItem=false){
      return isItem?`border-top:1em dotted ${this.itemColors[index]}`:`stroke:${this.itemColors[index]}!important`;
    },
    openItemInformation(index){
      const itemCircle=document.querySelector(`#ci-border${index}`);
      itemCircle.classList.add('circle-border-clicked')
    },
    hoverItem(index,isHover){
      const itemCircle=document.querySelector(`#ci-border${index}`);
      const eventName=document.querySelector(`#event-name${index}`);
      console.log(itemCircle)
      if(isHover){
        itemCircle.setAttribute('style',`stroke:${this.itemColorsDark[index]}!important`)
        eventName.setAttribute('style','font-weight:bold');
      }else{
        itemCircle.setAttribute('style',`stroke:${this.itemColors[index]}!important`)
        eventName.setAttribute('style','font-weight:400');

      }
    }
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
    },
};
</script>
<style>
.timelineevent {
  width: 200px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-right: 1em solid black;
}
.timelineinfo-container-right {
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  left: 28em;
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
  width: 40%;
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
  position: fixed;
  right: 28em;
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
</style>    