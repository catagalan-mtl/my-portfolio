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
    const isChecked = this.toggleElementTarget.checked;

    if (!isChecked) {
      this.themeElementTarget.classList.remove("light");
      this.themeElementTarget.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      this.themeElementTarget.classList.add("light");
      this.themeElementTarget.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  loadTheme() {
    const storedTheme = localStorage.getItem("theme") || "dark";
    this.toggleElementTarget.checked = storedTheme === "light";
    this.themeElementTarget.classList.remove("light", "dark");
    this.themeElementTarget.classList.add(storedTheme);
  }
}
