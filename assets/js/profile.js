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
        $('#kipAdress').val(response.data.kipAdress);
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
s

function updateProfile() {
    const profileData = {
        "userName": $('#userName').val(),
        "firstName": $('#firstName').val(),
        "userEmail": $('#userEmail').val(),
        "foundYear": $('#foundYear').val(),
        "organizationType": $('#organizationType').val(),
        "state": $('#state').val(),
        "city": $('#city').val(),
        "zipCode": $('#zipCode').val(),
        "aboutOrganization": $('#aboutOrganization').val(),
        "capacity": $('#capacity').val(),
        "address": $('#address').val(),
        "phoneNumber": $('#phoneNumber').val(),
        "whatsappNumber": $('#whatsappNumber').val(),
        "kipAddress": $('#kipAddress').val(),
        "facebook": $('#facebook').val(),
        "instagram": $('#instagram').val(),
        "twitter": $('#twitter').val(),
        "linkedin": $('#linkedin').val()
    };

    $.ajax({
        url: 'https://api.youandus.net/profile',
        type: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': 'https://www.youandus.net/',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        data: JSON.stringify(profileData),
        success: function (response) {
            console.log('Profile updated:', response);
            alert('Profile updated!');
        },
        error: function (error) {
            console.error('Error occurred while updating profile:', error);
            alert('An error occurred while updating the profile!');
        }
    });
}

document.getElementById("update-button").addEventListener("click", function (event) {
    event.preventDefault();

    updateProfile();
});