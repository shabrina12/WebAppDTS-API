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

function Insert() {
    var obj = new Object();
    obj.name = $("#addRole").val();
    //alert(JSON.stringify(obj));

    $.ajax({
        type: "POST",
        url: "https://localhost:7125/api/Role",
        data: JSON.stringify(obj),
        datatype: "json",
        headers: {
            'Content-Type': 'application/json'
        }, 
    }).done((result) => {
        //alert('Successfully post data');
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully add data',
            showConfirmButton: false,
            timer: 1500
        });
    }).fail((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to add data!'
        })
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
                       </tr>`;
            });
            $("#tbodyRoles").html(temp);
        }
});
