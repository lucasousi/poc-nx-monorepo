export class SharedButtonElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button class="btn btn-dark">Web Component Button</button>`;
  }
}

customElements.define('shared-button', SharedButtonElement);
