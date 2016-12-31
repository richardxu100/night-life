import { observable } from 'mobx';

export default class Comment {
  @observable text;
  @observable createdAt;

  constructor(text) {
    this.text = text;
    this.createdAt = Date.now();
  }
}
