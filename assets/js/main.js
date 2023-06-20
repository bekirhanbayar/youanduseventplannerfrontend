(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function previewImage() {
    const preview = document.querySelector('#preview');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "/assets/img/add-profile.png";
    }
}

/*
function toggleSidebar() {
    const sidebar = document.getElementById('bdSidebar');
    const checkbox = document.getElementById('sidebarToggle');

    if (checkbox.checked) {
        sidebar.classList.add('side-expanded');
    } else {
        sidebar.classList.remove('side-expanded');
    }

    localStorage.setItem('sidebarStatus', checkbox.checked);
}

window.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('sidebarToggle');
    const storedStatus = localStorage.getItem('sidebarStatus');

    checkbox.checked = storedStatus === 'true';

    toggleSidebar();
});

document.getElementById('sidebarToggle').addEventListener('change', toggleSidebar);
*/
function toggleSidebar() {
    const sidebar = document.getElementById('bdSidebar');
    const checkbox = document.getElementById('sidebarToggle');

    if (checkbox.checked) {
        sidebar.classList.remove('side-collapsed');
        sidebar.classList.add('side-expanded');
    } else {
        sidebar.classList.remove('side-expanded');
        sidebar.classList.add('side-collapsed');
    }

    localStorage.setItem('sidebarStatus', checkbox.checked);
}

function restoreSidebarState() {
    const checkbox = document.getElementById('sidebarToggle');
    const storedStatus = localStorage.getItem('sidebarStatus');

    checkbox.checked = storedStatus === 'true';

    toggleSidebar();
}

window.addEventListener('DOMContentLoaded', restoreSidebarState);

document.getElementById('sidebarToggle').addEventListener('change', toggleSidebar);

// Sayfa değişikliği olduğunda kenar çubuğunun durumunu koru
window.addEventListener('beforeunload', function() {
    const checkbox = document.getElementById('sidebarToggle');
    localStorage.setItem('sidebarStatus', checkbox.checked);
});
