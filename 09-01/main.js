// let btn = document.getElementById("btn");

/* function onClick() {
    console.log('hey 1');
}

function onMouseMove() {
    console.log('hey 2');
} */

/* class Collect {
  handleEvent(event) {
    switch (event.type) {
      case "click":
        console.log("clicked");
        break;
      case "mousedown":
        console.log("mouse down");
        break;
    }
  }
} */

/* class Collect {
  handleEvent(event) {
    let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
    this[method](event);
  }
  
  onClick() {
    console.log("CLICKED");
  }
  onMousedown() {
    console.log("MOUSE DOWN");
  }
}

let collector = new Collect();

btn.addEventListener("click", collector);
btn.addEventListener("mousedown", collector); */

/* function con1() {
    alert('grandparent')
}

function con2() {
    alert('parent')
}

function con3(event) {
    event.stopPropagation()
    // event.stopImmediatePropagation()
    alert('child')
} */

/* function ulClick(event) {
    console.log(event);
    console.log(event.target);
    event.target.style.backgroundColor = 'red'
} */

function submitForm(event) {
    // return false;
    // event.preventDefault()
    console.log(event);
}