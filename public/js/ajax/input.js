// Person
$(function () {

	var $person_person = $('#person_person'); 
	var $person_order = $('#person_order');
	var $person_name = $('#person_name');

	$('#person').on('submit', function(ev) {
		ev.preventDefault();

		var new_person = {
			type:$person_person.val();
			order:$person_order.val();
			name:$person_name.val();
		};

		$.ajax({
			type: 'POST',
			url: 'http://35.161.233.165:9000/api/get',
			data: new_person,
			success: function() {
				alert('good');
			},
			error: function() {
				alert('bad');
			}
		});

	});

});

// Place
$(function () {

});