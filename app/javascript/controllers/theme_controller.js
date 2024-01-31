import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="theme"
export default class extends Controller {
  static targets = ["themeElement"]
  fire() {
    this.themeElementTarget.classList.toggle("light");
  }
}
