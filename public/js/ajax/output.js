$(function () {

	var $output = $('#output');
	$.ajax({
		type: 'GET',
		url: 'http://35.161.233.165:9000/api/get',
		success: function(output) {
			$.each(output, function(i, item) {
				
				if(item.name) {
					$output.append(
						'<div>' +
						'<p>' + 'Type: ' + item.type + '</p>'	+
						'<p>' + 'Order: ' + item.order + '</p>' 	+
						'<p>' + 'Name: ' + item.name + '</p>'	+
						'<br>' + '<div>'
					);
				}

				else if(item.people) {
					$output.append(
						'<p>' + 'Type: ' + item.type + '</p>'	+
						'<p>' + 'Order: ' + item.order + '</p>' 	+
						'<p>' + 'Name: ' + item.people + '</p>'	+
						'<br>'	
					);	
				}

			});		
		}
	});
});

$(function () {
	
})