<template>
    <div class="container">
    <h1><span v-for="(item,index) in 'Congratulations!!!'" :key="index">{{ item }}</span></h1>
    <div class="confettis">
    <confetti-component v-for="(item,index) in 2" :key="`confetti-${index+1}`" :index="index+1" />
    </div>
    </div>
</template>
<script>
import ConfettiComponent from './ConfettiComponent.vue';
export default{
    components:{
        ConfettiComponent
    },
    mounted(){
        this.bounce();
    },
    methods:{
        bounce(){
            let spans = document.querySelectorAll('h1 span');
            spans.forEach((span, ) => {
                span.classList.add('animate');

            });
        }
    }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Signika:700,300,600);
html, body { height: 100%; }
body { display: flex; justify-content: center; align-items: center; margin:20px 0; text-align:center; background:beige; overflow:hidden; }

h1 {
 font-size:5em;
 font:bold 7.5vw/1.6 'Signika', sans-serif;
 user-select:none;
}
.animate { animation:bounce .6s; }
h1 span { display:inline-block; animation:float .2s ease-in-out infinite; }
 @keyframes float {
  0%,100%{ transform:none; }
  33%{ transform:translateY(-1px) rotate(-2deg); }
  66%{ transform:translateY(1px) rotate(2deg); }
}

@keyframes bounce {
  0%,100%{ transform:translate(0); }
  25%{ transform:rotateX(20deg) translateY(2px) rotate(-3deg); }
  50%{ transform:translateY(-20px) rotate(3deg) scale(1.1);  }
}

span:nth-child(4n) { color:hsl(50, 75%, 55%); text-shadow:1px 1px hsl(50, 75%, 45%), 2px 2px hsl(50, 45%, 45%), 3px 3px hsl(50, 45%, 45%), 4px 4px hsl(50, 75%, 45%); }
span:nth-child(4n-1) { color:hsl(135, 35%, 55%); text-shadow:1px 1px hsl(135, 35%, 45%), 2px 2px hsl(135, 35%, 45%), 3px 3px hsl(135, 35%, 45%), 4px 4px hsl(135, 35%, 45%); }
span:nth-child(4n-2) { color:hsl(155, 35%, 60%); text-shadow:1px 1px hsl(155, 25%, 50%), 2px 2px hsl(155, 25%, 50%), 3px 3px hsl(155, 25%, 50%), 4px 4px hsl(140, 25%, 50%); }
span:nth-child(4n-3) { color:hsl(30, 65%, 60%); text-shadow:1px 1px hsl(30, 45%, 50%), 2px 2px hsl(30, 45%, 50%), 3px 3px hsl(30, 45%, 50%), 4px 4px hsl(30, 45%, 50%); }

h1 span:nth-child(2){ animation-delay:.05s; }
h1 span:nth-child(3){ animation-delay:.1s; }
h1 span:nth-child(4){ animation-delay:.15s; }
h1 span:nth-child(5){ animation-delay:.2s; }
h1 span:nth-child(6){ animation-delay:.25s; }
h1 span:nth-child(7){ animation-delay:.3s; }
h1 span:nth-child(8){ animation-delay:.35s; }
h1 span:nth-child(9){ animation-delay:.4s; }
h1 span:nth-child(10){ animation-delay:.45s; }
h1 span:nth-child(11){ animation-delay:.5s; }
h1 span:nth-child(12){ animation-delay:.55s; }
h1 span:nth-child(13){ animation-delay:.6s; }
h1 span:nth-child(14){ animation-delay:.65s; }
h1 span:nth-child(15){ animation-delay:.70s;}
h1 span:nth-child(16){ animation-delay:.70s;}
h1 span:nth-child(17){ animation-delay:.70s;}
h1 span:nth-child(18){ animation-delay:.70s;}

.container{
    position: relative;
}.confettis{
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
}
</style>