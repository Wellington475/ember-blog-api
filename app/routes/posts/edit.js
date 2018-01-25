import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

export default Route.extend({
  model(param){
    return get(this, 'store').peekRecord('post', param.post_id);
  },

  setupController(controller, model){
    set(controller, 'post', model);
  },

  actions: {
    save(post){
      post.save().then(() => this.transitionTo('posts.view', post.id));
    }
  }
});
