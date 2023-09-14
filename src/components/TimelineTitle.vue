<template>
    <div class="main-container">
    <div class="container">
    <svg viewBox="0 0 1260 300">
    <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">{{ title }}</text>
    </symbol>

    <g class = "g-ants">
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
    </g>
  </svg>
</div>
<div id="wrapper">
    <div id="container2">
        <h1>{{title2}}</h1>

    </div>
</div>
</div>
</template>
<script>
export default{
    props:{
        title:{
            type:String,
            default:''
        },
        title2:{
            type:String,
            default:''
        },
        wrapperCords:{
            type:Object,
            default:()=>({
                top:0,
                left:0
            })
        },
        nthChildColors:{
          type:Array,
          default:()=>[
            '#4D163D',
            '#840037',
            '#BD0034',

          ]
        }
    },
    mounted(){
       const wrapper = document.querySelector('#wrapper');
       wrapper.style.top = this.wrapperCords.top+'px!important';
       wrapper.style.left = this.wrapperCords.left+'px!important';
       const nthChild1= document.querySelector('.text-copy:nth-child(1)');
        const nthChild2= document.querySelector('.text-copy:nth-child(2)');
        const nthChild3= document.querySelector('.text-copy:nth-child(3)');
        nthChild1.style.stroke = this.nthChildColors[0];
        nthChild2.style.stroke = this.nthChildColors[1];
        nthChild3.style.stroke = this.nthChildColors[2];

    }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

html, body{
  height: 100%;
  font-weight: 800;
  margin: 0;
  padding: 0;
}

body{
  background: white;
  font-family: Arial;
}

.container {
  display: flex;
/*   border:1px solid red; */
  height: 100%;
  align-items: center;
  background: white;
  width: 40%;
  margin:0;
}

svg {
    display: block;
    font: 10.5em 'Montserrat';
    width: 960px;
    height: 150px;
    margin: 0 ;
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 8px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1){
  stroke: #4D163D;
  animation-delay: -1;
}

.text-copy:nth-child(2){
  stroke: #840037;
  animation-delay: -2s;
}

.text-copy:nth-child(3){
  stroke: #BD0034;
  animation-delay: -3s;
}

.text-copy:nth-child(4){
  stroke: #BD0034;
  animation-delay: -4s;
}

.text-copy:nth-child(5){
  stroke: #FDB731;
  animation-delay: -5s;
}

@keyframes stroke-offset{
  100% {stroke-dashoffset: -35%;}
}
@import url(https://fonts.googleapis.com/css?family=Raleway:400,700,900,400italic,700italic,900italic);

*,
:before,
:after {
    box-sizing: border-box;
}

body {
    background-color: #fdf9fd;
    color: #011a32;
    font: 16px/1.25 'Raleway', sans-serif;
    text-align: center;
}

/** Title 2 */
#wrapper {
    width: 20%;
    position: absolute;
    left: 45em;
    max-width: 80em;
    top: 3.5em;
    cursor:pointer;

}

#container2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: auto;
    align-items: flex-end;
    width: 100%;
    background: white;
}

#wrapper:hover {
    animation: text-shadow 1.5s ease-in-out infinite;
 
    font-weight: 900;
    line-height: 1;
}

h1{
    animation-play-state: paused;
    font-size: 2.5em;
    padding: 0;
    font-family: 'Courier new', sans-serif;
    
}

a {
    color: #024794;
}

a:hover {
    text-decoration: none;
}

@keyframes text-shadow {
    0% {  
        transform: translateY(0);
        text-shadow: 
            0 0 0 #0c2ffb, 
            0 0 0 #2cfcfd, 
            0 0 0 #fb203b, 
            0 0 0 #fefc4b;
    }

    20% {  
        transform: translateY(-1em);
        text-shadow: 
            0 0.125em 0 #0c2ffb, 
            0 0.25em 0 #2cfcfd, 
            0 -0.125em 0 #fb203b, 
            0 -0.25em 0 #fefc4b;
    }

    40% {  
        transform: translateY(0.5em);
        text-shadow: 
            0 -0.0625em 0 #0c2ffb, 
            0 -0.125em 0 #2cfcfd, 
            0 0.0625em 0 #fb203b, 
            0 0.125em 0 #fefc4b;
    }
    
   60% {
        transform: translateY(-0.25em);
        text-shadow: 
            0 0.03125em 0 #0c2ffb, 
            0 0.0625em 0 #2cfcfd, 
            0 -0.03125em 0 #fb203b, 
            0 -0.0625em 0 #fefc4b;
    }

    80% {  
        transform: translateY(0);
        text-shadow: 
            0 0 0 #0c2ffb, 
            0 0 0 #2cfcfd, 
            0 0 0 #fb203b, 
            0 0 0 #fefc4b;
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
}.main-container{
    display:flex;   
    background: white;
    align-items: center;
}
</style>


