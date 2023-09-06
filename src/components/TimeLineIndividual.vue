<template>
    <div class="timeline-individual">
        <time-line-individual-item class="items" v-for="(stage,index) in 1" :key="index" :stage="stage" :index="index"/>
    </div>
</template>
<script>
import TimeLineIndividualItem from './TimeLineIndividualItem.vue'
export default {
    components:{
        TimeLineIndividualItem
    },
}
</script>
<style>
    .timeline-individual{
        width: auto;
        height: auto;
        position: relative;


    }.items{

        padding: 0;

    }
</style>