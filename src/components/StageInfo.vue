<template>
    <div class="card">
        <span :id="`text-${index}`">{{ text }}</span>
    </div>  
</template>
<script>
export default {
    props:{
        text:{
            type:String,
            default:''
        },
        gradient:{
            type:String,
            default:'-webkit-linear-gradient(-86deg, #98FF9C 5%, #3ACE53 53%, #00B141 91%);!important'
        },
        index:{
            type:Number,
            default:0
        }
    },
    mounted(){
        const text= document.querySelector(`#text-${this.index}`);
        console.log(text, this.text)
        console.log(this.gradient)
        text.style.background = this.gradient
    },
}
</script>
<style scoped >
.card{
    width: 100%!important;
    display: flex;
    align-items: center;
    background: white;
    padding: 1em 1.5em;
    border-radius: 1em;
    height: 100%;
    box-shadow: 10px 10px 5px 0px rgba(181,181,181,0.75)!important;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(181,181,181,0.75)!important;
    -moz-box-shadow: 10px 10px 5px 0px rgba(181,181,181,0.75)!important;
    overflow:auto;
}span{
    font-size: 22px;
  font-family: 'Courier new', courier, monospace;
  font-weight: 700;
  -webkit-background-clip: text!important;
  -webkit-text-fill-color: transparent!important;
  word-break: normal;

  
}

</style>
