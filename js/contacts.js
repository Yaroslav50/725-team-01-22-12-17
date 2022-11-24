(() => {
    const form = document.querySelector(".contacts__form");
    const userName = document.querySelector(".contacts__user-name");
    const userPhoneNumber = document.querySelector(".contacts__phone-number");
    const userEmail = document.querySelector(".contacts__email");
    const userMessage = document.querySelector(".contacts__message");
    const btn = document.querySelector(".contacts__input-btn");
  
    function errorInput(input) {
      input.classList.add("contacts__error-input");
    }
  
    function checkLength(input, min) {
      if (input.value.length < min) {
        errorInput(input);
      }
    }
  
    function checkPhoneNumber(input) {
      const regPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (regPhoneNumber.test(input.value) === false) {
        errorInput(input);
      }
    }
  
    function checkEmail(input) {
      const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regEmail.test(input.value) === false) {
        errorInput(input);
      }
    }
  
    form.addEventListener("submit", function () {
      checkLength(userName, 3);
      checkPhoneNumber(userPhoneNumber);
      checkEmail(userEmail);
    });
  })();
  