/* function loaded() {
    console.log('Loaded whole page')
} */

/* function doSmth() {
    alert('hey')
} */

/* something.onclick = () => {
    console.log('I was clicked');
} */

function onClick(e, t) {
  console.log(e.target, t);
  console.log(e.currentTarget);
}

let el = document.getElementById("something");

// el.addEventListener("click", () => onClick(event, this));
