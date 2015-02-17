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

  availability: undefined,
  checkingAvailability: Ember.computed.equal('availability', undefined),
  canCheckAvailability: Ember.computed.and('model.hasDomain', 'model.hasPath'),

  isAvailable: Ember.computed.equal('availability', true),
  isntAvailable: Ember.computed.not('isAvailable'),

  isTaken: Ember.computed.equal('availability', false),
  isTakenByUser: Ember.computed.equal('availability', 'user_owns'),

  updateAvailablity: function() {
    if(this.get('canCheckAvailability')) {
      var that = this;
      var availableUrl = '__/proxy/api/tokens/' + this.get('model.id') + '/available';
      jQuery.get(availableUrl, function(data) {
        var availability = data.available || (data.user_owns ? 'user_owns' : false);
        that.set('availability', availability);
      });
    } else {
      this.set('availability', undefined);
    }
  }.observes('canCheckAvailability'),

  actions: {
    submit: function() {
      var token = this.get('model');
      this.transitionTo('translations.new', token);
    }
  }
});


