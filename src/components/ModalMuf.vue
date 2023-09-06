<template>
    <div class="modal-customized">
        <div class="modal-customized-header">Modal Muf <span class="close-modal" @click="close()">x</span></div>
        
        <div class="modal-customized-body">
            <img src="../assets/arrow.png" v-if="page!=1" class="arrow-button prev-button" width="50" height="50" alt="arrow-left" @click="prevPage()" style="transform: rotate(180deg);" />
            <img src="../assets/arrow.png"  v-if="page!=3" class="arrow-button next-button" width="50" height="50" alt="arrow-right" @click="nextPage()" />
            <div class="page-1 page">
                <div class="modal-customized-body-header"></div>
                    <img  class="portada" src="../assets/portada.png" alt="home" width="800" height="550"/>
                    <div class="logo-container">
                    
                        <img class="logo" src="../assets/amg.svg" alt="logo" width="100" height="100"/>
                        <span class="work-name">
                            Software Engineer
                        </span>
                    </div>
                    <div class="mision-work">
                        Aporte en la construcción, elaboración del Software Corporativo de la Compañía, el cual tiene como finalidad automatizar los procesos de los diferentes servicios y áreas de AMG.
                    </div>
                    <div class="social-media-icons">
                        <img style="cursor: pointer;" src="../assets/linkedin.png" alt="" width="50" height="50">
                        <img style="cursor: pointer;" src="../assets/facebook.png" alt="" width="50" height="50">
                        <img style="cursor: pointer;" src="../assets/indeed.png" alt="" width="50" height="50">
                    </div>
            </div>
            <div class="page-2 page">
                <div class="modal-customized-body-header"></div>
                <div class="page-2-body">
                    <section class="page-2-section">
                        <div class="job-autonomy">
                            <img src="../assets/autonomy.png" alt="autonomy" width="400" height="300"/>
                            <div class="autonomy-info">
                                <span class="section-title">Job Autonomy</span>
                                <h2 class="section-value">Baja</h2>
                                <span class="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci, aliquam nemo nam tenetur provident odio minus delectus. Quas nisi assumenda inventore. Quae neque aspernatur officia voluptates quisquam repudiandae magni?</span>
                            </div>
                        </div>
                    </section>
                    <section class="page-2-section">
                        <div class="job-autonomy">
                            <img src="../assets/functions.png" alt="autonomy" width="500" height="400"/>
                            <div class="autonomy-info">
                                <span class="section-title">Functions</span>
                                <h2 class="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim?</h2>
                                <span class="section-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum fuga veritatis soluta voluptatibus maiores voluptatum, voluptas natus nesciunt quasi? Libero.</span>
                               <div v-for="(index) in 4" :key="index" :class="index%2==0?'functions':'functions-reverse'">
                                <br>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, natu<div class="function-dot"></div></div>    
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>
            <div class="page-3 page">
                <div class="modal-customized-body-header"></div>
                <div class="page-2-body">
                    <section class="page-2-section">
                        <div class="job-autonomy">
                          
                            <div class="competitions-info">
                                <span class="section-title">Perfil</span>
                                <h2 class="section-value">Habilidades</h2>
                                <div v-for="(index) in 4" :key="index" :class="index%2==0?'functions':'functions-reverse'">
                                <br>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, natu<div class="function-dot"></div></div>
                            </div>
                            <img src="../assets/abilities.png" alt="abilities" width="400" height="300"/>
                        </div>
                        
                    </section>
                    <section class="page-3-section">
                        <div class="job-autonomy">
                            <img src="../assets/requirements.png" alt="requirements" width="500" height="400"/>
                            <div class="autonomy-info">
                                <span class="section-title">Job Requirements</span>
                                <h2 class="section-value">Job Requirements</h2>
                              
                                <span class="section-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum fuga veritatis soluta voluptatibus maiores voluptatum, voluptas natus nesciunt quasi? Libero.</span>
                               <div v-for="(index) in 4" :key="index" :class="index%2==0?'functions':'functions-reverse'">
                                <br>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, natu<div class="function-dot"></div></div>    
                            </div>
                        </div>
                    </section>
                </div>
            </div>          
        </div>
            
   </div>
</template>
<script>
export default{
    data(){
        return{
            page:1
        }
    },
    methods:{
        nextPage(){
            const actualPage=document.querySelector(`.page-${this.page}`);
            actualPage.style.display="none";
            const nextPage=document.querySelector(`.page-${this.page+1}`);
            nextPage.style.display="flex";
            nextPage.animate([
                {transform: 'translateX(100%)'},
                {transform: 'translateX(0%)'}
            ],{
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
            this.page++;
        },
        prevPage(){
            const actualPage=document.querySelector(`.page-${this.page}`);
            actualPage.style.display="none";
            const prevPage=document.querySelector(`.page-${this.page-1}`);
            prevPage.style.display="flex";
            prevPage.animate([
                {transform: 'translateX(-100%)'},
                {transform: 'translateX(0%)'}
            ],{
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
            this.page--;
        },
        close(){
            this.$emit('close');
        }
    },
    mounted() {
        const actualPage=document.querySelector(`.page-${this.page}`);
        actualPage.style.display="flex";
    },
}
</script>
<style scoped>
.modal-customized{
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0; 
    bottom: 0;
    right: 0;
    left: 0;
    width: 60%;
    height: auto;
    margin: 0 auto;
    min-height: 20em;
    min-width: 50%;
    z-index: 9999 ;
    background: white;
    box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
    -webkit-box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
    -moz-box-shadow: 6px 10px 5px 0px rgba(179,179,179,0.75);
    border-radius: 1em;
    overflow-y: auto;
    overflow-x: auto;
}.modal-customized::-webkit-scrollbar{
    background:#D5DBDB;
    border-radius: 1em;
    width: 1.5em;
    border:5px solid white; 
    border-bottom: 10px;  
}.modal-customized::-webkit-scrollbar:hover{
    background:#CACFD2;
}.modal-customized::-webkit-scrollbar-thumb{
    background: #3498DB;
    border-left: 0.4em solid white;
    border-right: 0.4em solid white;
    border-radius: 1em;
    
    
}
.modal-customized-header{
    width: auto;
    height: 1em;
    background: #85C1E9;
    border-radius: 0.5em 0.5em 0 0;
    padding: 1em 1em;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    word-break: break-all;
    text-align: left;
    font-size: 1.8em;
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
}.modal-customized-body{
    display: block;
    height: auto;
    width: 100%;
    padding:  1em;
    flex-direction: column;
    position: relative;
    
}.modal-customized-body-header{    
    width: 70%;
    margin: 0 25em 0 10px;
    height:2.5em;
    background: #3498DB;
}
.portada{
    margin-top: 10em;
}.logo{
    padding: 1em;
}.work-name{
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 3em;
}.logo-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
}.mision-work{
    font-family: 'Courier New', Courier, monospace;
        text-align: center;
    width: 80%;
    margin: 1.8em auto 1.8em auto
}.social-media-icons{
display:flex;
justify-content: space-between;
margin: 0 auto ;
width: 15%;
padding-bottom: 5em;

}.prev-button{
    position:fixed;
    top:35em;
    left: 23vw;

}.next-button{
    position:fixed;
    top:35em;
    right: 23vw;

}.arrow-button{
    cursor: pointer;
    background:#F2F3F4 ;
    border-radius:50%;
    z-index: 2;

}.arrow-button:hover{
    background:#ECF0F1;
}
.page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position:relative;
    transition: all 0.5s ease-in-out;

}


.page-1{
    display: none;
}.page-2{
    display: none;
}.page-2-body{
 display: flex;
 flex-direction: column;
}.page-2-section-1{
    display: flex;
    flex-direction: column;
}.job-autonomy{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2em;
}.autonomy-info{
    width: 40%;
    word-wrap: break-word;
    
}.section-title{
    font-family: 'Courier New', Courier, monospace;
    color: #3498DB;
}.section-value{
    font-family: 'Courier New', Courier, monospace;
    font-size: 3em;
    padding:0;
    margin:0.1em 0 0.2em 0;

}.section-description{
    font-family: 'Courier New', Courier, monospace;
    font-weight:lighter;
    color:#979A9A;
    word-spacing: 0.2em;
    text-align: justify;
}    
.functions{
    text-align: justify;
    display: flex;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    justify-content: flex-start;
    width: 100%;
    position: relative;
    margin: 0;
}.functions-reverse{
    text-align: justify;
    display: flex;
    flex-direction: row-reverse;
    align-items:center;
    justify-content: flex-end;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    margin: 0;

}
.function-dot {
    border-radius: 50%;
    background-color: #3498DB;
    height:1.8em;
    width:3em;
    font-weight: bold;
    margin: 0 0.5em;
}.competitions-info{
    width: 40%;
    word-wrap: break-word;
    margin-right: 5em;
}.page-3{
    display: none;
}.close-modal{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1em;
    color: black;
    background: #F2F3F4;
    padding: 0.8em 0.5em;
    border-radius: 0.2em;

}.close-modal:hover{
    background: #ECF0F1;
}.modal-customized-body::-webkit-scrollbar{
    background:#D5DBDB;
    border-radius: 1em;
    width: 1.5em;
    border:5px solid white; 
    border-bottom: 10px;  
}.modal-customized-body::-webkit-scrollbar:hover{
    background:#CACFD2;
}.modal-customized-body::-webkit-scrollbar-thumb{
    background: #3498DB;
    border-left: 0.4em solid white;
    border-right: 0.4em solid white;
    border-radius: 1em;
}
</style>