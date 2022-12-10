(() => {
const form = document.querySelector(".contact_us_input");
let button = document.getElementById("contact_us_btn");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkPhoneNumber(this.phone.value);
  });

  function checkPhoneNumber(phoneNo) {
    let phoneRE = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (phoneNo.match(phoneRE)) {
          button.addEventListener ('click', function() {
              Swal.fire(
                  'Thank you!',
                  'We will contact you shortly.',
                  'success'
                )
          }) ;
    } else {
        button.addEventListener ('click', function() {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out the form!'
            })
        });
    }
  }

})();    
