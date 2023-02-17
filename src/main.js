import { render } from './render.js';
import FilterView from './view/filter-view.js';
import NewWaypointButtonView from './view/add-new-waypoint-button-view.js';

import WaypointPresenter from './presenter/waypoint-list-presenter.js';

const siteHeaderMainElement = document.querySelector('.trip-main');
const filterControls = siteHeaderMainElement.querySelector('.trip-controls__filters');
const tripBoard = document.querySelector('.trip-events');

render(new FilterView(), filterControls);
render(new NewWaypointButtonView(), siteHeaderMainElement);

const boardPresenter = new WaypointPresenter({
  waypointBoardContainer: tripBoard,
});

boardPresenter.init();

