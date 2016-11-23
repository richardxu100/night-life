import { observable, action } from 'mobx';
import firebase from 'firebase';

class Comment {
  @observable text;
  @observable createdAt;

  constructor(text) {
    this.text = text;
    this.createdAt = Date.now();
  }
}

class CommentStore {
  @observable comments = [];

  @action addComment = (text) => {
    if (this.comments === []) {
      return this.comments = [new Comment(text)];
    }
    this.comments.push(new Comment(text));
  }
}

const commentStore = window.commentStore = new CommentStore();
const testCommentStore = CommentStore;

module.exports = { commentStore, testCommentStore }
