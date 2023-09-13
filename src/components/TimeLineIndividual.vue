<template>
    <div class="timeline-individual">
        <time-line-individual-item class="items"
            :stage="timelineItems" 
            :number-of-paths="timelineItems.length*6<18?19:timelineItems.length*6"
            />
    </div>
</template>
<script>
import TimeLineIndividualItem from './TimeLineIndividualItem.vue'
export default {
    props:{
        timelineItems:{
            type:Array,
            default:()=>[
                {
                    applicant_status_id: 2,
                    comment:"Comentario 90",
                    created_at: "2023-09-18 10:00:00",
                    name: "PHONE INTERVIEW"
                },
                {
                    applicant_status_id: 2,
                    comment:"Comentario 90",
                    created_at: "2023-09-18 10:00:00",
                    name: "PHONE INTERVIEW"
                },
                {
                    applicant_status_id: 2,
                    comment:"Comentario 90",
                    created_at: "2023-09-18 10:00:00",
                    name: "PHONE INTERVIEW"
                },
                {
                    applicant_status_id: 2,
                    comment:"Comentario 90",
                    created_at: "2023-09-18 10:00:00",
                    name: "PHONE INTERVIEW"
                },

            ]
        }
    },
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