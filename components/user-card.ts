import { html, LitElement } from "lit"

class UserCard extends LitElement {
  render() {
    return html`<div class="user-card">
      <img height="200px" alt="user-image" />
      <div class="user-details">
        <h3>placeholder</h3>
        <div class="user-info">
          <p class="email detail"><slot name="email" /></p>
          <p class="phone detail"><slot name="phone" /></p>
        </div>
        <button id="toggle-info">Hide Info</button>
      </div>
    </div>`
  }
}

window.customElements.define("user-card", UserCard)
