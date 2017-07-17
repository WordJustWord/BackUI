$(function() {
	$('.NewTab').click(function() {
		var title = this.dataset.title;
		var links = this.dataset.links;
		if($('#main-tab').tabs('exists', title)) {
			$('#main-tab').tabs('select', title);
		} else {
			//add a new tab panel
			$('#main-tab').tabs('add', {
				title: title,
				content: '<iframe frameborder="0"  src="' + links + '" style="width:100%;height:99.5%;"></iframe>',
				closable: true
			});
		}
	});
});