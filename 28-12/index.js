let hey = document.querySelector(".hey");

let element = document.createElement("span");
element.textContent = "span";
let text = document.createTextNode("Hello world");

// console.log(hey.getClientRects());
console.log(hey.getBoundingClientRect());

// console.log(window.scrollX);
// console.log(window.scrollY);
// window.screenY = 1000;

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// window.scrollBy({
//   top: -100,
//   left: 0,
//   behavior: "smooth",
// });

// window.scrollTo() is same as window.scroll()

// window.scroll({
//     top: 1000,
//     left: 0,
//     behavior: "smooth"
// })

// console.log(hey.offsetParent);
// console.log(hey.offsetTop); // distance from the nearest parent positioned element
// hey.scrollTop = 1000;
// console.log(hey.scrollTop); // returns the number that element scrolled | go to that position(from top)
// console.log(hey.clientTop); // width of top porder

// console.log(hey.classList);
// hey.classList.add('Asilbek')
// console.log(hey.classList);
// hey.classList.remove('hey2', 'hey3')
// console.log(hey.classList);
// hey.classList.toggle('hey2')
// console.log(hey.classList);
// console.log(hey.classList.contains('hey'));

// console.log(hey.className);
// hey.className = 'Asilbek'
// console.log(typeof hey.className); // string

// let a = hey.cloneNode(true)
// console.log(a);

// hey.remove()

// hey.insertAdjacentText('afterbegin', 'Asilbek')
// hey.insertAdjacentHTML('afterbegin', '<div>Asilbek</div>')
// hey.insertAdjacentElement('beforeend', document.createElement('div'))

// hey.append(element);
// hey.prepend(element);
// hey.after(element);
// hey.before(element);
// hey.replaceWith(element, text);

// console.log(hey.hasAttribute('id', 'Asilbek'))
// console.log(hey.getAttribute('class'))
// console.log(hey.setAttribute('id', 'Asilbek'))
// hey.removeAttribute('id')
