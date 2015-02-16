import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  domain: function() {
    var id = this.get('id');
    return id.substring(0, id.lastIndexOf(","));
  }.property('id'),

  path: function() {
    var id = this.get('id');
    return id.substring(id.lastIndexOf(",") + 1);
  }.property('id'),

  translations: DS.hasManyFragments('translation', {defaultValue: []}),

  activeTranslations: Ember.computed.filterBy('translations', 'rule.active', true),

  activeTranslation: function() {
    return this.get('activeTranslations').objectAt(0);
  }.property('activeTranslations.@each')
});
