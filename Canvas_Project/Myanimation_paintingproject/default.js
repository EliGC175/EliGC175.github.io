const BUTTON_SIZE = 50;
const DIVIDER_Y = 120;
const PAINT_RADIUS = 12;

let color = "black";

function main(){
    
    initScreen();
    
    mouseClickMethod(selectColor);
	mouseDragMethod(paint);
}

function paint(e){
    let x = e.getX();
    let y = e.getY();
    
  
    if (y > DIVIDER_Y + PAINT_RADIUS) {
    	let circle = new Circle(PAINT_RADIUS);
    	circle.setColor(color);
    	circle.setPosition(x, y);
    	add(circle);
    }
}

function selectColor(e) {
    let obj = getElementAt(e.getX(), e.getY());
    
    if (obj != null && obj.type == "Rectangle") {
        color = obj.getColor();
    }
}


function initScreen() {
    let palet = new Rectangle(getWidth(),DIVIDER_Y);
    palet.setPosition(0,0);
    palet.setColor("#C8A69B");
    add(palet);
    
    
    let text = new Text("Click to change colors!");
    text.setPosition(0, text.getHeight());
    add(text);
    
    addColorButtons("#F44336", "#FFEE58", "#2196F3", "#689F38","#F8BBD0", "#F5F5F5", "#37474F");
    
    let divider = new Line(0, DIVIDER_Y, getWidth(), DIVIDER_Y);
    add(divider);
}

function addColorButtons(color1, color2, color3, color4, color5, color6, color7) {
    let button1 = new Rectangle(BUTTON_SIZE, BUTTON_SIZE);
    button1.setPosition(25, 50);
    button1.setColor(color1);
    add(button1);
    
    let button2 = new Rectangle(BUTTON_SIZE, BUTTON_SIZE);
    button2.setPosition(75, 50);
    button2.setColor(color2);
    add(button2);
    
    let button3 = new Rectangle(BUTTON_SIZE, BUTTON_SIZE);
    button3.setPosition(125, 50);
    button3.setColor(color3);
    add(button3);
    
    let button4 = new Rectangle(BUTTON_SIZE, BUTTON_SIZE);
    button4.setPosition(175,50);
    button4.setColor(color4);
    add(button4);
    
    let button5 = new Rectangle(BUTTON_SIZE, BUTTON_SIZE);
    button5.setPosition(225,50);
    button5.setColor(color5);
    add(button5);
    
    let button6 = new Rectangle(BUTTON_SIZE, BUTTON_SIZE);
    button6.setPosition(275,50);
    button6.setColor(color6);
    add(button6);
    
    let button7 = new Rectangle(BUTTON_SIZE, BUTTON_SIZE);
    button7.setPosition(325,50);
    button7.setColor(color7);
    add(button7);
    
}

main();
