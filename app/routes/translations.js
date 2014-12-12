import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, token) {
    controller.set('model', token.get('translations'));
  }
});
