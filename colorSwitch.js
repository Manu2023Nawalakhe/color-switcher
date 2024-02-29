const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

//here apply loop on the all button use forEach() because NodeList are support to the forEach() loop
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === "gray") {
      body.style.backgroundColor = event.target.id; //here directly use id because we already allocatin a color in css to that purticular button
    }
    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
