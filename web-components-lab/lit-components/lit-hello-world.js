import { LitElement, html } from 'https://unpkg.com/lit@2.0.0/index.js?module';

class LitHelloWorld extends LitElement {
  static properties = {
    name: { type: String }
  };

  constructor() {
    super();
    this.name = 'Lit User';
  }

  render() {
    return html\`<p>Hello from Lit, \${this.name}!</p>\`;
  }
}

customElements.define('lit-hello-world', LitHelloWorld);
