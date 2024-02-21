"use srtict";
// form validation

export const validate = () => {
  function validation(form) {
    function createErrorInput(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement("label");
      parent.classList.add("error");
      errorLabel.classList.add("error-label");
      errorLabel.textContent = text;
      parent.append(errorLabel);
    }

    let result = true;

    function removeErrorInput(input) {
      const parent = input.parentNode;

      if (parent.classList.contains("error")) {
        parent.querySelector(".error-label").remove();
        parent.classList.remove("error");
      }
    }

    const allInputs = form.querySelectorAll(".form__text");

    allInputs.forEach((input) => {
      removeErrorInput(input);

      const reg = /[a-zA-Z]/;

      if (!reg.test(input.value)) {
        createErrorInput(input, "Fill in this form in English, please!");
        result = false;
      }
    });

    const inputPhone = form.querySelector(".form__number");
    removeErrorInput(inputPhone);
    const regPhone = /^1?\d{10}$/;
    if (!regPhone.test(inputPhone.value)) {
      createErrorInput(
        inputPhone,
        "Please, use phone input format as 19999999999"
      );
      result = false;
    }

    return result;
  }

  const formInPage = document.querySelectorAll("#form");

  formInPage.forEach((form) => {
    form.addEventListener("submit", function (e) {
      if (validation(this) === true) {
        alert("This form is filled in successfully.");
      } else {
        e.preventDefault();
      }
    });
  });
};
