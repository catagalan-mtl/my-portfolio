import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="theme"
export default class extends Controller {
  static targets = ["themeElement"]
  // fire() {
  //   this.themeElementTarget.classList.toggle("light");
  // }
  connect() {
    this.loadTheme();
  }

  fire() {
    const newTheme = this.themeElementTarget.classList.contains("light") ? "dark" : "light";
    this.themeElementTarget.classList.toggle("light");
    this.themeElementTarget.classList.toggle("dark");
    localStorage.setItem('theme', newTheme);
  }

  loadTheme() {
    const theme = localStorage.getItem('theme') || "dark"; // default to dark
    this.themeElementTarget.classList.add(theme);
  }
}
