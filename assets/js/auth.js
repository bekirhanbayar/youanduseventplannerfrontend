$(document).ready(function () {
    // Form submit event
    $('.signInForm').submit(function (e) {
        e.preventDefault(); // Prevent form submission

        const email = $('#floatingEmail').val();
        const password = $('#floatingPassword').val();

        // Create the data object
        const data = {
            email: email,
            password: password
        };

        // Send the login request
        $.ajax({
            url: 'https://api.youandus.net/users/login',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(data),
            contentType: 'application/json',
            headers: {
                'Access-Control-Allow-Origin': 'https://www.youandus.net/',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            success: function (response) {
                // Handle successful login
                console.log(response);
                $('#successSignInAlert').text(response.message);
                $('#successSignInModal').removeClass('d-none').addClass('d-block');
                setTimeout(function () {
                    window.location.href = 'account/index.html';
                }, 2000);
            },
            error: function (xhr, status, error) {
                // Handle login error
                console.log(xhr.responseText);
                const errorResponse = JSON.parse(xhr.responseText);
                const errorMessage = errorResponse.message || 'Login failed. Please try again.';
                $('#errorSignInAlert').text(errorMessage).removeClass('d-none');
            }
        });
    });
});
