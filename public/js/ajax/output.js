$(function () {

	var $output = $('#output');
	$.ajax({
		type: 'GET',
		url: 'http://35.161.233.165:9000/api/get',
		success: function(output) {
			$.each(output, function(i, item) {
				$output.append(
					'<p>' + item.type + '</p>'		+
					'<p>' + item.order + '</p>'		+
				)
				if(item.name == "undefined") {
					var $a = 'a';
				}
			});		
		}
	});
});