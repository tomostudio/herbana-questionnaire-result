$(document).ready(function(){
	windowStatus();
	responsiveTriggers();

	var checknoticeon = $("#notice_header").attr("on");

	if(checknoticeon === "true"){
		$("body").headroom({
			offset: 10,
			"tolerance": 5,
			"classes": {
			"initial" : "notice_on",
			"top": "notice_show",
			"notTop": "notice_hidden"
		  }
		});
	}
	else
	{
		$("#notice_header").addClass("notice_hide");
	}
	checkMobileCart();
	Pace.on("done", function(){
		$("body").removeClass("covered");
	});

	if ($('.prod_add.added').length){
		setTimeout(function(){
			$('.prod_add.added').val('ADD TO CART');
			$('.prod_add.added').removeClass("added");
		}, 4000);
    }
	if ($('.autohide').length){
		setTimeout(function(){
			if(!$('.autohide').hasClass("hide_el")){
				$('.autohide').addClass("hide_el");
			}
		}, 3000);
    }
});
var bottomIn = {
	delay    : 100,
	origin: 'bottom',
	distance : '40px',
	easing   : 'ease-in-out',
	scale: 1,
	viewFactor: 0.3,
	duration: 500
};

var bottomInLong = {
	delay    : 200,
	origin: 'bottom',
	distance : '40px',
	easing   : 'ease-in-out',
	scale: 1,
	viewFactor: 0.3,
	duration: 1000
};
var fadeIn = {
	delay    : 100,
	distance : '0px',
	easing   : 'ease-in-out',
	scale: 1,
	viewFactor: 0.25,
};
var fadeInLong = {
	duration: 1000,
	delay    : 200,
	distance : '0px',
	easing   : 'ease-in-out',
	scale: 1,
	viewFactor: 0.4,
};
var menuShown = false;
var searchShow = false;
var mobileInit = false;

function responsiveTriggers(){
	if(mobile){
		if(!mobileInit){
			mobileInit = true;
			$(".mobile_menu_btn").on("click",function(){
				$(".mobile_menu_btn.init").removeClass("init");
				//window.scrollTo(0, 0);
				if(menuShown){
					$("body").removeClass("menu_hide");
					if(!$("body").hasClass("menu_show")){
						$("body").addClass("menu_show");
					}
					menuShown = false;
				}
				else{
					menuShown = true;
					$("body").removeClass("menu_show");
					if(!$("body").hasClass("menu_hide")){
						$("body").addClass("menu_hide");
					}
				}
			});
			$(".search_close").on("click",function(){
				if(searchShow){
					searchShow = false;	$(".mobile_header.search_show").removeClass("search_show");
					if(!$(".mobile_header").hasClass("search_hide")){
						$(".mobile_header").addClass("search_hide");
					}
				}
			});
			$(".mobile_search").on("click",function(){
				if(!searchShow){
					searchShow = true;	$(".mobile_header.search_hide").removeClass("search_hide");
					if(!$(".mobile_header").hasClass("search_show")){
						$(".mobile_header").addClass("search_show");
					}
				}
			});
			$('.subcribe_form').find("input[type=email]").attr("placeholder", "ENTER YOUR EMAIL");
		}
	}
	else{
		if(mobileInit){
			mobileInit = false;
			$(".mobile_menu_btn").off("click");
			$(".search_close").off("click");
			$(".mobile_search").off("click");
			if(!$(".mobile_menu_btn").hasClass("init")){
				$(".mobile_menu_btn").addClass("init");
			}
			if(menuShown){
				$("body").removeClass("menu_hide");
				if(!$("body").hasClass("menu_show")){
					$("body").addClass("menu_show");
				}
				menuShown = false;
			}
			$('.subcribe_form').find("input[type=email]").attr("placeholder", "ENTER YOUR EMAIL ADDRESS");
		}
	}
};


$(window).resize(function(){
	windowStatus();
	responsiveTriggers();
});

var touchDevice = false;
var mobile = false;
var tablet = false;
var tablet_mid = false;
var desktop = true;

var subhead_open = false;

function openSub(){
	$("li.story_header").off("click");
	$("li.story_header").addClass("openheader");
	$("li.story_header").on("click", function(){
		closeSub();
	});
	setTimeout(function(){
		subhead_open = true;
		$(window).on("click",function() {
			closeSub();
		});
		$('ul.subheader').on("click",function(event){
			event.stopPropagation();
		});
	}, 100);
}

function closeSub(){
	$("li.story_header").off("click");
	if(subhead_open){
		subhead_open = false;
		$(window).off("click");
		$('ul.subheader').off("click");
	}
	$("li.story_header").removeClass("openheader");
	$("li.story_header").on("click", function(){
		openSub();
	});
}

var mobile_subhead_open = false;

function openMobileSub(){
	$("li.mobile_header_open").off("click");
	$("li.mobile_header_open").addClass("openheader");
	$("li.mobile_header_open").on("click", function(){
		closeMobileSub();
	});
	setTimeout(function(){
		mobile_subhead_open = true;
		$(window).on("click",function() {
			closeMobileSub();
		});
		$('ul.subheader').on("click",function(event){
			event.stopPropagation();
		});
	}, 100);
}

function closeMobileSub(){
	$("li.mobile_header_open").off("click");
	if(mobile_subhead_open){
		mobile_subhead_open = false;
		$(window).off("click");
		$('ul.subheader').off("click");
	}
	$("li.mobile_header_open").removeClass("openheader");
	$("li.mobile_header_open").on("click", function(){
		openMobileSub();
	});
}

function windowStatus(){
	if(Modernizr.touch){
		touchDevice = true;
		$("body.onhover").removeClass("onhover");

		$("li.story_header").addClass("ontouch");
		$("li.story_header").on("click", function(){
			openSub();
		});
		$("li.mobile_header_open").addClass("ontouch");
		$("li.mobile_header_open").on("click", function(){
			openMobileSub();
		});
	}
	else
	{
		touchDevice = false;
		if(!$("body").hasClass("onhover")){
			$("body").addClass("onhover");
		}
	}
	if(Modernizr.mq('(max-width: 599px)')){
		mobile = true;
	}
	else{
		mobile = false;
	}
	if(Modernizr.mq('(min-width: 600px) and (max-width: 750px)')){
		tablet_mid = true;
	}
	else{
		tablet_mid = false;
	}
	if(Modernizr.mq('(min-width: 600px) and (max-width: 949px)')){
		tablet = true;
	}
	else{
		tablet = false;
	}
	if(Modernizr.mq('(min-width: 950px)')){
		desktop = true;
	}
	else{
		desktop = false;
	}
}

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

const checkMobileCart = () => {
	if(document.body.dataset.cart > 0){
		if(!window.location.pathname.includes('cart') && !window.location.pathname.includes('checkout') ){
			document.body.classList.add('showcart');
		}
	}
	else{
		document.body.classList.remove('showcart');
	}
	if(window.location.pathname.includes('cart') || window.location.pathname.includes('checkout') ){
		document.body.classList.remove('showcart');
	}
};

$('body').on('datachange', function(){
	checkMobileCart();
});
