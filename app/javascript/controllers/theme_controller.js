import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="theme"
export default class extends Controller {
  static targets = ["themeElement", "toggleElement"]
  // fire() {
  //   this.themeElementTarget.classList.toggle("light");
  // }
  connect() {
    this.loadTheme();
  }

  fire() {
    console.log("fire");
    const newTheme = this.toggleElementTarget.checked ? "light" : "dark";
    this.themeElementTarget.classList.remove("light", "dark");
    this.themeElementTarget.classList.add(newTheme);
    localStorage.setItem('toggle', this.toggleElementTarget.checked);
  }

  loadTheme() {
    const toggleState = JSON.parse(localStorage.getItem('toggle')) || false; // default to unchecked (dark theme)
    this.toggleElementTarget.checked = toggleState;
    const theme = toggleState ? "light" : "dark";
    this.themeElementTarget.classList.add(theme);
  }
}
