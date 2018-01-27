import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('posts/post-list', 'Integration | Component | post list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{posts/post-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#posts/post-list}}
      template block text
    {{/posts/post-list}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('it renders all posts', function(assert) {
  this.set('posts', [
    {title: 'Title 1', body: 'body 1', user: 1},
    {title: 'Title 2', body: 'body 2', user: 2},
    {title: 'Title 3', body: 'body 3', user: 3}
  ]);

  this.render(hbs`
    {{posts/post-list posts=posts}}
  `);

  assert.equal(this.$('.card').length, 3);
});
