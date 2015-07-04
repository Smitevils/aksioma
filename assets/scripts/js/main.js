jQuery(document).ready(function($) {

//скрипт табов

$('.content-menu ul li a').click(function() {
	var tab = $(this).attr('data-tab');
	$('.content-menu ul li a').removeClass('active');
	$(this).addClass('active');
	$('.content-reviews, .content-prices, .content-portfolio, .content-certificate, .content-scheme').removeClass('content-show').addClass('content-blur')
	if (tab == 1) {
		$('.content-reviews').addClass('content-show').removeClass('content-blur');
	} else if (tab == 2) {
		$('.content-prices').addClass('content-show').removeClass('content-blur');
	} else if (tab == 3) {
		$('.content-portfolio').addClass('content-show').removeClass('content-blur');
	} else if (tab == 4) {
		$('.content-certificate').addClass('content-show').removeClass('content-blur');
	} else if (tab == 5) {
		$('.content-scheme').addClass('content-show').removeClass('content-blur');
	}
	return false;
});


//скрипт слайдера и кнопок смены слайдера

var interval = 3000;
var slider_position = 1;

function myTimer() {
	console.log(slider_position)
	slider_position++;
	if (slider_position > 3) {slider_position = 1};
	$('.countdown-slider').find('img').css('display', 'none');
	if (slider_position == 1) {
		$('.countdown-slider').find('img').eq(0).css('display', 'block');
		$('.slider-buttons ul li').removeClass('active');
		$('.slider-buttons ul li').eq(0).addClass('active');
	} else if (slider_position == 2) {
		$('.countdown-slider').find('img').eq(1).css('display', 'block');
		$('.slider-buttons ul li').removeClass('active');
		$('.slider-buttons ul li').eq(1).addClass('active');
	} else if (slider_position == 3) {
		$('.countdown-slider').find('img').eq(2).css('display', 'block');
		$('.slider-buttons ul li').removeClass('active');
		$('.slider-buttons ul li').eq(2).addClass('active');
	};
}

var countdoun_slider = setInterval(function(){ myTimer() }, interval);
countdoun_slider; // запускаем таймер;

$('.slider-buttons ul li').click(function() {
	$('.slider-buttons ul li').removeClass('active');
	$(this).addClass('active');
	clearInterval(countdoun_slider);
	countdoun_slider = setInterval(function(){ myTimer() }, interval);
});

$('.slider-buttons ul li').eq(0).click(function() {
	slider_position = 1;
	$('.countdown-slider').find('img').css('display', 'none');
	$('.countdown-slider').find('img').eq(0).css('display', 'block');
});
$('.slider-buttons ul li').eq(1).click(function() {
	slider_position = 2;
	$('.countdown-slider').find('img').css('display', 'none');
	$('.countdown-slider').find('img').eq(1).css('display', 'block');
});
$('.slider-buttons ul li').eq(2).click(function() {
	slider_position = 3;
	$('.countdown-slider').find('img').css('display', 'none');
	$('.countdown-slider').find('img').eq(2).css('display', 'block');
});

// обработчики событий на кнопках для открытия popup
$('#show-popup-1').click(function() {
	$('#popup-link-1').click();
});

$('#show-popup-2').click(function() {
	$('#popup-link-2').click();
});

// Устанавливаем маски 
$('#phone-1').mask('+7(000) 000-00-00');
$('#phone-2').mask('+7(000) 000-00-00');
$('#phone-3').mask('+7(000) 000-00-00');
$('#phone-4').mask('+7(000) 000-00-00');
$('#phone-5').mask('+7(000) 000-00-00');
$('#phone-6').mask('+7(000) 000-00-00');
$('#phone-7').mask('+7(000) 000-00-00');

// Показываем все комменты

$('#show-all-comments').click(function(event) {
	$('.reviews-block').css('display', 'block');
	return false;
});

});