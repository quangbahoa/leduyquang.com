jQuery(document).ready(function($){
	//open the lateral panel
	$('.about').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
    
    // I love wordpress
    
    $('.contact, #menu').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-wp').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-wp').on('click', function(event){
		if( $(event.target).is('.cd-panel-wp') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-wp').removeClass('is-visible');
			event.preventDefault();
		}
	});
    
});