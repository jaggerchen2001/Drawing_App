
function ShapeTool(){
	//set an icon and a name for the object
	this.icon = "assets/shape.png";
	this.name = "ShapeTool";
    
    let Circlebutton = false;
    let square = false;
    var squareButton;
    let triangleB = false;
    var triangleButton;
    
    
	this.draw = function(){
		//if the mouse is pressed and Circlebutton is pressed
        //draw circle according to slider value,
		if(mouseIsPressed && Circlebutton && !square && !triangleB){
			noFill();
            strokeWeight(1);
            ellipse(mouseX,mouseY,sizeSlider.value()*5,sizeSlider.value()*5);
			}
        
        //if the mouse is pressed and squarebutton is pressed
        //draw square according to slider value,
        else if(mouseIsPressed && square && !Circlebutton && !triangleB){
			noFill();
            strokeWeight(1);
            rect(mouseX,mouseY,sizeSlider.value()*5,sizeSlider.value()*5);
        }
       
        //if the mouse is pressed and trianglebutton is pressed
        //draw triangle according to slider value,
        else if(mouseIsPressed && triangleB && !Circlebutton && !square){
			noFill();
            strokeWeight(1);
            triangle(mouseX,mouseY,
                     mouseX-3*sizeSlider.value(),mouseY+3*sizeSlider.value(),
                     mouseX+3*sizeSlider.value(),mouseY+3*sizeSlider.value());           
			}
		}
    
    

    this.populateOptions = function() {
        //create CircleButton
		select(".options").html(
			"<button id='circle'>circle</button>");
        
        //create squareButton
        squareButton = createButton('square');
        squareButton.parent(select(".options"));
        squareButton.style("margin-left","5px");
        
        //when squareButton is clicked, return square = true
        squareButton.mouseClicked(function() {
            square = true;
            Circlebutton = false;
            triangleB = false;
        });
        
        //create triangleButton
        triangleButton = createButton('triangle');
        triangleButton.parent(select(".options"));
        triangleButton.style("margin-left","5px");
        
        //when triangleButton is clicked, return triangleB = true
        triangleButton.mouseClicked(function(){
            triangleB = true;
            square = false;
            Circlebutton = false;      
        });
		
        //when CircleButton is clicked, return Circlebutton = true
		select("#circle").mouseClicked(function() {
			Circlebutton = true;
            square = false;
            triangleB = false;
			}      
		);
    
    };
    
        this.unselectTool = function() {
		//clear options
		select(".options").html("");

	};
    
	}
    


