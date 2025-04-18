class CustomGreeting extends HTMLElement {
  connectedCallback() {
    const message = this.getAttribute('message') || 'Hello!';
    this.innerHTML = \`<h2 style="color: darkcyan;">\${message}</h2>\`;
  }
}

customElements.define('custom-greeting', CustomGreeting);
