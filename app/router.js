import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.resource("tokens", function() {
    this.route("new");
    this.resource("token", { path: "/:token_id" }, function() {
      this.resource("translations", function() {
        this.route("new");
      });
    });
  });
});

export default Router;
