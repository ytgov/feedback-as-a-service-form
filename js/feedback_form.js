
(function ($, Drupal) {
Drupal.behaviors.webformFeedback = {
    attach: function (context, settings) {
	    // Check if color settings are available in Drupal settings.
	    if(settings.color_settings){
		    // Define default colors.
		    var color_button_inactive = '#00616D';
			var color_button_active = '#00454E';
		    var color_icon_active = '#00818f';
		    var color_icon_inactive = '#b2b3b2';

		    // Override default colors if set in Drupal settings.
		    if(settings.color_settings.color_button_inactive){
			    color_button_inactive = settings.color_settings.color_button_inactive;
		    }
		    if(settings.color_settings.color_button_active){
			    color_button_active = settings.color_settings.color_button_active;
		    }
		    if(settings.color_settings.color_icon_active){
			    color_icon_active = settings.color_settings.color_icon_active;
		    }
		    if(settings.color_settings.color_icon_inactive){
			    color_icon_inactive = settings.color_settings.color_icon_inactive;
		    }		    
	    }
		// Handle the display of "How did this page help you?" section.
    	$(once('display_page_help_you', '.form-item-how-did-this-page-help-you', context)).each(function () {
			var display_page_help_you = $(this).css('display');
			if(display_page_help_you == 'block'){
			 	$("label[for^='edit-was-this-page-helpful-yes']").css('color',color_icon_active);
			 	$("label[for^='edit-was-this-page-helpful-no']").css('color',color_icon_inactive);
			}
		
		});
		// Handle the display of "How can we improve this page?" section.
		$(once('display_improve_page', '.form-item-how-can-we-improve-this-page-', context)).each(function () {
			var display_improve_page = $(this).css('display');
			if(display_improve_page == 'block'){
				$("label[for^='edit-was-this-page-helpful-yes']").css('color',color_icon_inactive);
				$("label[for^='edit-was-this-page-helpful-no']").css('color',color_icon_active);
			}
		});
		// Handle feedback thumbs color change based on click.
	    $(once('webformHands', '[id^="edit-was-this-page-helpful-no"],[id^="edit-was-this-page-helpful-yes"]', context)).each(function () {
	    	//Changing the color to the thumbs in the feedback web form depends on whether it is active or not
	        $( '[id^="edit-was-this-page-helpful-yes"]').click(function () {
	          $("label[for^='edit-was-this-page-helpful-yes']").css('color',color_icon_active);
	          $("label[for^='edit-was-this-page-helpful-no']").css('color',color_icon_inactive);
	        });
	        $( '[id^="edit-was-this-page-helpful-no"]').click(function () {
	          $("label[for^='edit-was-this-page-helpful-yes']").css('color',color_icon_inactive);
	          $("label[for^='edit-was-this-page-helpful-no']").css('color',color_icon_active);
	        });
	    });

    }
  };
})(jQuery, Drupal);