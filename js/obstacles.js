AFRAME.registerComponent("obstacles",{

    init: function (){
        this.createObstacle()
        for(var i=1; i<=10; i++){

            var id = `hurdle${i}`;

            var posX = Math.random() * 900 + -900;
            var posY = 0 ;
            var posZ = Math.random() * 30000 + -8000;

            var position = { x: posX, y: posY, z: posZ };

            this.createObstacle(id,position)
        }
    },





    createObstacle: function (id,position) {
        var pirateMap=document.querySelector("#pirate")
        var obstaclesEl=document.createElement("a-entity")

    obstaclesEl.setAttribute("id", id);
    obstaclesEl.setAttribute("position", position);
    obstaclesEl.setAttribute("scale", { x: 60, y: 60, z: 60 });

    obstaclesEl.setAttribute("gltf-model","assets/obstacles_guys_animated/scene.gltf")

    obstaclesEl.setAttribute("animation-mixer", {});

    obstaclesEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 20,
      });

      pirateMap.appendChild(obstaclesEl)
    }
})