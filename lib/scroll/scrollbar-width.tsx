export default function scrollbarWidth() {
  if (typeof document === "undefined") {
    return 0;
  }
  const divElement = document.createElement("div");

  divElement.style.position = "absolute";
  divElement.style.top = divElement.style.left = "-999px";
  // 把 div 放到屏幕之外，防止用户看见
  divElement.style.width = divElement.style.height = "100px";
  divElement.style.overflow = "scroll";

  document.body.appendChild(divElement);

  const width = divElement.offsetWidth - divElement.clientWidth;
  document.body.removeChild(divElement);
  return width;
}
