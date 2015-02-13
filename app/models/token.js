import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  translations: DS.hasManyFragments('translation', {defaultValue: []}),

  activeTranslations: Ember.computed.filterBy('translations', 'rule.active', true),

  activeTranslation: function() {
    return this.get('activeTranslations').objectAt(0);
  }.property('activeTranslations.@each')
});
