import './index.css';
import Collection from './modules/Collection.js';
import Render from './modules/Render.js';

const leaders = new Collection([
  {
    name: 'Juan',
    score: 100,
  },
  {
    name: 'Carlos',
    score: 90,
  },
  {
    name: 'Nicole',
    score: 80,
  },
]);

const render = new Render(document.getElementById('leadersList'));

window.addEventListener('load', () => {
  render.show(leaders.getItems());
});
