//https://medium.com/c-sharp-progarmming/how-to-post-data-to-the-controller-using-ajax-with-validations-in-asp-net-core-a63af60867e9
//https://www.tutorialsteacher.com/webapi/consume-web-api-post-method-in-aspnet-mvc

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

function InsertRole() {
    var obj = new Object();
    obj.name = $("#roleName").val();
    //alert(JSON.stringify(obj));

    $.ajax({
        type: "POST",
        url: "https://localhost:7125/api/role",
        data: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        },
        success: function (result) {
            console.log('input role works');
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
                url: "https://localhost:7125/api/role/" + id,
            }).done((result) => {

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
function EditRole(id) {
    $("#EditRoleModal").modal('show');

    var url = "https://localhost:7125/api/role/" + id;

    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            var obj = data;
            $("#editRoleName").val(obj.name);
        }
    })

    $("#SaveRole").click(function () {
        var newValue = $("#editRoleName").val();
        //console.log('new role name is: ' + newValue);
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
                $("#EditRoleModal").modal("hide");
            },
            error: function (er) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to add data!'
                });
            }
        });
    })
}

$.ajax({
        type: "GET",
        url: "https://localhost:7125/api/Role",
        datatype: "json",
        success: function (data) {
            //console.log(data);
            let temp = "";
            $.each(data, (key, val) => {
                temp += `<tr>
                         <td>${key + 1}</td>      
                         <td>${val.name}</th>
                         <td>
                            <button class="btn btn-danger" onclick="Delete(${val.id})" data-bs-toggle="modal">Delete</button>
                            <button class="btn btn-success" onclick="EditRole(${val.id})" data-bs-toggle="modal">Edit</button>
                         </td>
                       </tr>`;
            });
            $("#tbodyRoles").html(temp);
        }
});
