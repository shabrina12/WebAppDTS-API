//$(function () {
//    $("body").on('click', '#btnEdit', function () {
//        $("#MyPopup").modal("hide");
//        var obj = {};
//        obj.Id = $(this).attr('data-id');

//        $.ajax({
//            url: 'Home/EditCustomer',
//            data: JSON.stringify(obj),
//            type: 'POST',
//            dataType: 'html',
//            contentType: "application/json; charset=utf-8",
//            success: function (response) {
//                $("#dvPartial").html(response);
//                $("#MyPopup").modal("show");
//            }
//        });
//    });

//    $("body").on('click', '#btnAdd', function () {
//        $("#MyPopup").modal("hide");
//        $.ajax({
//            url: 'Home/AddCustomer',
//            data: {},
//            type: 'POST',
//            dataType: 'html',
//            contentType: "application/json; charset=utf-8",
//            success: function (response) {
//                $("#dvPartial").html(response);
//                $("#MyPopup").modal("show");
//            }
//        });
//    });
//});


let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//function GetEmployees() {
    $.ajax({
        type: "GET",
        url: "https://localhost:7125/api/employee",
        datatype: "json",
        success: function (data) {
            //console.log(data);
            let temp = "";
            $.each(data, (key, val) => {
                //console.log(val.birthDate);
                let birthdate = new Date(val.birthDate);
                let birthDay = birthdate.getDate();
                let birthMonth = birthdate.getMonth();
                let birthYear = birthdate.getFullYear();

                let hiringdate = new Date(val.hiringDate);
                let hiringDay = hiringdate.getDate();
                let hiringMonth = hiringdate.getMonth();
                let hiringYear = hiringdate.getFullYear();

                if (val.gender == 1) {
                    temp += `<tr>
                         <td>${val.nik}</td>      
                         <td>${val.firstName}</th>
                         <td>${val.lastName}</td>
                         <td>Female</td>
                         <td>${birthDay} ${monthNames[birthMonth]} ${birthYear}</td>     
                         <td>${val.email}</td>
                         <td>${val.phoneNumber}</td>                         
                         <td>${hiringDay} ${monthNames[hiringMonth]} ${hiringYear}</td>   
                         <td><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEdit">Edit</button></td>
                        </tr>`;
                } else if (val.gender == 0) {
                    temp += `<tr>
                         <td>${val.nik}</td>      
                         <td>${val.firstName}</th>
                         <td>${val.lastName}</td>
                         <td>Male</td>
                         <td>${birthDay} ${monthNames[birthMonth]} ${birthYear}</td>      
                         <td>${val.email}</td>
                         <td>${val.phoneNumber}</td>                         
                         <td>${hiringDay} ${monthNames[hiringMonth]} ${hiringYear}</td>  
                         <td><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEdit">Edit</button></td>
                        </tr>`;
                }
            });
            $("#tbodyPoke").html(temp);
        }
    });
//}

//function GetEmployeesMaster() {
$.ajax({
    type: "GET",
    url: "https://localhost:7125/api/employee/master",
    datatype: "json",
    success: function (data) {
        //console.log(data);
        let temp = "";
        $.each(data.message, (key, val) => {
            //console.log(val.nik);
            //console.log(val.major);
            //console.log(val.universityName);
            let birthdate = new Date(val.birthDate);
            let birthDay = birthdate.getDate();
            let birthMonth = birthdate.getMonth();
            let birthYear = birthdate.getFullYear();

            let hiringdate = new Date(val.hiringDate);
            let hiringDay = hiringdate.getDate();
            let hiringMonth = hiringdate.getMonth();
            let hiringYear = hiringdate.getFullYear();

            if (val.gender == 1) {
                temp += `<tr>
                         <td>${val.nik}</td>      
                         <td>${val.firstName}</th>
                         <td>${val.lastName}</td>
                         <td>Female</td>
                         <td>${birthDay} ${monthNames[birthMonth]} ${birthYear}</td>     
                         <td>${val.email}</td>
                         <td>${val.phoneNumber}</td>                         
                         <td>${hiringDay} ${monthNames[hiringMonth]} ${hiringYear}</td>
                         <td>${val.major}</td>
                         <td>${val.degree}</td>      
                         <td>${val.universityName}</td>       
                        </tr>`;
            } else if (val.gender == 0) {
                temp += `<tr>
                         <td>${val.nik}</td>      
                         <td>${val.firstName}</th>
                         <td>${val.lastName}</td>
                         <td>Male</td>
                         <td>${birthDay} ${monthNames[birthMonth]} ${birthYear}</td>      
                         <td>${val.email}</td>
                         <td>${val.phoneNumber}</td>                         
                         <td>${hiringDay} ${monthNames[hiringMonth]} ${hiringYear}</td>   
                         <td>${val.major}</td>
                         <td>${val.degree}</td>      
                         <td>${val.universityName}</td> 
                        </tr>`;
            }
        });
        $("#tbodyMaster").html(temp);
    }
});
//}

//onclick="detailEmployee('${val}')"

//function detailBook(stringUrl) {
//    $.ajax({
//        url: stringUrl
//    }).done(res => {
//        if (res.volumeInfo.imageLinks == undefined) {
//            $("#imgBook").attr("src", "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg");
//        } else {
//            $("#imgBook").attr("src", res.volumeInfo.imageLinks.thumbnail);
//        }
//        $('.book-title').html(`<h4>${res.volumeInfo.title}</h4>`);
//        $('.book-author').html(`<p>by ${res.volumeInfo.authors}</p>`);
//        if (res.volumeInfo.averageRating !== undefined && res.volumeInfo.ratingsCount !== undefined) {
//            $('.avg-rating').html(`<p>${res.volumeInfo.averageRating}<img src="https://thumbs.dreamstime.com/b/ratings-stars-icons-vector-symbol-isolated-one-star-rating-illustration-ranking-poor-quality-yellow-white-background-213934865.jpg" width="30" height="30" alt="star rating" /> from ${res.volumeInfo.ratingsCount} ratings</p>`);
//        } else if (res.volumeInfo.averageRating == undefined && res.volumeInfo.ratingsCount == undefined) {
//            $('.avg-rating').html(`<p>no rating yet</p>`);
//        }
//        /* $('.pages').html(`<h6>${res.volumeInfo.pageCount} pages</h6>`);*/
//        if (res.volumeInfo.description == undefined) {
//            $('.book-desc').html(`<p>no description</p>`);
//        } else {
//            $('.book-desc').html(`<p>${res.volumeInfo.description}</p>`);
//        }
//        $('.publisher').html(`<p>publisher: ${res.volumeInfo.publisher}</p>`);
//        $('.published-date').html(`<h6>${res.volumeInfo.pageCount} pages, published in ${res.volumeInfo.publishedDate}</h6>`);
//        $('.genre').html(`<h6>Genres: ${res.volumeInfo.categories}</h6>`);
//    })
//}