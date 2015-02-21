import Ember from 'ember';

export default Ember.ObjectController.extend({
  activeTarget: Ember.computed.alias('activeTranslation.target'),
});
