class Player {
    constructor(){
        this.name = null;
    this.distance = 0;
    this.index = null;
    this.rank = null;
    }

    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",function(data){
            playerCount= data.val();
        })
    }
    updateCount(count){
database.ref("/").update({
    playerCount: count 
})
    }
    update(){
var playerIndex = "players/player"+this.index;
database.ref(playerIndex).set({
    name: this.name,
    distance : this.distance 
    
});

    }
 static  getPlayerInfo(){
var playerInforef = database.ref("players");
playerInforef.on("value",(data) =>{
    allPlayers = data.val()
});
    }
  static  deletePlayers(){
        var playersNodes = "players";
        database.ref(playersNodes).set(0);

    }

    getCarsatend(){
        var carsatend = database.ref('CarsAtEnd');
        carsatend.on("value",(data)=>{
            this.rank = data.val();
    })
}
 static updateCarsatend(rank){
    database.ref('/').update({
        CarsAtEnd:rank

    })
}
}
