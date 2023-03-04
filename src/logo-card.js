import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';

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
    .card-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    .card {
      width: 300px;
      background-color: var(--card-bg-color);
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      padding: 20px;
      text-align: center;
    }
    
    .card img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    
    .card h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    
    .card p {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 20px;
    }
    
    .card a {
      display: inline-block;
      background-color: #28a745;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
    }
    :root {
      --bg-color: #f8f8f8;
      --card-bg-color: #fff;
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
    <div class="card-container">
      <div class="card" class="card">
        <h1>Penn State Logo Card</h1>
        <meme-maker class="meme" image-url=${this.image} top-text=${this.topText} bottom-text=${this.bottomText}>
        </meme-maker>
        <slot>
          <p>${this.paragraphText}</p>
        </slot>
        <details class="details">
          <summary>Details</summary>
          <slot>
            <ul>
              <li>This is a logo for Penn State University.</li>
              <li>It is a blue and white shield with the letters PSU in the middle.</li>
              <li>It is used on the Penn State website and on all of the Penn State merchandise.</li>
            </ul>
          </slot>
        </details>
      </div>
    </div>
    `;
  }
}

customElements.define('logo-card', LogoCard);