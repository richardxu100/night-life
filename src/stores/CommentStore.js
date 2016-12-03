import { observable, action } from 'mobx';

import base from '../config/rebase';

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

  @action getComments(callback) {
    return base.listenTo('comments', {
      context: this,
      asArray: true,
      then(comments) {
        console.log('returned comments is: ', comments);
        this.comments = comments;
        callback(comments);
      }
    });
  }

  @action addComment = (text) => {
    const newComment = new Comment(text);

    // firebase jazz
    base.push('comments', {
      data: { text, createdAt: newComment.createdAt }
    }).then((newLocation) => {
      const generatedKey = newLocation.key;
      console.log('the generatedKey is: ', generatedKey);
    }).catch((err) => {
      console.log('err: ', err)
    });
  }
}

const commentStore = window.commentStore = new CommentStore();
const testCommentStore = CommentStore;

module.exports = { commentStore, testCommentStore }
