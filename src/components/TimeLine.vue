<template>
    <div style="position: relative;">
          <div class="timeline" >
            <div class="timeline-options">  
              <div class="timeline-search">
              <input class="timeline-search-input" placeholder="Search Candidate"/>
              
              </div>
              <div class="timeline-styles">
                <img src="../assets/paint.svg" alt="logo" width="32" height="32"/>
              </div>
              
            </div>
            <div class="timeline-styles info-icon" @click="openInfoMuf">
                <img src="../assets/info.svg" alt="logo" width="32" height="32"/>
              </div> 
            <time-line-item
             v-for="(item,index) in timelineItems.stages" :key="index"
            :stage="item"
            :is-end="index==timelineItems.stages.length-1"
            :index="index+1"
            />

        </div>
        <modal-muf  v-if="showInfoMuf" @close="closeInfoMuf"/>
     
    </div>
</template>
<script>
import TimeLineItem from './TimeLineItem.vue'
import ModalMuf from './ModalMuf.vue'

export default {
    components:{
        TimeLineItem,
        ModalMuf
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
                
            },
            showInfoMuf:false
    }
},methods: {
      openInfoMuf(){
        this.showInfoMuf=true
      },
      closeInfoMuf(){
        this.showInfoMuf=false
      }
    },
}
</script>
<style scoped>
.timeline{
    width: 100%;
    height:100%;
    max-height: 1000px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    padding:3em 0;
    background: #F2F3F4;
    overflow-y: auto;
    position: relative;
}.timeline-search{
    width: 15em;
    min-width: 2em;
}.timeline-search-input{
  display: inline;
  width: 100%;
  padding: 0.5em;
  border-radius: 0.5em;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
-webkit-box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
-moz-box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
}.timeline-search-input:hover{
  font-weight: bold;
  border:3px solid #000;
  
}.timeline-styles{
  background: white;
  padding: 0 0.2em;
  border-radius: 0.5em;
  width: auto;
  height: auto;
  margin-left: 2em;
  margin-top: 0.3em;
  box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
-webkit-box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
-moz-box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
cursor: pointer;
  
}.timeline-styles:hover{
  background: #F2F3F4;

}
.timeline-options{
  position: fixed;
  top:5em;
  left: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:auto;
  z-index: 2;

}.info-icon{
  position: fixed;
  right: 7em;
  top:5em;
}
</style>

