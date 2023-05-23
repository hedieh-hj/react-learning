class Rectangle {
    constructor(width, height) { //baray sakhtan vorodihay class 
        this.width = width // ina dar ekhtiar kol class hastn ba in kar
        this.height = height
    }

    render() { //sakhatn yek func jadid - faghat name benevisim
        console.log(this.width, this.height);
    }
}



// var obj = new Rectangle(10, 20);

// obj.render(); //== console.log(obj.height, obj.width);


class ColoredRectangle extends Rectangle { //child  + extends + parent 
    constructor(width, height, color) { // input ha chie ? hame ro mikhaym hata parent 
        super(width, height) //ers bari az class parent 
        this.color = color
    }

    show() {
        return "<div style='width:" + this.width + "px; height:" + this.height + "px; background:" + this.color + "'></div>"
    }
}

var object = new ColoredRectangle(200, 100, "purple");
document.getElementById("mydiv").innerHTML = object.show();

var object2 = new ColoredRectangle(400, 300, "blue");
document.getElementById("mydiv2").innerHTML = object2.show();

/////////////////////////////////////////////////////////////////////////////
//session 5
function test(x) {
    console.log("this is old version syntax function.", x);
}
//arrow functions
const test2 = (x) => {
    console.log("this is newer version syntax sunction.", x);
}

//baray 1 input , return ham mishe nanevesht faghat action nevesht ...x => x*2
const test = x => console.log("this is newer version syntax sunction.", x);