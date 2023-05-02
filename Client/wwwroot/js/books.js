//https://stackoverflow.com/questions/64330445/google-books-api-shows-only-10-results-want-to-iterate-the-startindex-so-that-i
//https://stackoverflow.com/questions/46277878/how-to-get-books-of-searched-category-in-google-books-api
//check this: https://stackoverflow.com/questions/46311321/click-on-button-based-on-data-category-after-page-load
document.getElementById('livesearchtags').addEventListener('keypress', function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        //event.preventDefault();
        // Trigger the button element with a click
        //document.getElementById("livesearchtags").click();
        LiveSearch()
    }
});

document.getElementById('fiction').addEventListener('click', function () {
    FilterCategory("fiction");
});

document.getElementById('biography').addEventListener('click', function () {
    FilterCategory("Biography&Autobiography");
});

document.getElementById('self-help').addEventListener('click', function () {
    FilterCategory("Self-Help");
});

document.getElementById('comics').addEventListener('click', function () {
    FilterCategory("Comics & Graphic Novels");
});

document.getElementById('business').addEventListener('click', function () {
    FilterCategory("Business & Economics");
});

document.getElementById('music').addEventListener('click', function () {
    FilterCategory("Music");
});

document.getElementById('architecture').addEventListener('click', function () {
    FilterCategory("architecture");
});

document.getElementById('literature-history').addEventListener('click', function () {
    FilterCategory("Literature and history");
});

document.getElementById('detective').addEventListener('click', function () {
    FilterCategory("Detective and mystery stories");
});

document.getElementById('family').addEventListener('click', function () {
    FilterCategory("Family & Relationships");
});

function FilterCategory(category) {
    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=subject:" + category + "&maxResults=40",
        datatype: "json",
        success: function (data) {
            //console.log(data.items);
            let temp = "";
            $.each(data.items, (key, val) => {
                if (val.volumeInfo.imageLinks == undefined) {
                    temp += `<tr>
                            <td>${key + 1}</td>
                            <td><img src="https://islandpress.org/sites/default/files/default_book_cover_2015.jpg" width="130" height="180" /></th>
                            <td>${val.volumeInfo.title}</td>
                            <td>${val.volumeInfo.authors} </td>
                            <td>${val.volumeInfo.publishedDate}</td>                            
                            <td><button class="btn btn-gradient" onclick="detailBook('${val.selfLink}')" data-bs-toggle="modal" data-bs-target="#modalSW">Detail</button></td>
                        </tr>`;
                } else {
                    temp += `<tr>
                            <td>${key + 1}</td>
                            <td><img src=${val.volumeInfo.imageLinks.thumbnail} /></th>
                            <td>${val.volumeInfo.title}</td>
                            <td>${val.volumeInfo.authors} </td>
                            <td>${val.volumeInfo.publishedDate}</td>                            
                            <td><button class="btn btn-gradient" onclick="detailBook('${val.selfLink}')" data-bs-toggle="modal" data-bs-target="#modalSW">Detail</button></td>
                        </tr>`;
                }
            });
            $("#tbodyPoke").html(temp);
        }
    });
}

function LiveSearch() {
    //Get the input value
    let term = $('#livesearchtags').val();

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + term + "&maxResults=40",
        // Attach the value to a parameter called search
        data: { search: term },
        datatype: "json",
        success: function (data) {
            //console.log(data.items);
            let temp = "";
            $.each(data.items, (key, val) => {
                if (val.volumeInfo.imageLinks == undefined) {
                    temp += `<tr>
                            <td>${key + 1}</td>
                            <td><img src="https://islandpress.org/sites/default/files/default_book_cover_2015.jpg" width="130" height="180" /></th>
                            <td>${val.volumeInfo.title}</td>
                            <td>${val.volumeInfo.authors} </td>
                            <td>${val.volumeInfo.publishedDate}</td>                            
                            <td><button class="btn btn-gradient" onclick="detailBook('${val.selfLink}')" data-bs-toggle="modal" data-bs-target="#modalSW">Detail</button></td>
                        </tr>`;
                } else {
                    temp += `<tr>
                            <td>${key + 1}</td>
                            <td><img src=${val.volumeInfo.imageLinks.thumbnail} /></th>
                            <td>${val.volumeInfo.title}</td>
                            <td>${val.volumeInfo.authors} </td>
                            <td>${val.volumeInfo.publishedDate}</td>                            
                            <td><button class="btn btn-gradient" onclick="detailBook('${val.selfLink}')" data-bs-toggle="modal" data-bs-target="#modalSW">Detail</button></td>
                        </tr>`;
                }
            });
            $("#tbodyPoke").html(temp);
        }
    });
}

function detailBook(stringUrl) {
    $.ajax({
        url: stringUrl
    }).done(res => {
        if (res.volumeInfo.imageLinks == undefined) {
            $("#imgBook").attr("src", "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg");
        } else {
            $("#imgBook").attr("src", res.volumeInfo.imageLinks.thumbnail);
        }
        $('.book-title').html(`<h4>${res.volumeInfo.title}</h4>`);
        $('.book-author').html(`<p>by ${res.volumeInfo.authors}</p>`);
        if (res.volumeInfo.averageRating !== undefined && res.volumeInfo.ratingsCount !== undefined) {
            $('.avg-rating').html(`<p>${res.volumeInfo.averageRating}<img src="https://thumbs.dreamstime.com/b/ratings-stars-icons-vector-symbol-isolated-one-star-rating-illustration-ranking-poor-quality-yellow-white-background-213934865.jpg" width="30" height="30" alt="star rating" /> from ${res.volumeInfo.ratingsCount} ratings</p>`);
        } else if (res.volumeInfo.averageRating == undefined && res.volumeInfo.ratingsCount == undefined) {
            $('.avg-rating').html(`<p>no rating yet</p>`);
        }
        /* $('.pages').html(`<h6>${res.volumeInfo.pageCount} pages</h6>`);*/
        if (res.volumeInfo.description == undefined) {
            $('.book-desc').html(`<p>no description</p>`);
        } else {
            $('.book-desc').html(`<p>${res.volumeInfo.description}</p>`);
        }
        $('.publisher').html(`<p>publisher: ${res.volumeInfo.publisher}</p>`);
        $('.published-date').html(`<h6>${res.volumeInfo.pageCount} pages, published in ${res.volumeInfo.publishedDate}</h6>`);
        $('.genre').html(`<h6>Genres: ${res.volumeInfo.categories}</h6>`);
    })
}