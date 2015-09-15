$(function () { 
	$("#button").click(function() {
		$("#formMain input,#formMain select,#formMain textarea").jqBootstrapValidation(
		{
			preventSubmit: true,
			submitSuccess: function($form, event) {
				event.preventDefault(); 
				var name = $("#formMain input#name").val();  
				var telephone = $("#formMain input#telephone").val();
				var email = $("#formMain input#email").val();
				var vkid = $("#formMain input#vkid").val();
				var result_id = "messageResult";
				$.ajax({
					url:     "./send.php",
					type:     "POST",
					dataType: "html",
					data: jQuery("#"+"formMain").serialize(), 
					success: function() {
						document.getElementById(result_id).innerHTML = "<p>Ваши данные успешно переданы. Оставайтесь на связи.</p>";
						$('#formMain').trigger("reset");
					},
					error: function() {
						document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
						$('#formMain').trigger("reset");
					}
				});
				return true;
			}
		});
	});
});