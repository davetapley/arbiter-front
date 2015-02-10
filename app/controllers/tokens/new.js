import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createToken: function() {
      var newId = this.get('newTokenId');

      var token = this.store.createRecord('token', {
        id: newId
      });

      this.transitionTo('translations.new', token);
    }
  }
});


