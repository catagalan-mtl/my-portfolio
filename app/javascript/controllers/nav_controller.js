import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav"
export default class extends Controller {
  static targets = ["navElement", "heroElement", "buttonElement"]
  connect() {
    console.log("Hello, Stimulus!")
  }
  fire() {
    console.log("CLICKKKKKKKK")
    this.navElementTarget.classList.toggle("hidden");
    this.heroElementTarget.classList.toggle("hidden");
    this.buttonElementTarget.classList.toggle("menu-btn-nav");
  }
}
