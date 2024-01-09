function TextTool(){
//set an icon and a name for the object
	this.name = "TextTool";
	this.icon = "assets/Text.png";
    var inp;

    
    this.draw = function(){
        //create textbox
        inp = createInput('');
        inp.position(100,100);
        
    }
    
    this.unselectTool = function() {
		//clear options
		select(".options").html("");
	}
    
    
}