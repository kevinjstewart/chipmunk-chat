import DS from 'ember-data';


var Chat = DS.Model.extend({
	name: DS.attr('string')

});


Chat.reopenClass({
	FIXTURES: [
		{
			"id": 1,
			"name": "Kevin Stewart"
		},
		{
			"id": 2,
			"name": "Jerry Seinfeld"
		},
		{
			"id": 3,
			"name": "Michael Scott"
		},
		{
			"id": 4,
			"name": "Warren Buffett"
		},
		{
			"id": 5,
			"name": "Dolan Trump"
		}

	]
});

export default Chat;