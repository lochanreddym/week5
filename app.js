import './style.css';
import './components/hello-world.js';
import './lit-components/lit-hello-world.js';
import './components/demo-component.js';
import './components/custom-greeting.js';

const appElement = document.querySelector('#app');

appElement.innerHTML = `
  <hello-world></hello-world>
  <lit-hello-world name="Praneel"></lit-hello-world>

  <div class="field">
    <label>Enter your name:</label>
    <input type="text" placeholder="Your name" />
  </div>

  <demo-component 
    title="Custom Demo Card" 
    image-src="https://picsum.photos/200"
  ></demo-component>

  <custom-greeting message="Welcome to Web Components Lab!"></custom-greeting>
`;
