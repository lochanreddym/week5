class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h1>Hello, Web Components!</h1>';
  }
}

customElements.define('hello-world', HelloWorld);
