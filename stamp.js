
function StampTool(){
	//set an icon and a name for the object
	this.name = "StampTool";
	this.icon = "assets/stamp.jpg";
    
    let bushB = false;
    let UOLB = false;
    var UOLButton;
    
    this.draw = function(){
        
        //if the mouse is pressed and bushButton is pressed
        //draw bush image according to slider value,
        if(mouseIsPressed && bushB && !UOLB){
            image(bush,mouseX,mouseY,sizeSlider.value()*5,sizeSlider.value()*5);
        }
        
        //if the mouse is pressed and UOLbutton is pressed
        //draw UOL image according to slider value,
        if(mouseIsPressed && UOLB && !bushB){
            image(UOL,mouseX,mouseY,sizeSlider.value()*10,sizeSlider.value()*5);
        }
          
    }
        
    this.populateOptions = function() {
        //create bushButton
        select(".options").html(
			"<button id='bush'>bush</button>");
        
        //if bushButton is clicked, return bushB = true
        select("#bush").mouseClicked(function() {
			bushB = true;
            UOLB = false;
			}      
		)
        
        //create UOLButton
        UOLButton = createButton('UOL');
        UOLButton.parent(select(".options"));
        UOLButton.style("margin-left","5px");
        
        //if UOLButton is clicked, return UOLB = true
        UOLButton.mouseClicked(function(){
            UOLB = true;
            bushB = false;  
        });
		 	
    } 
    
    this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};
		
    
}