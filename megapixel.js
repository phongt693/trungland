//function handleError() { return true; }
//window.onerror = handleError;
$(document).on('scroll', function () {
      FixedMenu();
});
$(document).ready(function () {
    //LanguageSelect();
    ToTopPage('.to_top_btn');
    GoDownPage('.go_down_btn');
    PartnerCarousel();
    SubMenu();
    MobileMenu();

    var $pos = $('.home .home_slider').height();
    setTimeout(function(){
      if ($('html, body').scrollTop() < $pos) {
        $('html, body').animate({scrollTop: $pos},1000);
      }
    }, 3000);

});
function ProjectPageLoad() {
    $("a[href$='#!Project/SID65/Aurora-DaNang-City.mpx']").click(function () {
        window.open('http://aurora.datxanhmientrung.com/', '_blank');
    });
    $("a[href$='#!Project/SID90/MARINA-COMPLEX.mpx']").click(function () {
        window.open('http://marinacomplex.com.vn/', '_blank');
    });
    $("a[href$='#!Project/SID99/DANANG-PEARL.mpx']").click(function () {
        window.open('http://danangpearl.com/', '_blank');
    });
	$("a[href$='#!Project/SID100/PANDORA-CITY.mpx']").click(function () {
        window.open('http://pandoracity.com.vn/', '_blank');
	});
	/*$("a[href$='/#!Project/SID89/NGO-QUYEN-SHOPPING-STREET.mpx']").click(function () {
	    OpenVideo('https://www.youtube.com/embed/Cyac5RT6a5M?autoplay=1');
        alert('fsd');
	});*/
    $("a[href$='#!Project/SID108/DRAGON-SMART-CITY.mpx']").click(function () {
        window.open('http://dragonsmartcity.vn/', '_blank');
    });
}
function OpenVideo(iframe) {
    $.fancybox.open([
        {
            href: iframe,
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: '70%',
            height: '70%',
            autoSize: false,
            scrolling: 'no',
            title: 'Ngo Quyen Shopping Street',
            type: 'iframe',
            helpers: {
                title: {
                    type: 'inside'
                }
            }
        }
    ]);
}
//$(window).load(function() {
//	  $(".home_project").swipe({
//			excludedElements: "button, input, select, textarea, .noSwipe",
//			swipeLeft: function() {
//				$('a.carousel_right_btn').trigger('click');
//			},
//			swipeRight: function() {
//				$('a.carousel_left_btn').trigger('click');
//			},
//			//Default is 75px, set to 0 for demo so any distance triggers swipe
//			threshold:0
//	  });
//	  $(".home_slider").swipe({
//			excludedElements: "button, input, select, textarea, .noSwipe",
//			swipeLeft: function() {
//				 $('#slider img').attr("data-transition","sliceUpDownLeft");
//			     $('a.nivo-nextNav').trigger('click');
//				 $('#slider img').removeAttr("data-transition");
//			},
//			swipeRight: function() {
//				 $('#slider img').attr("data-transition","sliceUpDown");
//				 $('a.nivo-prevNav').trigger('click');
//				 $('#slider img').removeAttr("data-transition");
//			},
//			threshold:0
//      });
//	  NewItemImage();
//});
function OtherNewsReadmore() {
    $('.other_new_readmore_btn').click(function () {
        var other_new_item = $('.news_other_item_bg a');
        if (other_new_item.hasClass('hidden_view_01')) {
            $('.hidden_view_01').css({ height: 'auto' });
            $('.hidden_view_01').slideDown();
            other_new_item.removeClass('hidden_view_01');
        } else if (other_new_item.hasClass('hidden_view_02')) {
            $('.hidden_view_02').css({ height: 'auto' });
            $('.hidden_view_02').slideDown();
            other_new_item.removeClass('hidden_view_02');
        } else if (other_new_item.hasClass('hidden_view_03')) {
            $('.hidden_view_03').css({ height: 'auto' });
            $('.hidden_view_03').slideDown();
            other_new_item.removeClass('hidden_view_03');
        }
        if (!other_new_item.hasClass('hidden_view_01') && !other_new_item.hasClass('hidden_view_02') && !other_new_item.hasClass('hidden_view_03')) {
            $(this).hide();
        }
    });
}
function SubMenu() {
    //$('.parent_menu_item').child('.test').append($('.sub_menu_bg'));
    $('nav > ul > .dropdown').stop().hover(
        function () {
            $(this).find('.sub_menu_bg').stop().slideDown();
            var sub_menu_item_bg = $(this).find('.sub_list');
            var sub_menu_left = $(this).offset().left - (sub_menu_item_bg.width() / 2) + 16;
            sub_menu_item_bg.css({ marginLeft: sub_menu_left + 'px' });
            if (sub_menu_left + sub_menu_item_bg.width() > $('.container').width()) {
                var sub_menu_right = ($(window).width() - $('.container').width()) / 2;
                sub_menu_item_bg.css({ marginLeft: 0, float: 'right', marginRight: sub_menu_right - 16 + 'px' });
                //alert(sub_menu_right);
            }
        },
        function () {
            $(this).find('.sub_menu_bg').stop().slideUp();
        }
    );
}
//-----------------------------------------------Contact Tabs----------------------------------------------//
// function ContactTabs() {
//     $('.contact_tab_btn_item').eq(0).addClass('selected');
//     $('.contact_tab_bg').eq(0).show();
//     $('.contact_tab_btn_item').stop().click(function () {
//         $('.contact_tab_bg ').hide();
//         $('.contact_tab_btn_item').removeClass('selected');
//         $(this).addClass('selected');
//         $('.contact_tab_bg ').eq($(this).index()).fadeIn(1000);
//     });
// }
//-----------------------------------------------About Tabs----------------------------------------------//
function AboutTabs() {
    $('.left_menu_item').eq(0).addClass('selected');
    $('.tab_content_item_bg').eq(0).show();
    $('.left_menu_item').stop().click(function () {
        $('.tab_content_item_bg').hide();
        $('.left_menu_item').removeClass('selected');
        $(this).addClass('selected');
        $('.tab_content_item_bg').eq($(this).index()).fadeIn(1000);
        $('body').animate({ scrollTop: pdb_Top-35 }, 500);
    });
}
////-----------------------------------------------Careers Tabs----------------------------------------------//
//function CareersTabs() {
//    $('.left_menu_rec_item').eq(0).addClass('selected');
//    $('.left_menu_item').eq(0).removeClass('selected');
//    $('.tab_content_item_bg').eq(0).show();
//    $('.left_menu_rec_item').stop().click(function () {
//        $('.tab_content_item_bg').hide();
//        $('.left_menu_rec_item').removeClass('selected');
//        $(this).addClass('selected');
//        $('.tab_content_item_bg').eq($(this).index()).fadeIn(1000);
//        $('body').animate({ scrollTop: pdb_Top - 35 }, 500);
//    });
//}
//-----------------------------------------------Project Tabs----------------------------------------------//
/*function CategoryTabs() {
    $('.left_menu_category_item').eq(0).addClass('selected');
    $('.tab_content_item_bg').eq(0).show();
    $('.left_menu_project_item').stop().click(function () {
        $('.tab_content_item_bg').hide();
        $('.left_menu_project_item').removeClass('selected');
        $(this).addClass('selected');
        $('.tab_content_item_bg').eq($(this).index()).fadeIn(1000);
        $('body').animate({ scrollTop: pdb_Top + $(".project_slide_bg img").height() + 82 }, 500);
    });
    $('.left_menu_category_item').click(function () {
        $('.left_menu_project_item').removeClass('selected');
        $(this).addClass('selected');
        index = $(this).index('.left_menu_project_item');
        $('.tab_content_item_bg.project:eq(' + index + ')').scrollTo(500);
    });
}*/
function ProjectTabs() {
    if (!isTouchSupported()) {
        $('.left_menu_project_item').removeClass('for-touch');
    }
    $('.left_menu_project_item').click(function () {
        index = $(this).index('.left_menu_project_item');
        $('.tab_content_item_bg.project:eq(' + index + ')').scrollTo(500);
        $('.left_menu_project_item').removeClass('selected');
        $(this).addClass('selected');
    });
}
function isTouchSupported() {
    var msTouchEnabled = window.navigator.msMaxTouchPoints;
    var generalTouchEnabled = "ontouchstart" in document.createElement("div");

    if (msTouchEnabled || generalTouchEnabled) {
        return true;
    }
    return false;
}
jQuery.fn.extend(
{
    scrollTo: function(speed, easing) {
        return this.each(function() {
            var targetOffset = $(this).offset().top - 69;
            $('html,body').animate({ scrollTop: targetOffset }, speed, easing);
        });
    }
});
//-----------------------------------------------New Item Image----------------------------------------------//
//function NewItemImage() {
//    //alert(currentBootstrapBreakPoint);
//    if (currentBootstrapBreakPoint != 'xs' && currentBootstrapBreakPoint != 'sm') {
//        $('.news_sub_item_bg').height(($('.news_item_bg').height() - 15) / 2);
//        /*$('.news_silde_item_bg img').each(function() {
//            if ($(this).width() < $(this).parent().width()) {
//                $(this).width('100%');
//            }
//        });*/
//    }
//}

function NewMenuSelected() {
    try {
        var url = window.location.href;
        url = url.substring(url.indexOf("CID"));
        url = url.substring(0, url.indexOf("index.html"));
        $('.news_menu_item').each(function() {
            var href = $(this).attr("href");
            href = href.substring(href.indexOf("CID"));
            href = href.substring(0, href.indexOf("index.html"));
            if (href == url) {
                $('.news_menu_item').removeClass('selected');
                $(this).addClass('selected');
            }
        });
    } catch (ex) { }
}
//-----------------------------------------------Fixed Menu----------------------------------------------//
var menuPostion = 0;
function GetMenuPostion() {
    menuPostion = $('.header_menu_bg_m').offset().top;
}
function FixedMenu() {
    try {
        if (currentBootstrapBreakPoint === 'xs' || currentBootstrapBreakPoint === 'sm') {
            if (menuPostion === 0) {
                menuPostion = $('.header_menu_bg_m').offset().top;
            }
            if ($(document).scrollTop() > menuPostion) {
                $(".header_menu_bg_m").css({ position: "fixed", top: 0, left: 0 });
                //$(".body_bg").css({ marginTop: '46px' });
                //$(".home_title_bg").css({ marginTop: '72px', marginBottom: '-72px' });
            }
            else if ($(document).scrollTop() < menuPostion) {
                $(".header_menu_bg_m").css({ position: "relative", marginBottom: '-50px' });
                //$(".body_bg").css({ marginTop: '0' });
                //$(".home_title_bg").css({ marginTop: '26px', marginBottom: '-26px' });
            }
        }else{
            //alert($('.main_menu_bg').offset().top);
            if ($(document).scrollTop() > 36) {
                $(".home_menu_bg").css({
                    //height: '52px',
                    position: "fixed",
                    borderBottom: '3px solid rgba(245,130,32,1)',
                    backgroundColor: 'rgba(0,102,179,0.8)',
                    top: 0
                });
                //$('.main_menu_bg').css({ marginTop: '-12px' });
                //$('.logo img').css({ marginTop: '-8px', width: '186px' });
                //$('.body_bg').css({ marginTop: '46px' });
            }
            if ($(document).scrollTop() < 36) {
                $(".home_menu_bg").css({
                    //height: '79px',
                    position: "absolute",
                    borderBottom: '3px solid rgba(245,130,32,0.80)',
                    backgroundColor: 'rgba(0,102,179,0)',
                    top: '36px'
                });
                //$('.main_menu_bg').css({ marginTop: '3px' });
                //$('.logo img').css({ width: '239px', marginTop: '0' });
                //$('.body_bg').css({ marginTop: '0' });
            }
        }
    } catch (ex) { }
    try {
        if (currentBootstrapBreakPoint != 'xs') {
            //alert(pdb_Top);
            if (pdb_Top + 30 < $(document).scrollTop()) {
                $(".fixed_menu_bg").css({ position: "fixed", width: menuW + 'px', top: '95px' });
                //$('.page_bg').css({ marginTop: '39px' });
            }
            if ($(document).scrollTop() < pdb_Top + 30) {
                $(".fixed_menu_bg").css({ position: "static" });
                //$('.page_bg').css({ marginTop: '0' });
            }
        }
        if (currentBootstrapBreakPoint != 'xs' && currentBootstrapBreakPoint != 'sm') {
            $('.tab_content_item_bg.project').each(function (index) {
                if ($(document).scrollTop() > $('.tab_content_item_bg.project')[index].offsetTop + pdb_Top) {
                    $('.left_menu_project_item').removeClass('selected');
                    //alert($('.tab_content_item_bg.project')[index].offsetTop);
                    $('.left_menu_project_item:eq(' + index + ')').addClass('selected');
                }
            });
        }
    } catch (ex) { }

}
//-----------------------------------------------Show Mobile Menu----------------------------------------------//
function MobileMenu() {
    $('.menu_btn_m').off().stop().click(function () {
        if (!$(this).hasClass('active')) {
            ShowMobileMenu();
        } else {
            HideMobileMenu();
        }
    });
    $('.main_menu_bg_m a, .reservation_btn, .logo').off().stop().click(function () {
        HideMobileMenu();
    });
    $('.page_ajax, .footer_bg').off().stop().click(function () {
        HideMobileMenu();
    });
}
function ShowMobileMenu() {
    $('.menu_btn_m').addClass('active');
    $('.main_menu_bg_m').slideDown();
    //$('.body_bg').stop().fadeTo("slow" , 0.3);
}
function HideMobileMenu() {
    $('.menu_btn_m').removeClass('active');
    $('.main_menu_bg_m').slideUp();
    //$('.body_bg').stop().fadeTo("slow" , 1);
}
//-----------------------------------------------Carousel----------------------------------------------//
function CarouselControl() {
    try {
        //$('.home_project_carousel').height(MaxHeight('.home_project_item_bg') + 20);
//        $('#eventCarousel_D').carousel({
//            interval: 15000
//        });
		$('.fdi-Carousel .item').each(function () {
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			if (next.next().length > 0) {
				next.next().children(':first-child').clone().appendTo($(this));
			}
			else {
				$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
			}
		});
        $('#home_new_carousel').carousel({
            interval: 6000
        });
        $('#home_new_carousel_mb').carousel({
            interval: 8000
        })
    } catch (ex) { }
}
function PartnerCarousel(){
	$('.partner_bg.carousel').jCarouselLite({
		circular: true,
		mouseWheel: true,
		auto: true,
  		timeout: 3000,
		swipe:true,
		speed: 800,
		autoWidth: true,
		visible:3,
		responsive:true
	});
}
function ProjectCarousel() {
    NivoSliderLoad();
}
//-----------------------------------------------Set Current Menu Item----------------------------------------------//
function SetCurrentMenuItem() {
    if (currentBootstrapBreakPoint != 'xs' && currentBootstrapBreakPoint != 'sm') {
        var url = window.location.href;
        $('.main_menu_bg a').removeClass('selected');
        if (url.indexOf("#!Home/") > 0 || url.indexOf(".mpx") < 0) {
            $('.main_menu_bg a').eq($('.main_menu_bg a').length - 1).addClass('selected');
            $('.copy_right div').hide();
        } else {
            url = url.substring(url.indexOf("#!"));
            url = url.substring(0, url.indexOf("index.html"));
            $('.main_menu_bg a').each(function() {
                var href = $(this).attr("href");
                href = href.substring(href.indexOf("#!"));
                href = href.substring(0, href.indexOf("index.html"));
                if (href == url) {
                    $(this).addClass('selected');
                }
            });
            $('.copy_right div').show();
        }
    } else {
        SetCurrentMenuItemMobile();
    }
}
function SetCurrentMenuItemMobile() {
    var url = window.location.href;
    $('.main_menu_bg_m .menu_item').removeClass('selected');
    if (url.indexOf("#!Home/") > 0 || url.indexOf(".mpx") < 0) {
        $('.main_menu_bg_m .menu_item').eq(0).addClass('selected');
    } else {
        url = url.substring(url.indexOf("#!"));
        url = url.substring(0, url.indexOf("index.html"));
        $('.main_menu_bg_m .menu_item').each(function () {
            var href = $(this).attr("href");
            href = href.substring(href.indexOf("#!"));
            href = href.substring(0, href.indexOf("index.html"));
            //alert(url + " - " + href);
            if (href == url) {
                $(this).addClass('selected');
            }
        });
    }
}
//-----------------------------------------------Gallery Item Hover----------------------------------------//
function GalleryItemHover(control){
	$(control).hover(
		  function () {
			  	var tit = $(this).attr("accesskey");
				//$(this).attr("title", "");
				$(this).append('<div class="gallery_img_hover"></div><div class="gallery_img_title">'+tit+'</div>');
				$(this).children('.gallery_img_hover, .gallery_img_title').fadeIn();
				//$(this).children('.gallery_img_title').animate({marginTop:'-32px'},500);
		  },
		  function () {
			  	//$(this).attr("title",$(this).children('.gallery_img_title').text());
				$(this).children('.gallery_img_hover, .gallery_img_title').fadeOut(function(){
					$(this).remove();
				});
		  }
	);
}
//-----------------------------------------------Float Auto Margin----------------------------------------//
function FloatAutoMargin(control, noCell){
	num = $(control).length;
	for(i=0;i<=num;i+=1){
		if((i+1)%noCell==0)
		{
			$(control+':eq('+i+')').css({marginRight:'0px'});
		}
	}
}
//-
//----------------------------------------------Google Map----------------------------------------------//
function GoogleMap(control){
    try {
        if (currentBootstrapBreakPoint === 'xs' || currentBootstrapBreakPoint === 'sm') {
            $(control).click(function() {
                $(this).attr('href', 'https://goo.gl/maps/6LXKd');
            });
        } else {
            $(control).fancybox({
                width: '900',
                height: '500',
                autoScale: true,
                openEffect: 'elastic',
                closeEffect: 'elastic',
                scrolling: 'no',
                fitToView: false,
                type: 'iframe',
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
        }
	}catch(ex){}
}
function LogoShine(){
    $(".peShiner").peShiner({
		color: "white",
        duration: 2,
        glow: 0,
        repeat: 1.5,
        reverse: false,
		angle: 10
});
$(".header_slogan").peShiner({
    color: "mono",
    glow: 0,
    reverse: false,
    angle: 15,
    duration: 4
});
}
//function BodyCenter(){
//	var bt = ($(window).height() - 600)/2 + 30;
//	$('.page_body_bg').css({top: bt + 'px'});
//}
function VerticalAlign(control){
	var bt = (520 - $(control).height())/2;
	$(control).css({marginTop: bt + 'px'});
}
//----------------------Show More Info------------------------------//
function ScrollToItem(selector){
	var pos = $(selector).position().top+15;
	$('html, body').animate({scrollTop:pos+'px'},500);
}
//-----------------------------------------------Nivo Slider----------------------------------------------//
function NivoSliderLoad(){
	$('#slider').nivoSlider({
			effect: 'fade',//'fold,fade,sliceDown,boxRainReverse', // Specify sets like: 'fold,fade,sliceDown'
			slices: 30, // For slice animations
			boxCols: 20, // For box animations
			boxRows: 10, // For box animations
			animSpeed: 500, // Slide transition speed
			pauseTime: 9000, // How long each slide will show
			startSlide: 0, // Set starting Slide (0 index)
			directionNav: true, // Next & Prev navigation
			directionNavHide: true, // Only show on hover
			controlNav: false, // 1,2,3... navigation
			controlNavThumbs: false, // Use thumbnails for Control Nav
			pauseOnHover: false, // Stop animation while hovering
			manualAdvance: false, // Force manual transitions
			//prevText: 'Prev', // Prev directionNav text
			//nextText: 'Next', // Next directionNav text
			randomStart: false, // Start on a random slide
			captionOpacity: 1,
			afterLoad: function () {
			    $('#slider .nivo-caption').css({ left: 0, opacity: '1' });
			    setTimeout("ProjectPageLoad()", 1000);
			},
			beforeChange: function () { $('#slider .nivo-caption').css({left:'-100%', opacity:'0'}) },
			afterChange: function () {
			    $('#slider .nivo-caption').css({ left: 0, opacity: '1' });
			    ProjectPageLoad();
			}
//			slideshowEnd: function(){}, // Triggers after all slides have been shown
//			lastSlide: function(){}, // Triggers when last slide is shown
//			afterLoad: function(){Cufon.refresh();} // Triggers when slider has loaded
});

}

//function SliderNav(){
//	var cnw = $('.theme-default .nivo-controlNav').width();
//	//alert(cnw);
//	$('.theme-default .nivo-controlNav').css({marginLeft:-cnw/2+'px'});
//	$('.theme-default a.nivo-nextNav').css({marginRight:445-cnw/2+'px'});
//	$('.theme-default a.nivo-prevNav').css({marginLeft:445-cnw/2+'px'});
//}
//----------------------Image Hover Grayscale------------------------------//
function ImageHoverGrayscale(control)
{
	$(control).greyScale({
		  // call the plugin with non-defult fadeTime (default: 400ms)
		  fadeTime: 500,
		  reverse: false
	});
}
//-----------------------------------------------Share This Hover-----------------------------------------//
//function ShareThisHover(control) {
//	$(control).hover(
//		  function () {
//			  //$('.sharethis_bg').stop().fadeTo(500, 1);
//			  //$('.sharethis_bg').stop().show(500);
//			  $('.sharethis_bg').stop().animate({height:'68px'},300);
//		  },
//		  function () {
//			  //$('.sharethis_bg').stop().fadeTo(500, 0);
//			  //$('.sharethis_bg').stop().hide(500);
//			  $('.sharethis_bg').stop().animate({height:'0px'},300);
//		  }
//
//	);
//	$('.sharethis_bg').hover(
//		  function () {
//			  //$(this).stop().fadeTo(0, 1);
//			  //$(this).stop().show(500);
//			  $(this).stop().animate({height:'68px'},300);
//		  },
//		  function () {
//			  //$(this).stop().fadeTo(500, 0);
//			  //$(this).stop().hide(500);
//			  $(this).stop().animate({height:'0px'},300);
//		  }
//
//	);
//}
////-----------------------------------------------Check Room----------------------------------------//
//function CheckRoom(){
//	var dates = $(".tf_check_in, .tf_check_out").datepicker({
//            minDate: 0,
//            dateFormat: 'dd/mm/yy',
//            onSelect: function(selectedDate) {
//                var option = $(this).hasClass("tf_check_in") ? "minDate" : "maxDate",
//				instance = $(this).data("datepicker"),
//				date = $.datepicker.parseDate(
//				instance.settings.dateFormat ||
//				$.datepicker._defaults.dateFormat,
//				selectedDate, instance.settings);
//				dates.not(this).datepicker("option", option, date);
//            }
//    });
//	$('.check_in_btn').click(function() {
//		$(".tf_check_in").datepicker("show");
//    });
//	$('.check_out_btn').click(function() {
//		$(".tf_check_out").datepicker("show");
//    });
//}
//----------------------Link Hover Effect------------------------------//
function LinkHoverEffect(selector, slide){
	$(selector).hover(
	  function () {
		  	$(this).animate({paddingLeft: slide + 'px'},200);
	  },
	  function () {
		  	$(this).animate({paddingLeft:'0px'},200);
	  }
	);
}
//----------------------Image Hover Effect------------------------------//
function ImageHoverEffect(selector){
	$(selector).hover(
	  function () {
		  	$(this).children('div').stop().fadeTo(300, 0.5);
			$(this).children('img').animate({marginLeft:'-20px',marginTop:'-20px', width:'255px', height:'180px'},300);
	  },
	  function () {
		  	$(this).children('div').stop().fadeTo(300, 0);
			$(this).children('img').animate({marginLeft:'0px',marginTop:'0px',width:'215px', height:'140px'},300);
	  }
	);
}
//-----------------------------------------------Set Left Panel-----------------------------------------//
function SetLeftPanel(control) {
	left = ($(window).width()-960)/2;
	//alert(left);
	$(control).css({left:left+'px'});
}
//-----------------------------------------------View Full Image-----------------------------------------//
function ViewFullImage(control){
	$(control).attr("href", function() {
         return $(this).children('img').attr('src');
    });
	//$(control).attr("title", function() {
//         return $(this).children('.img_name').text();
//    });
	$(control).attr("rel", "full_images");
	ShowFancybox(control);
}
//----------------------Auto Fancy Box------------------------------//
function AutoFancyBox(control){
	for(i=0; i<$(control).length;i++){
		$(control).eq(i).parent('a').attr("href", $(control).eq(i).attr('src'));
		$(control).eq(i).parent('a').attr("rel", 'about_img');
	}
	//$(control).attr("rel", 'about_img');
}
//-----------------------------------------------Open Datepicker-----------------------------------------//
function OpenDatepickerButton(control, datepicker){
    $(control).click(function() {
		var visible = $('#ui-datepicker-div').is(':visible');
		$(datepicker).datepicker(visible ? 'hide' : 'show');
    });
}
function OpenDatepicker(datepicker){
	$(datepicker).datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: 'dd/mm/yy',
		autoSize: true,
		showAnim: 'slideDown'
	});
}
//----------------------------------------------Get Query String---------------------------------------------//
function getQueryString(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search.substring(1));
    if (results == null) return "";
    else return results[1];
}
//----------------------------------------------Check URL String---------------------------------------------//
function CheckURLString(checkStr) {
    //var urlStr = window.location
    if (window.location.href.indexOf(checkStr) != -1) {
        return true;
    }
    else return false;
}
//----------------------Grayscale Image Effect------------------------------//
function GrayscaleImageEffect(selector, imgHeight){
	grayImg = $(selector + ' img').attr('src');
	$(selector).css({background: 'url('+grayImg+') no-repeat'});
	$(selector + ' img').css({marginTop: '-'+imgHeight+'px', display:'none'});
	$(selector).hover(
	  function () {
			$(this).children('img').stop().fadeTo(700, 1);
	  },
	  function () {
			$(this).children('img').stop().fadeTo(500, 0);
	  }
	);
}
//-----------------------------------------------Combobox----------------------------------------//
function Combobox(control){
	$(control).selectbox();
}
//-----------------------------------------------CSS 3 for IE-----------------------------------------//
function Css3ForIE(control){
	if (window.PIE) {
        $(control).each(function() {
            PIE.attach(this);
        });
	}
}
//-----------------------------------------------To Top Page-----------------------------------------//
function ToTopPage(control){
    $(document).scroll(function () {
        if ($(window).scrollTop() != 0) {
            $(control).fadeIn();
        } else {
            $(control).fadeOut();
        }
    });
    $(control).click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
}
//-----------------------------------------------Go Down Page-----------------------------------------//
function GoDownPage(control) {
    $(document).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $(control).fadeIn();
        } else {
            $(control).fadeOut();
        }
    });
    $(control).click(function () {
        $('html, body').animate({ scrollTop: 584 }, 500);
        return false;
    });

}
//----------------------Show Fancybox------------------------------//
function ShowFancybox(control){
	$(control).fancybox({
		//width				: '50%',
		//height				: '75%',
		autoScale		: true,
		openEffect 	:	'elastic',
		closeEffect 	:	'elastic',
		fitToView	: true,
		scrolling: 'yes',
		type: 'image',
		helpers: {
            title: {
                type: 'inside'
            },
            thumbs: {
                width: 70,
                height: 50,
                position: 'bottom'
            }
        }
		//type			: 'iframe',
		//titlePosition	: 'over'
		//titleFormat		: function(title, currentArray, currentIndex, currentOpts) { return '<span id="fancybox-title-over">' + (title.length ? title : '') + '<br />Image ' + (currentIndex + 1) + ' / ' + currentArray.length + '</span>';}
	});
}
function ShowPanorama(control){
	$(control).fancybox({
		width				: '75%',
		height				: '95%',
		autoScale		: true,
		openEffect 	:	'elastic',
		closeEffect 	:	'elastic',
		scrolling: 'no',
		fitToView	: false,
		type: 'iframe',
		helpers: {
				title: {
					type: 'inside'
				},
				thumbs: {
					width: 70,
					height: 50,
					position: 'bottom'
				}
			}
	});
}
//----------------------------------------------Search Control Focus----------------------------------------------
function SearchControlFocus(control){
    $.cookie("search_tf_value", $(control).val(), { expires: 7, path: '/' });
    $(control).focus(function () {
        if ($(this).val() == $.cookie("search_tf_value")) {
	        $(this).val("");
	    }
	});
	$(control).blur(function () {
		if($(this).val()==""){
		    $(this).val($.cookie("search_tf_value"));
		}
    });
}
//-----------------------------------------------Resolve Url-----------------------------------------//
function ResolveUrl(url) {
    if (url.indexOf("_/index.html") == 0) {
        url = baseUrl + url.substring(2);
    }
    return url;
}
// Replaces all instances of the given substring.
String.prototype.replaceAll = function (
strTarget, // The substring you want to replace
strSubString // The string you want to replace in.
) {
    var strText = this;
    var intIndexOfMatch = strText.indexOf(strTarget);

    // Keep looping while an instance of the target string
    // still exists in the string.
    while (intIndexOfMatch != -1) {
        // Relace out the current instance.
        strText = strText.replace(strTarget, strSubString)

        // Get the index of any next matching substring.
        intIndexOfMatch = strText.indexOf(strTarget);
    }

    // Return the updated string with ALL the target strings
    // replaced out with the new substring.
    return (strText);
}
function Tooltip() {
    $("[title]").style_my_tooltips({
        tip_follows_cursor: false,
        tip_delay_time: 700,
        tip_fade_speed: 300,
        attribute: "title"
    });
}

//function ResolveUrl(url) {
//    if (url.indexOf("~/") == 0) {
//        url = baseUrl + url.substring(2);
//    }
//    return url;
//}
//// Replaces all instances of the given substring.
//String.prototype.replaceAll = function (
//strTarget, // The substring you want to replace
//strSubString // The string you want to replace in.
//) {
//    var strText = this;
//    var intIndexOfMatch = strText.indexOf(strTarget);

//    // Keep looping while an instance of the target string
//    // still exists in the string.
//    while (intIndexOfMatch != -1) {
//        // Relace out the current instance.
//        strText = strText.replace(strTarget, strSubString)

//        // Get the index of any next matching substring.
//        intIndexOfMatch = strText.indexOf(strTarget);
//    }

//    // Return the updated string with ALL the target strings
//    // replaced out with the new substring.
//    return (strText);
//}
//function Tooltip(){
//	$("[title]").style_my_tooltips({
//		tip_follows_cursor:false,
//		tip_delay_time:700,
//		tip_fade_speed:300,
//		attribute:"title"
//	});
//}
//-----------------------------------------------Gridster Gallery----------------------------------------------//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function GridsterGallery() {
    gridster = $(".gridster ul").gridster({
         widget_margins: [8, 8],
            widget_base_dimensions: [106, 106],
          helper: 'clone',
          resize: {
            enabled: true
          }
        }).data('gridster');
//    gridster.resize_widget(gridster.$widgets.eq(getRandomInt(0, 18)), getRandomInt(1, 2), getRandomInt(1, 2));
//    gridster.serialize();
}
function ShowGallery(control) {
    $(control).fancybox({
        //maxWidth: '85%',
        //maxHeight: '85%',
        loop: true,
        prevEffect: 'elastic',
        nextEffect: 'elastic',
        //prevSpeed: 'slow',
        //nextSpeed: 'slow',
        nextEasing: 'linear',
        prevEasing: 'linear',
        //        openEffect	: 'none',
        //		closeEffect	: 'none',
        //autoSize: true,
        helpers: {
            title: {
                type: 'inside'
            },
            thumbs: {
                width: 70,
                height: 50,
                position: 'bottom'
            }
        },
        beforeLoad: function () {
            this.title = $(this.element).attr('caption');
        }
        //type			: 'iframe',
        //titlePosition	: 'over'
        //titleFormat		: function(title, currentArray, currentIndex, currentOpts) { return '<span id="fancybox-title-over">' + (title.length ? title : '') + '<br />Image ' + (currentIndex + 1) + ' / ' + currentArray.length + '</span>';}
    });
}
//function EqualHeight(control)
//{
//    var h = 0;
//    //var h = "316px";
//    $(control).each(function(){
//        $(this).css({'height':'auto'});
//        if($(this).outerHeight() > h)
//        {
//            h = $(this).outerHeight();
//        }
//        $(control).css({'height':h});
//    });
//}
function MaxHeight(control) {
    var h = 0;
    var ih = $('.project_item_img img').eq(0).height();
    $(control).each(function () {
        $(this).css({ 'height': 'auto' });
        if ($(this).outerHeight() > h) {
            h = $(this).outerHeight();
        }
        $(control).css({ 'height': h });
    });
    $(control).css({ 'height': h });
    // $('.home_project_carousel2').css({ 'height': h + ih });
}
function HomeLoad() {
    var url = window.location.href;
    if (url.indexOf("Home/index.html") > 0 || url.indexOf(".mpx") < 0) {
        //$('.left_panel').hide();
        //$('.content_bg').css({ marginLeft: '0' });
        LoadHomeSlider('.home_slider');
    }
//    else {
//        $('.left_panel').show();
//        //LeftMenu();
//        $('.content_bg').css({ marginLeft: '235px' });
//    }
}
function LoadHomeSlider(control) {
    try {
        //setTimeout("$('.home_content_bg').width($('.home_title').width() + 1)", 150);
        var ajaxPage = ResolveUrl('_/index.html') + 'Page/HomeSlider.aspx';


        //if (CheckURLString("/localhost/")) ajaxPage = 'DatXanh/Page/HomeSlider.aspx';
        $(control).load(ajaxPage, function () {
            NivoSliderLoad();
        });
    } catch (ex) { }
}
////----------------------------------------------Language Select--------------------------------------------//
//function LanguageSelect() {
//    $('.lang_menu_bg .vi').click(function () {
//        $.cookie("DXLanguage", "vi", { expires: 7, path: '/' });
//        location.reload();
//    });
//    $('.lang_menu_bg .en').click(function () {
//        $.cookie("DXLanguage", "en", { expires: 7, path: '/' });
//        location.reload();
//    });
//    //    $('.header_language_bg .ru').click(function () {
//    //        $.cookie("Language", "ru", { expires: 7, path: '/' });
//    //        location.reload();
//    //    });
//    //    $('.header_language_bg .zh-cn').click(function () {
//    //        $.cookie("Language", "zh-cn", { expires: 7, path: '/' });
//    //        location.reload();
//    //    });
//}
function QueryString(url, str) {
    var val = url.substring(url.indexOf(str) + str.length);
    val = val.substring(0, val.indexOf("index.html"));
    return val;
}
//----------------------------------------------Dialog Message--------------------------------------------//
function DialogMessage() {
    $("#dialog-message").dialog({
        bgiframe: true,
        autoOpen: false,
        resizable: false,
        minheight: 220,
        //minWidth: 500,
        width: 'auto',
        maxWidth: '100%',
        modal: true,
        closeOnEscape: true,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });
    $('#dialog-message').dialog({ dialogClass: "fixed_dialog" });
    $('.fixed_dialog.ui-dialog').css({ position: "fixed" });
}
function QueryString(url, str) {
    var val = url.substring(url.indexOf(str) + str.length);
    val = val.substring(0, val.indexOf("index.html"));
    return val;
}
//-----------------------------------------------Auto Image Src----------------------------------------------//
function AutoImageSrc(control, host) {
    if (CheckURLString("localhost/index.html")) {
        $(control).each(function() {
            if ($(this).attr("src").indexOf('/' + host) < 0) {
                $(this).attr("src", '/' + host + $(this).attr("src"));
            }
        });
    }
}
//-----------------------------------------------Set Currency Text-----------------------------------------//
function SetCurrencyText(control) {
    $(control).autoNumeric('init', {
        aSep: '.',
        aDec: ',',
        aSign: ' ',
        mDec: '0',
        pSign: 's',
        vMin: '-999999999999',
        vMax: '999999999999'

    });
}
(function ($) {
    $.fn.imgLoad = function (callback) {
        return this.each(function () {
            if (callback) {
                if (this.complete || /*for IE 10-*/$(this).height() > 0) {
                    callback.apply(this);
                }
                else {
                    $(this).on('load', function () {
                        callback.apply(this);
                    });
                }
            }
        });
    };
})(jQuery);
