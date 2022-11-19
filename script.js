const outerCursor = document.querySelector("#outer-cursor");
const innerCursor = document.querySelector("#inner-cursor");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  setTimeout(() => {
    innerCursor.style.left = x - 4 + "px";
    innerCursor.style.top = y - 4 + "px";
  }, 70);

  setTimeout(() => {
    outerCursor.style.left = x - 15 + "px";
    outerCursor.style.top = y - 15 + "px";
  }, 140);
});
