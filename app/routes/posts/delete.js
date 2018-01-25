import Route from '@ember/routing/route';
import {get} from '@ember/object';

export default Route.extend({
  model(param){
    if(param.post_id){
      get(this, 'store').findRecord('post', param.post_id).then((post) => {
        post.destroyRecord();
        this.transitionTo('posts');
      });
      
    }
  }
});
