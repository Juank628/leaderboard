export default class Render {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  show = (items) => {
    let listHTML = '';
    items.forEach((item) => {
      listHTML += `<li class="render-item">${item.user}: ${item.score}</li>`;
    });
    this.parentElement.innerHTML = listHTML;
  };
}
