document.addEventListener("mousemove", function (e) {
  // to change the cursor gradient behind the cursor
  // var cursor = document.getElementsByClassName("cursor")[0];
  let cursor = document.querySelector(".cursor");
  cursor.style.top = e.clientY + scrollY + "px";
  cursor.style.left = e.clientX + "px";
  // console.log(toString(cursor.style.top));
  var gradientColor = "linear-gradient( 45deg, ";
  gradientColor += "hsl(" + e.clientX + ", 100%, 50%), ";
  gradientColor += "hsl(" + e.clientY + ", 100%, 50%)";
  gradientColor += ")";

  document.documentElement.style.setProperty("--gradient-color", gradientColor);
});

// document.addEventListener("scroll", function (event) {
//   // to change the cursor gradient behind the cursor
//   var verticalScrollPos= window.scrollY + "px";
// });

document.addEventListener("scroll", function (e) {
  // to change the cursor gradient behind the cursor
  let cursor = document.querySelector(".cursor");
  cursor.style.top = e.clientY + scrollY + "px";
  console.log(scrollY);
});
