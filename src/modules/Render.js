export default class Render {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  show = (items) => {
    let listHTML = '';
    items.forEach((item, index) => {
      listHTML += `
      <li class="render-item">\
        <span class="position">${index + 1}</span>\
        <span class="player">${item.user}</span>\
        <span class="score">${item.score}</span>\
      </li>
      `;
    });
    this.parentElement.innerHTML = listHTML;
  };
}
