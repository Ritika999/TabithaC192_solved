AFRAME.registerComponent("game-play", {
    schema: {
        elementId: { type: "string", default: "#hurdle1" },    
      },

      update: function () {
        this.isCollided(this.data.elementId);
      },

    isCollided: function(elementId){
      console.log("Function is called")
        const element = document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
            if (elementId.includes("#hurdle")) {
              this.updateLives()
            } else {
              this.gameOver()
            }
          });
    },

    updateLives:function(){
        const element=document.querySelector("#lives")
    var count = element.getAttribute("text"). value
    let currentLives=parseInt(count)
    currentLives-=1
    element.setAttribute("text",{
      value:currentLives
    })
    },

    gameOver: function(){
        const element=document.querySelector("#gameOver")
    element.setAttribute("visible",true)
    }


})