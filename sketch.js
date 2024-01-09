//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var sizeSlider;
var bush;
var UOL;

function preload() {
    bush = loadImage('./assets/bushTransparent.png');// load bush image
    UOL = loadImage('./assets/UOL.png');// load UOL logo image
}


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
    var canvasW = canvasContainer.size().width;
    var canvasH = canvasContainer.size().height
   
	var c = createCanvas(canvasW,canvasH );
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
    
    //create size slider
    sizeSlider = createSlider(1,50,1);
    sizeSlider.parent("#sizeSlider");
    
    
    

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new EraserTool());
    toolbox.addTool(new StampTool());
    toolbox.addTool(new ShapeTool());
    toolbox.addTool(new SelectTool());
    toolbox.addTool(new TextTool());
	background(255);
    
}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}

function mousePressed(){  
    //call mousePressed function
    if(toolbox.selectedTool.hasOwnProperty("mousePressed")){
        toolbox.selectedTool.mousePressed();
    }   
}

function mouseDragged(){ 
    // call mouseDragged function
    if(toolbox.selectedTool.hasOwnProperty("mouseDragged")){
        toolbox.selectedTool.mouseDragged();
    }   
}


