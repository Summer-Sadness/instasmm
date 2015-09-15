
$("#button").click(function () {
    var fv = $('#formMain').data('formValidation'); // FormValidation instance
    fv.validate();
    if (fv.isValid()) { // Проверка валидности формы. Ensure that the validate() method is already called before calling this one.
        var name = $("#formMain input#name").val();
        var telephone = $("#formMain input#telephone").val();
        var email = $("#formMain input#email").val();
        var vkid = $("#formMain input#vkid").val();
        var result_id = "messageResult";
        $.ajax({
            url: "./send.php",
            type: "POST",
            dataType: "html",
            data: jQuery("#" + "formMain").serialize(),
            success: function (result) {
                console.log(result);
                document.getElementById(result_id).innerHTML = "<p>Ваши данные успешно переданы. Оставайтесь на связи.</p>";
                $('#formMain').trigger("reset");
                fv.resetForm();
            },
            error: function () {
                document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
                $('#formMain').trigger("reset");
                fv.resetForm();
            }
        });
    }
});
