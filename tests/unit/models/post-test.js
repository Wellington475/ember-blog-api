import { moduleForModel, test } from 'ember-qunit';
import { get } from '@ember/object';

moduleForModel('post', 'Unit | Model | post', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should own a user', function(assert){
  const Post       = this.store().modelFor('post');
  let relationship = get(Post, 'relationshipsByName').get('user');

  assert.equal(relationship.key,  'user',      'has relationship with user');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('create a post', function(assert){
  const Post = this.subject({
    title: 'New post', 
    body:  'There\'s nothing here'
  });

  assert.equal(Post.get('title'), 'New post',              'created title');
  assert.equal(Post.get('body'),  'There\'s nothing here', 'created body');
});