
$("#CheckLogin").click(function () {
    var inputEmail = $("#inputEmail").val();
    var inputPassword = $("#inputPassword").val();

    $.ajax({
        type: "POST",
        url: "https://localhost:7125/api/account/auth",
        data: JSON.stringify({
            "email": inputEmail,
            "password": inputPassword
        }),
        datatype: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        success: function (result) {
            console.log("access token: " + result.data);
        },
    });
})


