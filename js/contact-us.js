(() => {

let button = document.getElementById("contact_us_btn");
    button.addEventListener ('click', function() {
        Swal.fire(
            'Thank you!',
            'We will contact you shortly.',
            'success'
          )
    })
})();    