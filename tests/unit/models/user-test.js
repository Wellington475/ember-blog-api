import { moduleForModel, test } from 'ember-qunit';
import { get } from '@ember/object';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should own a post', function(assert){
  const User       = this.store().modelFor('user');
  let relationship = get(User, 'relationshipsByName').get('post');

  assert.equal(relationship.key,  'post',    'has relationship with post');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});

test('Create new user', function(assert){
  const User = this.subject({
      name: "Wells",
      email: "well@sciensa.com",
      username: "calaABoca",
      phone: "1234-5678"
  });

  assert.equal(User.get('name'),     'Wells',            'Has name');
  assert.equal(User.get('email'),    'well@sciensa.com', 'Has email');
  assert.equal(User.get('username'), 'calaABoca',        'Has username');
  assert.equal(User.get('phone'),    '1234-5678',        'Has phone');
});