import React from 'react';
import { shallow } from 'enzyme';

import { testCommentStore } from './CommentStore';
import App from '../containers/App';

describe('CommentStore', () => {
  it('adds a comment', () => {
    const store = new testCommentStore(); // make sure you use new !

    store.addComment('test1');
    store.addComment('test2');

    const wrapper = shallow(<App commentStore={store} />);

    expect(wrapper.find('ul li').at(0).text()).toBe('test1');
    expect(wrapper.find('ul li').at(1).text()).toBe('test2');
    expect(wrapper.find('li').length).toBe(2);
    expect(store.comments.length).toBe(2);
  });
});
