<template>
    <div class="timeline-individual">
        <timeline-title :title="'TimeLine From'" :title2="postulantName" 
        :wrapper-cords="wrapperCords" :nth-child-colors="nthChildColors"/>
        <div class="back-icon" @click="closeIndividualTimeline(0)" >
            <img width="30" heigth="30" :src="backUrl" alt="back-icon"/>
        </div>
        <time-line-individual-item class="items"
            :stage="timelineItems" 
            :number-of-paths="timelineItems.length*6<18?19:timelineItems.length*6"
            :welcome-status="welcomeStatus"
            :status-name-position="statusNamePosition"
            :status-date-position="statusDatePosition"
            :flag-position="flagPosition"
            :flag-url="flagUrl"
            :back-url="backUrl"
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
      wrapperCords:{
        type:Object,
        default:()=>({
          top:0,
          left:0
        })
      },
      flagPosition:{
        type:Object,
        default:()=>({
          x:320,
          y:270
        })
      },
      flagUrl:{
            type:String,
            default:require('@/assets/flag-animation.png')
      },
      backUrl:{
        type:String,
        default:require('@/assets/info.svg')
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
    components:{
        TimeLineIndividualItem,
        TimelineTitle
    },
    methods:{
        /**
         * @description: Cierra el componente de la linea de tiempo individual
         * @param {type} 0 global 1 for individual
         */
        closeIndividualTimeline(global){
            
            this.$emit('closeIndividualTimeline',global)
        }
    }
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
    }.back-icon{
        background: white;
        position: absolute;
        right: 10em;
        top:5em;
        border-radius: 1em;
        padding: 1em;
        box-shadow: 10px 10px 5px 0px rgba(110,109,109,0.75);
        -webkit-box-shadow: 10px 10px 5px 0px rgba(110,109,109,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(110,109,109,0.75);
        z-index: 1
    }.back-icon:hover{
        cursor: pointer;
        background: #f5f5f5;
    }
</style>