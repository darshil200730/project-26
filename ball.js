class Ball {
    constructor(x,y,r){
        var features = {
            isStatic : false, restitution:1
          
          }
          this.ball = Bodies.circle (x,y,r,features)
          World.add(myWorld,this.ball)
          this.r = r
          this.paperimage=loadImage("paper.png")
    }
    display()
    {       
        push ()
        translate (this.ball.position.x , this.ball.position.y)
        rotate (this.ball.angle)
        imageMode(CENTER)
 image(this.paperimage,0,0,50,50)
 pop ()
    }
}