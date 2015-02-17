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
  isTaken: Ember.computed.not('isAvailable'),

  canCheckAvailability: Ember.computed.and('model.hasDomain', 'model.hasPath'),

  updateAvailable: function() {
    if(this.get('canCheckAvailability')) {
      var that = this;
      $.ajax({
          type: 'GET',
          url: '__/proxy/api/' + this.get('model.path') + '?host=' + this.get('model.domain')
      }).complete(function(jqXHR) {
        var status = jqXHR.status;
        that.set('isAvailable', status === 404);
      });
    }
  }.observes('canCheckAvailability'),

  resetAvailable: function() {
    this.set('isAvailable', undefined);
  }.property('model.domain', 'model.path'),

  actions: {
    submit: function() {
      var token = this.get('model');
      this.transitionTo('translations.new', token);
    }
  }
});


