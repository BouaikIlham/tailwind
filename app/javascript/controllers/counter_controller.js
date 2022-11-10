import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  connect() {
    console.log("hello from Morocco", this.element)
  }
}
