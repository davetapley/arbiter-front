import Ember from 'ember';

export default Ember.Controller.extend({
  userEmail: Ember.computed.alias('session.content.user_email')
});
