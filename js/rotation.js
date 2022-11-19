AFRAME.registerComponent("player-movement",{
   
    init: function(){
        window.addEventListener("keydown",(e)=>{
            
            var Playerposition = this.el.getAttribute("position")

            if(e.key === "ArrowRight"){
                console.log("Right arrow pressed")    
                Playerposition.x += 0.6
                this.el.setAttribute("position",Playerposition)
            }
            if(e.key === "ArrowLeft"){
                Playerposition.x -= 0.6
                this.el.setAttribute("position",Playerposition)
            }
        })
    },
})