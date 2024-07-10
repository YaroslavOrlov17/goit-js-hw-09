const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

const textarea = form.elements.message;
const input = form.elements.email;

const newFormDataObj = JSON.parse(localStorage.getItem(localStorageKey));

if (newFormDataObj) {
  textarea.value = newFormDataObj.message;
  input.value = newFormDataObj.email;
  formData.email = newFormDataObj.email;
  formData.message = newFormDataObj.message;
} else {
  textarea.value = '';
  input.value = '';
}

function handleInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();
  if (textarea.value.trim() !== '' && input.value.trim() !== '') {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    form.reset();
  } else {
    alert('Fill please all fields');
  }
}

form.addEventListener('submit', handleSubmit);
