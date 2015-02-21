import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  domain: function(_key, newDomain) {
    var id = this.get('id') || ',';
    var pathIdx = id.lastIndexOf(",");

    if (arguments.length > 1) {
      this.set('id',  newDomain + ',' + id.substring(pathIdx + 1));
      return newDomain;
    } else {
      return id.substring(0, pathIdx);
    }
  }.property('id'),

  hasDomain: Ember.computed.notEmpty('domain'),

  path: function(_key, newPath) {
    var id = this.get('id') || ',';
    var pathIdx = id.lastIndexOf(",");

    if (arguments.length > 1) {
      var newPathSafe = newPath.replace(/,/, '');
      this.set('id',  id.substring(0, pathIdx) + ',' + newPathSafe);
      return newPathSafe;
    } else {
      return id.substring(pathIdx + 1);
    }
  }.property('id'),

  hasPath: Ember.computed.notEmpty('path'),

  href: function() {
    return '//' + this.get('domain') + '/' + this.get('path');
  }.property('id'),

  translations: DS.hasManyFragments('translation', {defaultValue: []}),

  activeTranslations: Ember.computed.filterBy('translations', 'rule.active', true),

  activeTranslation: function() {
    return this.get('activeTranslations').objectAt(0);
  }.property('activeTranslations.@each')
});
