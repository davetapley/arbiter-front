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
    return this.get('userDomainOptions').length > 0;
  }.property('userDomainOptions'),

  isAvailable: undefined,
  isTaken: Ember.computed.equal('isAvailable', false),
  checkingAvailability: Ember.computed.equal('isAvailable', undefined),

  canCheckAvailability: Ember.computed.and('model.hasDomain', 'model.hasPath'),

  updateAvailable: function() {
    if(this.get('canCheckAvailability')) {
      var that = this;
      var availableUrl = '__/proxy/api/tokens/' + this.get('model.id') + '/available';
      $.get(availableUrl, function(data) {
        that.set('isAvailable', data.available);
      });
    }
  }.observes('canCheckAvailability'),

  resetAvailable: function() {
    this.set('isAvailable', undefined);
  }.observes('canCheckAvailability'),

  actions: {
    submit: function() {
      var token = this.get('model');
      this.transitionTo('translations.new', token);
    }
  }
});


