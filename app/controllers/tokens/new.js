import Ember from 'ember';

export default Ember.Controller.extend({

  domainType: 'default',

  isDefaultDomain: Ember.computed.equal('domainType', 'default'),
  isUserDomain: Ember.computed.equal('domainType', 'user'),

  domainOptions: function() {
    return this.store.findAll('domain');
  }.property(),

  defaultDomainOptions: Ember.computed.filterBy('domainOptions', 'type', 'default'),
  userDomainOptions: Ember.computed.filterBy('domainOptions', 'type', 'user'),

  userHasDomains: function() {
    return userDomainOptions.length() > 0;
  }.property('userDomainOptions'),

  actions: {
    submit: function() {
      var token = this.get('model');
      this.transitionTo('translations.new', token);
    }
  }
});


