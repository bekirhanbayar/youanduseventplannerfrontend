const token = localStorage.getItem('userToken');

$.ajax({
    url: 'https://api.youandus.net/profile',
    type: 'GET',
    dataType: 'json',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'https://www.youandus.net/',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
    },
    success: function (response) {
        // Handle successful profile retrieval
        console.log(response);

        // Load user data
        $('#userName').val(response.data.userName);
        $('#firstName').val(response.data.firstName);
        $('#userEmail').val(response.data.userEmail);
        $('#foundYear').val(response.data.foundYear);
        $('#organizationType').val(response.data.organizationType);
        $('#state').val(response.data.state);
        $('#city').val(response.data.city);
        $('#zipCode').val(response.data.zipCode);
        $('#aboutOrganization').val(response.data.aboutOrganization);
        $('#capacity').val(response.data.capacity);
        $('#address').val(response.data.address);
        $('#phoneNumber').val(response.data.phoneNumber);
        $('#whatsappNumber').val(response.data.whatsappNumber);
        $('#kipAddress').val(response.data.kipAdress);
        $('#facebook').val(response.data.facebook);
        $('#instagram').val(response.data.instagram);
        $('#twitter').val(response.data.twitter);
        $('#linkedin').val(response.data.linkedin);

    },
    error: function (xhr, status, error) {
        // Handle profile retrieval error
        console.log(xhr.responseText);
        const errorResponse = JSON.parse(xhr.responseText);
        const errorMessage = errorResponse.message || 'Failed to retrieve profile.';
        $('#errorProfileRetrieveAlert').text(errorMessage).removeClass('d-none');
    }
});

function updateProfile(profileData) {

    $.ajax({
        url: 'https://api.youandus.net/profile',
        type: 'PUT',
        dataType: 'json',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': 'https://www.youandus.net/',
            'Access-Control-Allow-Methods': 'PUT',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        data: JSON.stringify(profileData),
        contentType: 'application/json',
        success: function (response) {
            // Handle successful profile update
            console.log(response);
            $('#successProfileUpdateModal').removeClass('d-none').addClass('d-block');
            setTimeout(function () {
                window.location.href = 'account.html';
            }, 2000);
        },
        error: function (xhr, status, error) {
            // Handle profile update error
            console.log(xhr.responseText);
            const errorResponse = JSON.parse(xhr.responseText);
            const errorMessage = errorResponse.message || 'Failed to update profile.';
            $('#errorProfileUpdateAlert').text(errorMessage).removeClass('d-none');
        }
    });
}

$(document).ready(function () {
    $('#update-button').on('click', function (event) {
        event.preventDefault();

        const profileData = {
            userName: $('#userName').val(),
            firstName: $('#firstName').val(),
            userEmail: $('#userEmail').val(),
            foundYear: $('#foundYear').val(),
            organizationType: $('#organizationType').val(),
            state: $('#state').val(),
            city: $('#city').val(),
            zipCode: $('#zipCode').val(),
            aboutOrganization: $('#aboutOrganization').val(),
            capacity: $('#capacity').val(),
            address: $('#address').val(),
            phoneNumber: $('#phoneNumber').val(),
            whatsappNumber: $('#whatsappNumber').val(),
            kipAdress: $('#kipAddress').val(),
            facebook: $('#facebook').val(),
            instagram: $('#instagram').val(),
            twitter: $('#twitter').val(),
            linkedin: $('#linkedin').val()
        };

        updateProfile(profileData);
    });
});
