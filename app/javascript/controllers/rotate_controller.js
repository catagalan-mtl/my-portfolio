import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["logoWrapper"]

  connect() {
    console.log("Hello, from rotate_controller.js")
    this.rotateLogos();
  }

  sleep(number) {
    return new Promise((res) => setTimeout(res, number));
  }

  async rotateLogos() {

    this.logoWrapperTargets.forEach(async (logoWrapper, i) => {
      const logos = Array.from(logoWrapper.children);
      await this.sleep(1000 * i);
      setInterval(() => {
        let temp = logos[0];
        logos[0] = logos[1];
        logos[1] = logos[2];
        logos[2] = logos[3];
        logos[3] = temp;
        logos[0].classList.add("hide", "to-top");
        logos[1].classList.remove("hide", "to-top", "to-bottom");
        logos[2].classList.add("hide", "to-bottom");
        logos[3].classList.add("hide", "to-top", "to-bottom");
      }, 5000);
    });
  }
}


// export default class extends Controller {

// }
