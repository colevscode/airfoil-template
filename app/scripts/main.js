$(function(){

	$('#mainform').bind('submit', function(ev) {
		ev.preventDefault();
		
		// The completed endpoint is one way to create a completed event.
		// Any write operation to backlift data and many backlift auth
		// endpointes will also trigger a completed event 
		$.post('/backlift/analytics/completed');
	});

});