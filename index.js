'use strict';

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: inline-block;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    opacity: 0;
  }
</style>`;

class PlaceholderImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const src = this.getAttribute('src');
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');
    const color = this.getAttribute('color');

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const image = new Image();
    image.width = parseInt(width);
    image.height = parseInt(height);
    image.onload = () => {
      image.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
        fill: 'forwards',
      });
    };
    this.shadowRoot.appendChild(image);

    this.style.background = color;
    image.src = src;
  }
}
customElements.define('placeholder-image', PlaceholderImage);

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementsByTagName('main')[0];
  const scrollIcon = document.getElementById('scrollIcon');

  scrollIcon.addEventListener('click', () =>
    main.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  );
});
