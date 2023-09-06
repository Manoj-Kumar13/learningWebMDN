function createHeading(index) {
  const body = document.body;
  const h1 = document.createElement("h1");
  h1.innerText = "Hello World " + (index + 1);
  body.appendChild(h1);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    createHeading(index);
  });
});
