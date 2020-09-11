export class PlaceholderImage extends HTMLElement {
  constructor() {
    super();

    const width = this.getAttribute("width");
    const height = this.getAttribute("height");

    const wrapper = document.createElement("div");
    wrapper.style.setProperty("position", "relative");

    const placeholder = document.createElement("div");
    placeholder.style.setProperty("width", width + "px");
    placeholder.style.setProperty("height", height + "px");
    placeholder.style.setProperty("background-color", "red");
    placeholder.style.setProperty("position", "absolute");
    placeholder.style.setProperty("top", 0);
    placeholder.style.setProperty("left", 0);
    wrapper.appendChild(placeholder);

    this.appendChild(wrapper);

    const img = new Image();
    img.width = width;
    img.height = height;
    //img.style.setProperty("width", "100%");
    //img.style.setProperty("height", "auto");
    wrapper.appendChild(img);

    img.onload = () => {
      const appear = [{ opacity: 0 }, { opacity: 1 }];
      const disappear = [{ opacity: 1 }, { opacity: 0 }];
      const timing = { duration: 2000, fill: "forwards" };
      placeholder.animate(disappear, timing);
      img.animate(appear, timing);
    };
    placeholder.onclick = () => (img.src = this.getAttribute("src"));
  }
}
