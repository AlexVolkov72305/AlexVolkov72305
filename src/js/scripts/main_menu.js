jQuery(document).ready(function($) {

	$('#main_menu > .menu-item > a').append('<span class="effect"></span>');

  $('#main_menu a').click(function(e) {
    let menu = $(this).siblings('.sub-menu-wrap');
    let menu_item = $(this).closest('.menu-item');
    let menu_items = menu_item.siblings('.menu-item.active');

    menu_items.each(function() {
    	$(this).removeClass('active');
    	$(this).children('.sub-menu-wrap.show').removeClass('show');
    });

    if(menu.length == 1) {
    	let submenu = menu.first();
			submenu.toggleClass('show');
			menu_item.toggleClass('active');

      return false;
    }
  });

  menu_classes();

  $(window).resize(function() {
 		menu_classes();
  });

	$(document).on("click", function (event) {
	  // If the target is not the container or a child of the container, then process
	  // the click event for outside of the container.
  	if($(window).width() < 992) {
		  if ($(event.target).closest("#main_menu_wrapper").length === 0) {
				$('#main_menu_wrapper').collapse('hide');
			}
	  } else {
	  if ($(event.target).closest("#main_menu").length === 0) {
	    	$('#main_menu > .menu-item').removeClass('active');
	    	$('#main_menu > .menu-item > .sub-menu-wrap').removeClass('show');
			}
	  }
	});

});

function menu_classes() {
	if($(window).width() < 992) {
		$('#navbarNav').addClass('mobile');
		$('#navbarNav').removeClass('desktop');
	} else {
		$('#navbarNav').removeClass('mobile');
		$('#navbarNav').addClass('desktop');
	}
}
