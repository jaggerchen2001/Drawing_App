
function SelectTool(){
//set an icon and a name for the object
	this.name = "SelectTool";
	this.icon = "assets/select.jpg";
    
    var selectButton;
    let selectMode = 0;
    var selectedPixels;
    var selectedArea = {x: 0, y: 0, w: 0, h: 0};

    this.draw = function(){
        
        if(selectMode == 1)
            {
                //draw selectedArea
                updatePixels();
                fill(255,0,0,50);
                noStroke();
                rect(selectedArea.x,selectedArea.y,selectedArea.w,selectedArea.h);               
            }
       
        else if(selectMode == 2 && mouseIsPressed)
            {
                //draw selectedPixels
                image(selectedPixels,mouseX,mouseY);
            }               
    };
    
      
    this.mousePressed = function()
    {
        if(selectMode == 1)
            {
                selectedArea.x = mouseX;
                selectedArea.y = mouseY;  
                               
            }                    
    }
     
    
    this.mouseDragged = function()
    {
        if(selectMode == 1)
            {
                var w = mouseX - selectedArea.x;
                var h = mouseY - selectedArea.y;
        
                selectedArea.w = w;
                selectedArea.h = h; 
            }
    }
    
    
        this.populateOptions = function() {
         
         selectButton = createButton('select area');
         selectButton.parent(select(".options"));
                      
         selectButton.mousePressed(function()
        {
          if(selectMode == 0){
            selectMode += 1;
            selectButton.html("cut");
            loadPixels();//store current frame
          }
             
        else if(selectMode == 1){
            selectMode += 1;
            selectButton.html("end paste");
            updatePixels();//update frame
            selectedPixels = get(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);//get image
            
            fill(255);
            noStroke();
            rect(selectedArea.x,selectedArea.y,selectedArea.w,selectedArea.h);
            stroke(0);
        }
             
        else if(selectMode == 2){
            selectMode = 0;
            loadPixels();
            selectedArea = {x: 0, y: 0, w: 0, h: 0};
            selectButton.html("select area");
        }            
       })      
     }
       
      this.unselectTool = function() {
		//clear options
        select(".options").html("");
        selectMode = 0;
        stroke(0);
    }
}