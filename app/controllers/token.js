import Ember from 'ember';

export default Ember.ObjectController.extend({
  href: function() {
    return '/__/proxy/api/' + this.get('id');
  }.property('id'),

  activeTarget: Ember.computed.alias('activeTranslation.target'),

  actions: {
    save: function() {
      this.get('model').save();
    }
  }
});
