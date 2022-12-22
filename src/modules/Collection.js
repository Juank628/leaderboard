export default class Collection {
  constructor(items) {
    this.items = items;
  }

  addItem = (item) => {
    this.items.push(item);
    this.items.sort((a, b) => a.score - b.score);
  }

  getItems = () => this.items;

  setItems = (items) => {
    this.items = items;
    this.items.sort((a, b) => b.score - a.score);
  }
}
