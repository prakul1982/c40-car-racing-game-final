class Form {
    constructor(){
        this.input = createInput("your name");
        this.button = createButton('enter');
        this.greeting = createElement('h3');
        this.reset = createButton('reset');
    }
display(){
    var title = createElement('h2');
    title.html("car racing game ");
    title.position(displayWidth/2-40,0);
  this.input.position(displayWidth/2-30,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.reset.position(displayWidth-100,20);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name =  this.input.value();
    playerCount = playerCount+1
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("hello  " + player.name)
   this.greeting.position(displayWidth/2-70,displayHeight/4);
 })

 this.reset.mousePressed(()=>{
player.updateCount(0);
game.update(0);
Player.deletePlayers();

 })

 

}

 hide (){
     this.greeting.hide()
     this.button.hide()
     this.input.hide()
 }
}