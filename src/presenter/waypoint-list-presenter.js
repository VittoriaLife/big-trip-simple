import { render } from '../render.js';

import SortView from '../view/sort-view.js';
import WaypointListView from '../view/waypoint-list-view.js';
import WaypointView from '../view/waypoint-view.js';
import EditWaypointView from '../view/edit-waypoint-view.js';


export default class WaypointPresenter {
  waypointListComponent = new WaypointListView();
  waypointComponent = new WaypointView();


  constructor({ waypointBoardContainer }) {
    this.waypointBoardContainer = waypointBoardContainer;
  }

  init() {
    render(new SortView(), this.waypointListComponent.getElement());
    render(this.waypointListComponent, this.waypointBoardContainer);

    render(new EditWaypointView(), this.waypointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.waypointListComponent.getElement());
    }
  }

}
