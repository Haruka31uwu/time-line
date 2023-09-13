<template>
    <div class="timeline-individual">
        <timeline-title :title="'TimeLine From'" :title2="postulantName"/>
        <time-line-individual-item class="items"
            :stage="timelineItems" 
            :number-of-paths="timelineItems.length*6<18?19:timelineItems.length*6"
            :welcome-status="welcomeStatus"
            :status-name-position="statusNamePosition"
            :status-date-position="statusDatePosition"
            />
    </div>
</template>
<script>
import TimeLineIndividualItem from './TimeLineIndividualItem.vue'
import TimelineTitle from './TimelineTitle.vue';
export default {
    props:{
        timelineItems:{
            type:Array,
            default:()=>[
                {
                    applicant_status_id: 7,
                    comment:"Comentario 90",
                    created_at: "2023-09-18 10:00:00",
                    name: "PHONE INTERVIEW"
                },
                {
                    applicant_status_id: 8,
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
      postulantName:{
        type:String,
        default:'Francis Torres'
      },
      
    },
    components:{
        TimeLineIndividualItem,
        TimelineTitle
    },
}
</script>
<style scoped>
    .timeline-individual{
        width: auto;
        height: auto;
        position: relative;


    }.items{

        padding: 0;

    }.timeline-title{
        background: white;
    }
</style>