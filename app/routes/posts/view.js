import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

export default Route.extend({
  model(param){
    if (param.post_id)
      return get(this, 'store').peekRecord('post', param.post_id);
  },

  setupController(controller, model){
    set(controller, 'post', model);
    this._super(...arguments);
  }
});
