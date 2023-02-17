import { render } from './render.js';
import FilterView from './view/filter-view.js';

const siteHeaderMainElement = document.querySelector('.trip-main');
const filterControls = siteHeaderMainElement.querySelector('.trip-controls__filters');

render(new FilterView(), filterControls);

