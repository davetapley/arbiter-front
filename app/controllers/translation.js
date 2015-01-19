import Ember from 'ember';

export default Ember.ObjectController.extend({
  targetURL: function() {
    return this.get('model.target');
  }.property('model.target'),
});
