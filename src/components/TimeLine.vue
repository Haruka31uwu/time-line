<template>
    <div >
        <div class="timeline" >
            <time-line-item
             v-for="(item,index) in timelineItems.stages" :key="index"
            :stage="item"
            :is-end="index==timelineItems.stages.length-1"
            :index="index+1"
            />  
        </div>
     
    </div>
</template>
<script>
import TimeLineItem from './TimeLineItem.vue'

export default {
    components:{
        TimeLineItem
    },
    data(){
        return {
            timelineItems:{
                jobTitleInfo:{
                    jobTitle:"Frontend Developer",
                    department:"Paragon",
                    mufId:"MUF-123",
                    dateStart:"01/01/2020",
                },
                stages:[
                    {
                        name:"CV Evaluation",
                        candidates:[
                            {
                              idCandidate:1,
                              name:"Francis Torres"
                            },
                            {
                              idCandidate:2,
                              name:"Abraham Flores"
                            },
                        ]
                    },
                    {
                        name:"Assesment In Progress",
                        candidates:[
                            {
                              idCandidate:3,
                              name:"Jairo Espinoza"
                            },
                            {
                              idCandidate:4,
                              name:"Bill Morales"
                            },
                        ]
                    },
                    {
                        name:"Presencial Interview",
                        candidates:[
                            {
                              idCandidate:5,
                              name:"Roger Anyosa"
                            },
                            {
                              idCandidate:6,
                              name:"Paulo Ugarte"
                            },
                        ]
                    },
                    {
                        name:"Psychological Test",
                        candidates:[
                            {
                              idCandidate:7,
                              name:"Anderson Vallejo"
                            },
                            {
                              idCandidate:8,
                              name:"Kevin Paredes"
                            },
                        ]
                    },
                    {
                        name:"Technical Interview",
                        candidates:[
                            {
                              idCandidate:9,
                              name:"Christian CasaFranca"
                            },
                            {
                              idCandidate:10,
                              name:"Ommar Paredes"
                            },
                        ]
                    },
                    {
                        name:"Pending Chief Approval",
                        candidates:[
                            {
                              idCandidate:11,
                              name:"Brayan Mendoza"
                            },
                            {
                              idCandidate:12,
                              name:"Jhon Landeo"
                            },
                        ]
                    },
                    {
                        name:"Approved By Chief",
                        candidates:[
                            {
                              idCandidate:13,
                              name:"Carolina Villegas"
                            },
                        ]
                    },
                    {
                        name:"Rejected By Ceo",
                        candidates:[
                            {
                              idCandidate:14,
                              name:"Brigitte Mendez"
                            },
                        ]
                    }
                ],
                
            }
    }
}
}
</script>
<style scoped>
.timeline{
    width: 90%;
    height:100%;
    min-height: 1200px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    padding:2em 0;
    background: #F2F3F4;
}
</style>

