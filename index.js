const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';

const buttonEl = document.querySelector('.submit-button');
const formEl = document.querySelector('.login-form');
const errorEl = document.querySelector('.error-text');

const getFormData = () => Object.fromEntries(new FormData(formEl));
// console.dir(button);
// button activated
// input: event
// output: undefined
const validateHandler = () => {
  /*if (formEl.reportValidity()) {
    buttonEl.disabled = false;
  } else {
    buttonEl.disabled = true;
  }*/

  buttonEl.disabled = !formEl.reportValidity();

  //TODO
};

// get data for server
// input:event
// output: undeffined
const submitHandler = (event) => {
  event.preventDefault();

  /*const formData = [...new FormData(form)].reduce(
    (acc, [field, value]) => ({
      ...acc,
      [field]: value,
    }),
    {}
  );*/

  // const formData = `{${inputEmail.name}:${inputEmail.value}, ${inputName.name}:${inputName.value}, ${inputPasword.name}:${inputPasword.value}}`;
  // const formData = Object.fromEntries(new FormData(inputs));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getFormData()),
  })
    //input: callback
    //input: response obj
    //output: any
    //output: promise

    //response можна назвати будь-як

    //скільки асинхроних дій, стільки і then потрібно (тут два: записуємо дані на сервер, повертаємо обєкт)
    .then((response) => response.json())
    .then((resultBody) => {
      alert(JSON.stringify(resultBody));

      formEl.reset();

      //TODO use reset
    })
    .catch(() => {
      errorEl.textContent = 'Failed to create user';
      // Promise.reject(new Error('Failed to create user'));
    });
};

formEl.addEventListener('input', validateHandler);
formEl.addEventListener('submit', submitHandler);
// input: event
// output: undefined

//чітко розуміти де код синхронних, а де асинхронний (треба чекати поки він виконається у fetch)
