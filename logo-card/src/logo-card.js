import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class LogoCard extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    paragraphText: { type: String }
  }

  static styles = css`
  .duplicator:hover {
    background-color: green;
  }
  .duplicator:focus {
    background-color: green;
  }
  
  .card {
    width: 350px;
    border: 2px solid black;
    text-align: center;
  }
  h1 {
    margin-top: 8px;
    margin-left: 32px;
    margin-right: 32px;
  }
  img {
    display: block;
    margin-left: 120px;
    margin-right: auto;
    margin-top: 16px;
    width: 400px;
  }
  p {
    margin-top: 16px;
    margin-bottom: 32px;
    display: none;
  }
  .details {
    margin-bottom: 8px;
    border: 2px solid black;
    background-color: gray;
    color: blue;
  }
  @media only screen and (min-width: 500px) and (max-width: 800px) {
    button {
      display: none;
    }
  }
  @media only screen and (max-width: 500px) {
    div {
      transform: scale(0.8);
    }
    img {
      width: 80%;
    }
  }
  
  .bg-toggled {
    background-color: green;
  }
  
  .hidden {
    display: block;
  }
  `;

  constructor() {
    super();
    this.title = 'Penn State Logo';
    this.image = 'https://www.psu.edu/psu-edu-assets/images/shared/psu-mark.svg';
    this.paragraphText = 'This is the logo that The Pennsylvania State University uses.';
  }

  render() {
    return html`
      <div class="button">
        <button class="duplicator">Duplicator</button>
        <button class="toggle-background">Toggle Background</button>
        <button class="change-heading">Change Heading</button>
        <button class="delete-card">Delete Card</button>
      </div>
      <div id="card" class="card">
        <h1>${this.title}</h1>
        <img src=${this.image}>
        <p>${this.paragraphText}</p>
        <button class="details">Details</button>
      </div>
    `;
  }
}

customElements.define('logo-card', LogoCard);