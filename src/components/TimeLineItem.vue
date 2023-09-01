<template>
    <div class="timelineitem">
        <div class="timelineinfoconnector"></div>
        <div class="timelineinfo"></div>
        <div class="timelineevent">
            <span>{{stage.name}}</span>
        </div>
        <div class="timelineconnector" v-if="!isEnd"/>
        
    </div>
</template>
<script>
export default {
    props:{
        stage:{
            type:Object,
            required:true
        },
        isEnd:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style>
    .timelineevent{
        width: 100px;
        height:100px;
        border-radius: 50%;
        border: 1em solid black;
        margin-top:1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }.timelineitem{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }.timelineconnector{
        margin-top: 1em;
        width: 1px;
        height: 6em;
        border-right: 1em dotted black;
        
    }
</style>    