//https://medium.com/c-sharp-progarmming/how-to-post-data-to-the-controller-using-ajax-with-validations-in-asp-net-core-a63af60867e9
//https://www.tutorialsteacher.com/webapi/consume-web-api-post-method-in-aspnet-mvc
//https://stackoverflow.com/questions/10422244/why-does-jquery-ajax-callback-function-not-work

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// Get all records and display in table
$(document).ready(function () {
    let table = new $('#tableUniv').DataTable({
        ajax: {
            url: "https://localhost:7125/api/university",
            dataType: "json",
            dataSrc: ""
        },
        columns: [
            {
                data: "",
                render: (data, type, row, meta) => {
                    return meta.row + 1;
                }
            },
            { data: "name" },
            {
                data: "",
                render: (data, type, row) => {
                    return `<button class="btn btn-danger" onclick="Delete(${row.id})" data-bs-toggle="modal">Delete</button>
                    <button class="btn btn-success" onclick="EditData(${row.id})" data-bs-toggle="modal">Edit</button>`
                }
            },
        ],
        aLengthMenu: [[5, 10, 15, 20, -1], [5, 10, 15, 20, "All"]],
        iDisplayLength: 5,
        dom: 'lBfrtip',
        buttons: [
            {
                extend: 'copyHtml5', className: 'custom-btn'
            },
            {
                extend: 'excelHtml5', 
                className: 'custom-btn',
                text: '<i class="fas fa-file-excel"></i>',
                titleAttr: 'Excel'
            },
            {
                extend: 'csvHtml5',
                className: 'custom-btn',
                text: '<i class="fa-solid fa-file-csv"></i>',
                titleAttr: 'CSV'
            },
            {
                extend: 'pdfHtml5',
                className: 'custom-btn',
                text: '<i class="fa-solid fa-file-pdf"></i>',
                titleAttr: 'PDF'
            }
            //{
            //    extend: 'colvis'
            //}
        ]
    });
    //table.buttons().container()
    //    .appendTo('#example_wrapper .col-md-2:eq(0)');

    setInterval(function () {
        table.ajax.reload();
    }, 30000);
});

// Get all records and display in table
//$.ajax({
//    type: "GET",
//    url: "https://localhost:7125/api/university",
//    datatype: "json",
//    success: function (data) {
//        console.log(data);
//        let temp = "";
//        $.each(data, (key, val) => {
//            temp += `<tr>
//                         <td>${key + 1}</td>      
//                         <td>${val.name}</th>
//                         <td>
//                            <button class="btn btn-danger" onclick="Delete(${val.id})" data-bs-toggle="modal">Delete</button>
//                            <button class="btn btn-success" onclick="EditData(${val.id})" data-bs-toggle="modal">Edit</button>
//                         </td>
//                       </tr>`;
//        });
//        $("#tbodyUniv").html(temp);
//    }
//});

// Insert new record 
function InsertUniv() {
    var obj = new Object(); 
    obj.name = $("#universityName").val();

    $.ajax({
        type: "POST",
        url: "https://localhost:7125/api/university",
        data: JSON.stringify(obj),          
        headers: {
            'Content-Type': 'application/json'
        },
        success: function (result) {
            //console.log('it works');
            //alert('Successfully post data: ' + result);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully add data',
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (er) {
            alert('Failed to post data : ' + er);
        },
        complete: function () {
            //alert("post data is completed");
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully add data',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}


function Insert() {
    var obj = new Object();
    obj.name = $("#universityName").val();
    //alert(JSON.stringify(obj));

    $.ajax({
        type: "POST",
        url: "https://localhost:7125/api/university",
        data: JSON.stringify(obj),
        datatype: "json",
        headers: {
            'Content-Type': 'application/json'
        },
    }).done((result) => {
        alert('Successfully post data');
        //Swal.fire({
        //    position: 'center',
        //    icon: 'success',
        //    title: 'Successfully add data',
        //    showConfirmButton: false,
        //    timer: 1500
        //});
    }).fail((error) => {
        alert('Failed to post data');
        //Swal.fire({
        //    icon: 'error',
        //    title: 'Oops...',
        //    text: 'Failed to add data!'
        //});
    }).always( function() {
        //alert("complete");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully add data',
            showConfirmButton: false,
            timer: 1500
        });
    });
}


//function InsertUniv() {
//    $("#SaveNewUniversity").click(function () {
//        var obj = new Object();
//        obj.name = $("#universityName").val();

//        Swal.fire({
//            title: 'Do you want to save the changes?',
//            showDenyButton: true,
//            showCancelButton: true,
//            confirmButtonText: 'Save',
//            denyButtonText: `Don't save`,
//        }).then((result) => {
//            if (result.isConfirmed) {
//                $.ajax({
//                    type: "POST",
//                    url: "https://localhost:7125/api/university",
//                    data: JSON.stringify(obj),
//                    headers: {
//                        'Content-Type': 'application/json'
//                    },
//                });
//                Swal.fire('Saved!', '', 'success')
//            } else if (result.isDenied) {
//                Swal.fire('Changes are not saved', '', 'info')
//            }
//        })
//    })  
//}

// Delete record by id
function Delete(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                url: "https://localhost:7125/api/university/" + id,
            }).done((result) => {
                setInterval('location.reload()', 1500);    
            });
            Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
            )
        }
    });
}

//Show The Popup Modal For Edit University Record
function EditData(id) {
    $("#EditModal").modal('show');

    var url = "https://localhost:7125/api/university/" + id;

    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            var obj = data;
            $("#editUniversityName").val(obj.name);
        }
    })

    $("#SaveUniversity").click(function () {
        var newValue = $("#editUniversityName").val();
        console.log('new university name is: ' + newValue);
        $.ajax({
            type: "PUT",
            url: url,
            data: JSON.stringify({
                id: id,
                name: newValue
            }),
            datatype: "json",
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (result) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully update data',
                    showConfirmButton: false,
                    timer: 1500
                });
                $("#EditModal").modal("hide");
                setInterval('location.reload()', 1500);    
            },
            error: function (er) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update data!'
                });
            }
        });
    })
}


//https://abctutorial.com/post/76/crud-operations-in-mvc-using-jquery-ajax--data-saveupdate--delete-in-database
