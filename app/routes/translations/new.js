import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createFragment('translation', {
      target: 'www.example.com'
    });
  },

  actions: {
    addRule: function(type) {
      var translation = this.controller.get('model');
      translation.set('rule', this.store.createFragment(type));
    }
  }
});
