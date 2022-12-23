import './index.css';
import Collection from './modules/Collection.js';
import Render from './modules/Render.js';

const userInput = document.getElementById('userInput');
const scoreInput = document.getElementById('scoreInput');
const refreshBtn = document.getElementById('refreshBtn');

const leaders = new Collection([]);
const render = new Render(document.getElementById('leadersList'));

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rIdJ3vDCDXKu8b40DeTp';

const readApiScores = async () => {
  const res = await fetch(`${apiURL}/scores`);
  const data = await res.json();
  return data.result;
};

const createApiScore = async (data) => {
  const res = await fetch(`${apiURL}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res;
};

window.addEventListener('load', async () => {
  const data = await readApiScores();
  leaders.setItems(data);
  render.show(leaders.getItems());
});

window.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newScore = {
    user: userInput.value,
    score: scoreInput.value,
  };
  const res = await createApiScore(newScore);

  if (res.status >= 200 && res.status <= 299) {
    leaders.addItem(newScore);
    render.show(leaders.getItems());
  }
});

refreshBtn.addEventListener('click', async () => {
  leaders.setItems([]);
  render.show(leaders.getItems());
  const data = await readApiScores();
  leaders.setItems(data);
  render.show(leaders.getItems());
});
