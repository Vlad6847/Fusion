$(document).ready(function () {

    let validName = false;
    let validPassword = false;

    function checkName() {
        let name = $("#username").val();

        if (null === name.match(/[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z0-9_]+$/)) {
            $("#username").parent().removeClass("has-success").addClass("has-error");
            $(".nameBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
            $(".nameBlock .glyphicon-ok").remove();
            validName = false;
        } else {
            $("#username").parent().removeClass("has-error").addClass("has-success");
            $(".nameBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
            $(".nameBlock .glyphicon-remove").remove();
            validName = true;
        }

        if (validName === true && validPassword === true) {
            $("#loginForm").unbind('submit');
        }
    }

	function checkPassword() {
        let password = $("#password").val();

        if (null === password.match(/^[\w]{4,20}$/)) {
            $("#password").parent().removeClass("has-success").addClass("has-error");
            $(".passwordBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
            $(".passwordBlock .glyphicon-ok").remove();
            validPassword = false;
        } else {
            $("#password").parent().removeClass("has-error").addClass("has-success");
            $(".passwordBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
            $(".passwordBlock .glyphicon-remove").remove();
            validPassword = true;
        }

        if (validName === true && validPassword === true) {
            $("#loginForm").unbind('submit');
        }
	}

    $("#loginForm").submit(function (event) {
        event.preventDefault();
        checkName();
        checkPassword();
    });

    $("#username").change(function () {
        checkName();
    });

     $("#password").change(function () {
        checkPassword();
    });
});
