import Component from '@ember/component';

export default Component.extend({
  classNames: ['card'],
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
