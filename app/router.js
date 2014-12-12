import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tokens', function() {
    this.resource('token', { path: '/:token_id' }, function() {
      this.resource('translations');
    });
  });
});

export default Router;
