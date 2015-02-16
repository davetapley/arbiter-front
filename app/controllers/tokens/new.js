import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      var token = this.get('model');
      this.transitionTo('translations.new', token);
    }
  }
});


