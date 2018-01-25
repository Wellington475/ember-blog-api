import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

export default Route.extend({
  model(){
    return get(this, 'store').createRecord('post');
  },

  setupController(controller, model){
    set(controller, 'post', model);
    this._super(...arguments);
  },

  actions: {
    save(post){
      post.save().then(() => this.transitionTo('posts'));
    }
  }
});
