class Form{
    constructor(){
        this.input=createInput("Name");
        this.button = createButton("Play") 
        this.greeting = createElement('h3')
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);

        //var input = createInput("Name"); 
        this.input.position(130, 160); 

        //var button = createButton('Play'); 
        this.button.position(250, 200); 
        this.button.mousePressed(function(){ 
            //this.input.hide(); 
            this.button.hide(); 
            var name = input.value(); 
            playerCount+=1; 
            player.updateName();
            player.updateCount(playerCount); 
        
        //var greeting = createElement('h3'); 
        this.greeting.html("Hello " + name ) 
        this.greeting.position(130, 160)})
    }
}