const submitButton = document.getElementById('submit');
const mainSect = document.getElementsByTagName('main');

submitButton.addEventListener('click', () => {
  var color = document.getElementById("color").value;
  if (isColor(color)) {
    mainSect[0].style.backgroundColor = color;
  } else {
    alert("Your color isn't valid. Try again!");
  }
});

function isColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}