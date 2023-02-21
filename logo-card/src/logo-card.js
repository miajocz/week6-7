import { LitElement, html, css } from 'lit';
import { MemeMaker } from '@lrnwebcomponents/meme-maker/meme-maker.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class LogoCard extends LitElement {
  static properties = {
    image: { type: String },
    topText: { type: String },
    bottomText: { type: String },
    paragraphText: { type: String }
  }

  static get styles() {
    return css`
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
      padding: 10px;
    }
    h1 {
      margin-top: 8px;
      margin-left: 32px;
      margin-right: 32px;
    }
    meme-maker {
      display: block;
      margin-left: 75px;
      margin-right: auto;
      margin-top: 16px;
      width: 200px;
      --meme-maker-font-size: 24px;
    }
    p {
      margin-top: 16px;
      margin-bottom: 32px;
      display: none;
    }
    .details {
      margin-bottom: 8px;
    }
    summary {
      border: 2px solid black;
      background-color: gray;
      color: blue;
      margin-right: 125px; 
      margin-left: 125px;
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
  }

  constructor() {
    super();
    this.image = 'https://brand.psu.edu/images/backgrounds/penn-state-shield.jpg';
    this.topText = 'The Official';
    this.bottomText = 'Penn State Logo';
    this.paragraphText = 'This is the logo that The Pennsylvania State University uses.';
  }

  render() {
    return html`
      <div id="card" class="card">
        <h1>Penn State Logo Card</h1>
        <meme-maker class="meme" image-url=${this.image} top-text=${this.topText} bottom-text=${this.bottomText}></meme-maker>
        <p>${this.paragraphText}</p>
        <details class = "details">
          <summary>Details</summary>
          <ul>
          <li>This is a logo for Penn State University.</li>
          <li>It is a blue and white shield with the letters PSU in the middle.</li>
          <li>It is used on the Penn State website and on all of the Penn State merchandise.</li>
          </ul>
        </details>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('logo-card', LogoCard);