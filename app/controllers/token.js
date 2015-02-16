import Ember from 'ember';

export default Ember.ObjectController.extend({
  href: function() {
    return '//' + this.get('domain') + '/' + this.get('path');
  }.property('id'),

  activeTarget: Ember.computed.alias('activeTranslation.target'),
});
