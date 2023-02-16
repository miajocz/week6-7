import { LitElement, html, css } from 'lit';
import { MemeMaker } from '@lrnwebcomponents/meme-maker/meme-maker.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class LogoCard extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    topText: { type: String },
    bottomText: { type: String },
    paragraphText: { type: String }
  }

  static styles = css`
    /* Styles omitted for brevity */
  `;

  constructor() {
    super();
    this.title = 'Penn State Logo';
    this.image = 'https://www.psu.edu/psu-edu-assets/images/shared/psu-mark.svg';
    this.topText = 'Penn State';
    this.bottomText = 'University Park';
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
        <meme-maker image-url=${this.image} top-text=${this.topText} bottom-text=${this.bottomText}></meme-maker>
        <p>${this.paragraphText}</p>
        <button class="details">Details</button>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('logo-card', LogoCard);