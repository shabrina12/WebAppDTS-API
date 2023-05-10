
//$("#CheckLogin").click(function () {
//    var inputEmail = $("#inputEmail").val();
//    var inputPassword = $("#inputPassword").val();

//    $.ajax({
//        type: "POST",
//        url: "https://localhost:7125/api/account/auth",
//        data: JSON.stringify({
//            "email": inputEmail,
//            "password": inputPassword
//        }),
//        datatype: "json",
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        success: function (result) {
//            //console.log("access token: " + result.data);
//            //HttpContext.Session.SetString("JWToken", result.data);
//            sessionStorage.setItem("JWToken", result.data);
//            let getToken = sessionStorage.getItem("JWToken");
//            console.log(getToken);
//        },
//    });
//});

//$("#CheckLogin").click(function () {
//    //if (sessionStorage.getItem("JWToken") == null) {

//    //}

//    var inputEmail = $("#inputEmail").val();
//    var inputPassword = $("#inputPassword").val();

//    $.ajax({
//        type: "GET",
//        url: "https://localhost:7125/api/account/auth",
//        headers: {
//            'Content-Type': 'application/json',
//            'Authorization': 'Bearer ' + sessionStorage.getItem("JWToken")
//        },
//        success: function (result) {
//            sessionStorage.setItem("JWToken", result.data);
//            let getToken = sessionStorage.getItem("JWToken");
//            console.log(getToken);
//        },
//    });
//})


    //$.ajax({
    //    type: "GET",
    //    url: "https://localhost:7125/api/account/auth",
    //    datatype: "json",
    //    headers: {
    //        'Content-Type': 'application/json',
    //        'Authorization': 'Bearer ' + sessionStorage.getItem("JWToken")
    //    },
    //    beforeSend: function (request) {
    //        var token = sessionStorage.getItem("JWToken");
    //        request.setRequestHeader("Authorization", "Bearer " + token);
    //    },
    //    success: function (response) {
    //        if (response != null) {
    //            //my code here
    //        } else {
    //            alert("Something went wrong");
    //        }
    //    },
    //    failure: function (response) {
    //        alert("fail " + response.responseText);
    //    },
    //    error: function (response) {
    //        alert("error " + response.responseText);
    //    }
    //});
