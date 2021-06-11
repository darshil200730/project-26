class Ground {
    constructor(x,y,w,h){
        var features = {
            isStatic : true
          
          }
          this.gnd = Bodies.rectangle (x,y,w,h,features)
          World.add(myWorld,this.gnd)
          this.w = w
          this.h = h
         // console.log(this.gnd)
    }
    display()
    {
        fill ("brown")
        rectMode(CENTER)
 rect(this.gnd.position.x,this.gnd.position.y,this.w,this.h)
    }
}