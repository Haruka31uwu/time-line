<template>
    <div style="position: relative;">
          <div class="timeline" >
            <div class="timeline-options">  
              <div class="timeline-search">
              <input class="timeline-search-input" placeholder="Search Candidate" v-model="inputText"/>
              <div class="timeline-styles">
                <img src="@/assets/paint.svg" alt="logo" width="32" height="32"/>
              </div>
              <div class="filtered-options">
                <div class="filtered-option" v-for="(option,index) in filteredOptions" :key="index" @click="autocompleteName">
                  {{option.name}}
                </div>
              </div>
              
              </div>
             
              <div class="timeline-styles info-icon" @click="openInfoMuf">
                <img src="@/assets/info.svg" alt="logo" width="32" height="32"/>
              </div> 
            </div>
            
            <time-line-item
             v-for="(item,index) in timelineItems.stages" :key="index"
            :stage="item"
            :is-end="index==timelineItems.stages.length-1"
            :index="index+1"
            />

        </div>
        <modal-muf  :mof-data="mofData" :job-title="timelineItems.jobTitleInfo.jobTitle" v-if="showInfoMuf" @close="closeInfoMuf"/>
     
    </div>
</template>
<script>
import TimeLineItem from './TimeLineItem.vue'
import ModalMuf from './ModalMuf.vue'

export default {
    props:{
        timelineItems:{
            type:Object,
            required:false,
            default:()=>({
    "jobTitleInfo": {
        "mofId": 4,
        "jobTitle": "Full Stack",
        "dateStart": "2023-09-08",
        "department": "PARAGON"
    },
    "stages": [
        {
            "name": "CV EVALUATION",
            "description": "Cv evaluation is in progress by the HR department",
            "candidates": []
        },
        {
            "name": "PHONE INTERVIEW ",
            "description": "Calling ",
            "candidates": []
        },
        {
            "name": "IN-PERSON INTERVIEW",
            "description": "In Person Interview is in Progress",
            "candidates": [
                {
                    "name": "Liam Davis",
                    "idCandidate": 20
                },
                {
                    "name": "James Davis",
                    "idCandidate": 8
                }
            ]
        },
        {
            "name": "PHYCOLOGICAL TEST",
            "description": "A Phyco Test is in Progress",
            "candidates": [
                {
                    "name": "Sophia Martinez",
                    "idCandidate": 9
                }
            ]
        },
        {
            "name": "TECHNICAL TEST",
            "description": "A Technical Test is in Progress",
            "candidates": [
                {
                    "name": "Isabella Taylor",
                    "idCandidate": 15
                },
                {
                    "name": "Benjamin Garcia",
                    "idCandidate": 10
                }
            ]
        },
        {
            "name": "WAITING FOR CHIEF APPROVE",
            "description": "Waiting for Chief Approve",
            "candidates": [
                {
                    "name": "Noah Gonzalez",
                    "idCandidate": 14
                }
            ]
        },
        {
            "name": "APPROVE BY CHIEF",
            "description": "Approved",
            "candidates": [
                {
                    "name": "Mia Smith",
                    "idCandidate": 13
                },
                {
                    "name": "Liam Hernandez",
                    "idCandidate": 12
                },
                {
                    "name": "Jane Smith",
                    "idCandidate": 3
                },
                {
                    "name": "Emily Brown",
                    "idCandidate": 5
                }
            ]
        },
        {
            "name": "REJECTED BY CHIEF",
            "description": "Rejected",
            "candidates": [
                {
                    "name": "William Wilson",
                    "idCandidate": 6
                },
                {
                    "name": "Ava Johnson",
                    "idCandidate": 19
                },
                {
                    "name": "John Doe",
                    "idCandidate": 2
                },
                {
                    "name": "Elijah Rodriguez",
                    "idCandidate": 16
                },
                {
                    "name": "Ava Lopez",
                    "idCandidate": 11
                },
                {
                    "name": "Francis Torres",
                    "idCandidate": 1
                },
                {
                    "name": "Olivia Jones",
                    "idCandidate": 7
                },
                {
                    "name": "Olivia Brown",
                    "idCandidate": 17
                },
                {
                    "name": "Michael Johnson",
                    "idCandidate": 4
                },
                {
                    "name": "Charlotte Williams",
                    "idCandidate": 21
                },
                {
                    "name": "Lucas Smith",
                    "idCandidate": 18
                }
            ]
        }
    ],
    "mofData": {
        "skills": [
            {
                "id": 1,
                "marked": true,
                "description": "Empático y capacidad de comunicacion."
            },
            {
                "id": 2,
                "marked": true,
                "description": "Flexible y permeable al cambio."
            },
            {
                "id": 5,
                "marked": true,
                "description": "Vocación de servicio."
            },
            {
                "id": 6,
                "marked": true,
                "description": "Manejo del estrés."
            },
            {
                "id": 8,
                "marked": true,
                "description": "Proactividad y capacidad de resolucion de problemas."
            },
            {
                "id": 11,
                "marked": true,
                "description": "Pensamiento analítico."
            },
            {
                "id": 12,
                "marked": true,
                "description": "Creatividad e innovación."
            }
        ],
        "mission": "aa",
        "authonomy": "low",
        "functions": [
            "aaa"
        ],
        "relation_job": {
            "external": [
                "aa"
            ],
            "internal": [
                "aa"
            ]
        },
        "requirements": {
            "maximum_formation": "sadasd",
            "maximun_education": "xddd",
            "minimun_education": "sadasd",
            "minimun_formation": "asdsadasdas",
            "maximum_experience": "ad",
            "minimum_experience": "asdad"
        }
    }
})
        }
    },
    components:{
        TimeLineItem,
        ModalMuf
    },
    data(){
        return {
            showInfoMuf:false,
            suggestOptions:[{
              name:'Francis Torres',
              id:1
            },
            {
              name:'Abraham Flores',
              id:2
            },
            {
              name:'Jairo Espinoza',
              id:3
            },
            {
              name:'Bill Morales',
              id:4
            }
          ],
          inputText:'',
          filteredOptions:[],
          mofData:{}  
    }
},
methods: {
      openInfoMuf(){
        this.showInfoMuf=true
        const timeline=document.querySelector('.timeline')
        timeline.setAttribute("aria-hidden", "true");
        const timelineOptions=document.querySelector('.timeline-options')
        timelineOptions.style.pointerEvents="none"
        this.mofData=this.timelineItems.mofData

      },
      closeInfoMuf(){
        this.showInfoMuf=false
        const timeline=document.querySelector('.timeline')
        timeline.style.filter="blur(0px)"
        timeline.setAttribute("aria-hidden", "false");
        timeline.style.pointerEvents="auto"
        const timelineOptions=document.querySelector('.timeline-options')
        timelineOptions.style.pointerEvents="auto"
      },
      autocompleteName(e){
        this.inputText=e.target.textContent
        console.log(e.target.value)
      }
    },
watch:{
  inputText(oldValue){
    if(oldValue.length>0){
      this.filteredOptions=this.suggestOptions.filter((option)=>{
        return option.name.toLowerCase().includes(oldValue.toLowerCase())
      })
    }else{
      this.filteredOptions=[]
    } 
}
}
}
</script>
<style scoped>
.timeline{
    width: 100%;
    height:auto;
    max-height: 50em;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    padding:3em 0;
    background: #F2F3F4;
    overflow-y: auto;
    position: relative;
    padding:2em 0;
}.timeline-search{
    width: 15em;
    min-width: 2em;
    position: relative;
    display: flex;
}.timeline-search-input{
  display: inline;
  width: 100%;
  min-width: 20em;
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
  display: inline;
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
  position: sticky;
  top:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width:90%;
  margin:0 auto;
  z-index: 99;

}.info-icon{
  position: sticky;
  width: 2em;
  right: vw;
  top:0;
}.filtered-options{
  background: white;
  width: 100%;
  height: auto;
  border-radius: 1em;
  position:absolute;
  margin-top: 3em;
  box-shadow: 10px 10px 5px 0px rgba(179,179,179,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(179,179,179,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(179,179,179,0.75);
}.filtered-option{
  border: 1px solid #000;
  padding: 2px 0;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}.filtered-option:hover{
  background: #F2F3F4;
  font-weight: bold;
  animation: 0.5s ease-in-out 0s 1 normal none running bounce;
}
@keyframes bounce{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}
.filtered-option:last-child{
  border-radius: 0.5em;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}.filtered-option:first-child{
  border-radius: 0.5em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>

