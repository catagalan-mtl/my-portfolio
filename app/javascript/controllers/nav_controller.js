import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav"
export default class extends Controller {
  static targets = ["navElement", "heroElement", "buttonElement", "menuElement"]
  fire() {
    this.navElementTarget.classList.toggle("hidden");
    this.heroElementTarget.classList.toggle("hidden");
    this.buttonElementTarget.classList.toggle("menu-btn-nav");
  }
}
