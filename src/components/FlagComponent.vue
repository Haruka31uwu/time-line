<template >
    <div>

        <!-- create a canvas the same size
            as the spritesheet -->
        <canvas width="260px" height="280px">
        </canvas>
<!-- create the image and add it
     to the canvas.
     open main.js to see how we do it! -->
    </div>
</template>
<script>
import flag from '../assets/flag.webp'
export default {
    data(){
        return {
            spriteWidth: 55,
            spriteHeight: 100,
            borderWidth: 20,
            spaceWidth: 25,
            row:0,
            col:0,
            context: null,
            canvas: null,
            image: null,
            spriteright1: null,
            spriteright2: null,
            spriteright3: null,
            spriteleft1: null,
            spriteleft2: null,
            spriteleft3: null,
            walkCycleRight: [],
            walkCycleLeft: [],
            frameIndex: 0,
            frame:null,
            x:0,
            y:0,
            direction: 'right',
            sprite:flag
        }
    },
    mounted(){
        this.spriteright1 = this.spritePosition(0,0);
        this.spriteright2 = this.spritePosition(0,1);
        this.spriteright3 = this.spritePosition(0,2);
        this.spriteleft1 = this.spritePosition(1,0);
        this.spriteleft2 = this.spritePosition(1,1);
        this.spriteleft3 = this.spritePosition(1,2);
        this.walkCycleRight.push(this.spriteright1);
        this.walkCycleRight.push(this.spriteright2);
        this.walkCycleRight.push(this.spriteright3);
        this.walkCycleRight.push(this.spriteright2); 
        this.walkCycleLeft.push(this.spriteleft1);
        this.walkCycleLeft.push(this.spriteleft2);
        this.walkCycleLeft.push(this.spriteleft3);
        this.walkCycleLeft.push(this.spriteleft2);

        this.canvas = document
            .querySelector('canvas');
        this.context = this.canvas
                    .getContext('2d');

        var spriteSheetURL = this.sprite;
        // create a new image from the spritesheet
        this.image = new Image();
        this.image.src = spriteSheetURL;
        this.image.crossOrigin = true;
        // once the spritesheet loads,
        // draw it on the canvas
        this.image.onload = () => {
        this.context.drawImage(
        this.image,
        0,
        0,
        this.canvas.width,
        this.canvas.height
    );
    // start the animation
    setInterval(() => {
        this.animate();
    }, 200);
}

    },
    methods:{
        spritePosition(row,col){
         
            return {
                x:
                    (this.borderWidth+col*(this.spriteWidth+this.spaceWidth))
                ,
                y:(
                    this.borderWidth+row*(this.spriteHeight+this.spaceWidth)
                ),
            }
        },
        animate(){
            if(this.frameIndex == this.walkCycleRight.length){
                this.frameIndex = 0;
            }
            
            if(this.x > this.canvas.width){
                this.frame = this.walkCycleLeft[this.frameIndex];
                this.x-=5;
            }else {
                this.x+=5;
                this.frame = this.walkCycleRight[this.frameIndex];
            }
            if(this.direction == 'right'){
                this.frame = this.walkCycleRight[this.frameIndex];
                this.x+=5;
                if(this.x > this.canvas.width-this.spriteWidth){
                    this.direction = 'left';
                }
            }else{
                this.frame = this.walkCycleLeft[this.frameIndex];
                this.x-=5;
                if(this.x < 0){
                    this.direction = 'right';
                }
            }
            
            this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
            this.context.drawImage(
                this.image,
                this.frame.x,
                this.frame.y,
                this.spriteWidth,
                this.spriteHeight,
                0,
                0,
                this.spriteWidth,
                this.spriteHeight
            );
            this.frameIndex++;
        }
    }
}
</script>
<style >
canvas {
    left: 0;
    right: 0;
    width: 440px;
    height: 300px;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    background: #232323;
}
</style>