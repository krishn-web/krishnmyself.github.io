$(document).ready(function(){

    let $btn = $(".gallery-area .button-group button");

    $btn.click(function(e){

        $(".button-group button").removeClass("active");
        e.target.classList.add("active");
        
        let selector = $(e.target).attr("data-filter");
        $(".grid").isotope({
            filter:selector
        });
        
        return false;

    });

    $(".test-popup-link").magnificPopup({
        type:'image',
        gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
    });

});