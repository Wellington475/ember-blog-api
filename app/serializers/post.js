import DS from 'ember-data';

const {
  RESTSerializer
} = DS;

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {posts: payload};
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload.posts.user = payload.posts.userId;
    delete payload.posts.userId;

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload.posts.forEach(post => {
      post.user = post.userId;
      delete post.userId;
    });
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});