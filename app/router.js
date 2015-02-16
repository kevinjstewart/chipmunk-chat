import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('chats', function() {
		this.resource('chat', { path: ':chat_id' });
	});
	this.route('about');
});

export default Router;
