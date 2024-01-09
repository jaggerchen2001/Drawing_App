function SprayCanTool(){
    //set an icon and a name for the object

	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.png";

	var points;

	this.draw = function(){
		var r = random(5,10);
        
        //thickness of the spray
        if (sizeSlider.value()<10){
            points = 5;
        }
        
        else if (sizeSlider.value()<20){
            points = 10;
        }
        
        else if (sizeSlider.value()<30){
            points = 15;
        }
        
        else {
            points = 35;
        }
        
        //when the mouse press, draw point
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
                strokeWeight(1);
				point(random(mouseX-sizeSlider.value(), mouseX + sizeSlider.value()), random(mouseY-sizeSlider.value(), mouseY+sizeSlider.value()));
			}
		}
	};
}