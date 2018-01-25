import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('view', {path: '/:post_id'});
    this.route('edit', {path: '/edit/:post_id'});
    this.route('create');
    this.route('delete', {path: '/delete/:post_id'});
  });
  this.route('users');
});

export default Router;
