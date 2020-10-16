let h1 = document.querySelector("h1");
h1.innerHTML = "RGB Color Slider";
let p = document.querySelector("#hexaColor");

function newValue() {
  let red = document.getElementById("redColor").value;
  let inputRed = document.getElementById("redNumber");
  inputRed.value = red;

  let green = document.getElementById("greenColor").value;
  let inputGreen = document.getElementById("greenNumber");
  inputGreen.value = green;

  let blue = document.getElementById("blueColor").value;
  let inputBlue = document.getElementById("blueNumber");
  inputBlue.value = blue;

  function changeColor() {
    var rgb = `rgb(${red}, ${green}, ${blue})`;
    var Color = document.getElementById("finalColor");
    Color.style.backgroundColor = rgb;
  }
  function decimalToHexString(number) {
    var integer = parseInt(number, 10);
    if (integer < 0) {
      integer = 0xffffffff + integer + 1;
    }

    return integer.toString(16).toUpperCase();
  }
  p.textContent =
    "#" +
    decimalToHexString(red) +
    decimalToHexString(green) +
    decimalToHexString(blue);

  changeColor();
}
