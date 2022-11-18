const outerCursor = document.querySelector("#outer-cursor");
const innerCursor = document.querySelector("#inner-cursor");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  setTimeout(() => {
    innerCursor.style.left = x + 11 + "px";
    innerCursor.style.top = y + 11 + "px";
  }, 70);

  setTimeout(() => {
    outerCursor.style.left = x + "px";
    outerCursor.style.top = y + "px";
  }, 140);
});
