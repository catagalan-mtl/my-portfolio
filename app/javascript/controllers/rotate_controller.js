import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="rotate"
export default class extends Controller {
  static targets = ["logoElement", "nameElement"]
  static classes = ["hide", "toTop"]
  connect() {
    console.log("Hello, from rotate_controller.js")
    this.logoElementTargets.classList.add(this.hide, this.toTop);
    this.nameElementTargets.classList.remove(this.hide, this.toTop);
  }

}
