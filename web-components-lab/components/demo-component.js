class DemoComponent extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Demo Title';
    const imageSrc = this.getAttribute('image-src') || '';
    this.innerHTML = \`
      <div>
        <h3>\${title}</h3>
        <img src="\${imageSrc}" alt="Demo image" width="150" />
      </div>
    \`;
  }
}

customElements.define('demo-component', DemoComponent);
