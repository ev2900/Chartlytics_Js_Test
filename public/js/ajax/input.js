// Person
$(function () {

	var $person_person = $('#person_person'); 
	var $person_order = $('#person_order');
	var $person_name = $('#person_name');

	$('#person').on('submit', function(ev) {
		ev.preventDefault();

		var new_person = {
			type:$person_person.val(),
			order:$person_order.val(),
			name:$person_name.val()
		};

		$.ajax({
			type: 'POST',
			url: 'http://35.161.233.165:9000/api/upload',
			data: new_person,
			success: function() {
				 window.location.replace("/");
			},
			error: function() {
				alert('error');
			}
		});

	});

});

// Place
$(function () {

	var $place_person = $('#place_Person'); 
	var $place_order = $('#place_order');
	var $place_name = $('#place_place');

	$('#place').on('submit', function(ev) {
		ev.preventDefault();

		var new_place = {
			type:$place_person.val(),
			order:$place_order.val(),
			name:$place_name.val()
		};

		$.ajax({
			type: 'POST',
			url: 'http://35.161.233.165:9000/api/upload',
			data: new_place,
			success: function() {
				window.location.replace("/");
			},
			error: function() {
				alert('error');
			}

		});

	});

});