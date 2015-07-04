var name = "";
var phone = "";
var comment = "";
var foundation = "";

function sendAjaxToPHP_1() {
	$.ajax({
		type: "POST",
		url: "assets/scripts/php/mail.php",
		data: "name="+name+"&phone="+phone+"&comment="+comment+"&foundation="+foundation,
		success: function(data) {
			//alert(data);
			//if (data == 'true') {
			$("#feedback-popup").html('Заявка отправлена!');
			$("#feedback-link").click();
			//} else if (data == 'false') {
			//	$("#feedback-popup").html('Письмо не отправлено!');
			//	$("#feedback-link").click();
			//};
		}
	});
};

function clearInputs() {
	$("#name-1,#name-2,#name-3,#name-4,#name-5,#name-6,#name-7").val("");
	$("#phone-1,#phone-2,#phone-3,#phone-4,#phone-5,#phone-6,#phone-7").val("");
	$("#text-5,#text-6").val("");
}

$(document).ready(function() {
	$('#submit-1').click(function() {
		name = $("#name-1").val();
		phone = $("#phone-1").val();
		comment = "-----------------";
		foundation = "Заказ звонка";
		sendAjaxToPHP_1(); clearInputs();
	});
	$('#submit-2').click(function() {
		name = $("#name-2").val();
		phone = $("#phone-2").val();
		comment = "-----------------";
		foundation = "Вызов Замерщика";
		sendAjaxToPHP_1(); clearInputs();
	});
	$('#submit-3').click(function() {
		name = $("#name-3").val();
		phone = $("#phone-3").val();
		comment = "-----------------";
		foundation = "Бесплатный экспресс – замер";
		sendAjaxToPHP_1(); clearInputs();
	});
	$('#submit-4').click(function() {
		name = $("#name-4").val();
		phone = $("#phone-4").val();
		comment = "-----------------";
		foundation = "Заказ звонка";
		sendAjaxToPHP_1(); clearInputs();
	});
	$('#submit-5').click(function() {
		name = $("#name-5").val();
		phone = $("#phone-5").val();
		comment = $("#text-5").val();
		foundation = "Запись на замер";
		sendAjaxToPHP_1(); clearInputs();
	});
	$('#submit-6').click(function() {
		name = $("#name-6").val();
		phone = $("#phone-6").val();
		comment = $("#text-6").val();
		foundation = "Задать вопрос";
		sendAjaxToPHP_1(); clearInputs();
	});
	$('#submit-7').click(function() {
		name = $("#name-7").val();
		phone = $("#phone-7").val();
		comment = "-----------------";
		foundation = "Заказ звонка";
		sendAjaxToPHP_1(); clearInputs();
	});
});

