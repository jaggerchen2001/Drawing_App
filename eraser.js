
function EraserTool(){
//set an icon and a name for the object
	this.name = "EraserTool";
	this.icon = "assets/eraser.jpg";
    
    var previousMouseX = -1;
	var previousMouseY = -1;    
    
    
    this.draw = function(){
        

        if(mouseIsPressed){
    		
            if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
        
        
        else{
                //thickness of the line 
                strokeWeight(sizeSlider.value()); 
                stroke(255);
				line(previousMouseX, previousMouseY, mouseX, mouseY); //draw the line
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
        }
        
        else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
        
        //back to black colour, I wrote this
        stroke(0);
        noFill();
    }
}