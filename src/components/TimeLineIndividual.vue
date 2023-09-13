<template>
    <div class="timeline-individual">
        <time-line-individual-item class="items"
            :stage="timelineItems" 
            :number-of-paths="timelineItems.length*6"
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
                    applicant_status_id: 1,
                    comment:"Comentario 100",
                    created_at: "2023-09-29 10:00:00",
                    name: "CV EVALUATION"
                },
                {
                    applicant_status_id: 3,
                    comment: "Comentario 34",
                    created_at: "2023-11-18 10:00:00",
                    name: "IN-PERSON INTERVIEW"
                },
                {
                    applicant_status_id: 7,
                    comment: "Comentario 34",
                    created_at: "2023-11-18 10:00:00",
                    name: "APPROVED BY CHIEF"
                },
                {
                    applicant_status_id: 10,
                    comment: "Comentario 34",
                    created_at: "2023-11-18 10:00:00",
                    name: "xd BY CHIEF"
                },
                {
                    applicant_status_id: 8  ,
                    comment: "Comentario 34",
                    created_at: "2023-11-18 10:00:00",
                    name: "Funado xd"
                },
                {
                    applicant_status_id: 11,
                    comment: "Comentario 34",
                    created_at: "2023-11-18 10:00:00",
                    name: "Funado xd"
                },
                {
                    applicant_status_id: 13,
                    comment: "Comentario 34",
                    created_at: "2023-11-18 10:00:00",
                    name: "Mejor No vengas"
                }
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