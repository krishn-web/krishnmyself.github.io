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

    //navbar modification
    
    $(".nav-link").click(function()
    {
        $(".navbar-toggler").click();
    });

    /*
    ------------------ OTHER WAY FOR HINDING THIS NAV-LINKS----------------
    $('.nav-link').click(function(){
        $('.navbar-collapse').collapse('hide');
    });
    */

    //dropdown menu

    $("#upcoming").click(function(){
        $btn.click();
    });

    $("#following").click(function(){
        
        $(".button-group button").removeClass("active");
        $(".dwfollowing").addClass("active");

        let fselector = $(".dwfollowing").attr("data-filter");
        $(".grid").isotope({
            filter: fselector
        });
        
        return false;

    });

    $("#latest").click(function(){
        
        $(".button-group button").removeClass("active");
        $(".dwlatest").addClass("active");

        let fselector = $(".dwlatest").attr("data-filter");
        $(".grid").isotope({
            filter: fselector
        });
        
        return false;

    });

    $("#popular").click(function(){
        
        $(".button-group button").removeClass("active");
        $(".dwpopular").addClass("active");

        let fselector = $(".dwpopular").attr("data-filter");
        $(".grid").isotope({
            filter: fselector
        });
        
        return false;

    });

    $("#all").click(function(){
        
        $(".button-group button").removeClass("active");
        $(".dwall").addClass("active");

        let fselector = $(".dwall").attr("data-filter");
        $(".grid").isotope({
            filter: fselector
        });
        
        return false;

    });

});