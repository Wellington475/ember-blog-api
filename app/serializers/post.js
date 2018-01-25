import DS from 'ember-data';

const {
  RESTSerializer
} = DS;

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {posts: payload};

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
