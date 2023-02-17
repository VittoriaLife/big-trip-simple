import { createElement } from '../render.js';


const createNoWaypointTemplate = () => `<p class="trip-events__msg">Click New Event to create your first point</p>
`;


export default class NoWaypointView {
  getTemplate() {
    return createNoWaypointTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }

}
