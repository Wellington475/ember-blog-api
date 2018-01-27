import { test } from 'qunit';
import moduleForAcceptance from 'blog-api/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create post');

test('visiting /posts', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
  });
});

test('visiting /posts/create', function(assert) {
  visit('/posts');
  click('a.btn-success');

  andThen(function() {
    assert.equal(currentURL(), '/posts/create');
  });
});

test('Create new post', function(assert) {
  visit('/posts');
  click('a.btn-success');
  fillIn('input[type=text]', 'My new post');
  fillIn('textarea', 'New Body..');

  click('button.btn-primary');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
  });
});