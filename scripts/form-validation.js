/* Elijah Hilfiker 10/5/2025 */
/* <p>checkMissing():This checks to make sure that all of the required fields in form are filled out and not left blank. If it is blank, the field will be highlighted with a red border and a notified of a required fields missing with a message.</p> */
function checkMissing() {
  let missing = 0;
  document.querySelectorAll('#contact-form .required').forEach(f => {
    const empty = !f.value.trim();
    if (empty) {
      missing++;
      f.classList.add('invalid');
    } else {
      f.classList.remove('invalid');
    }
  });
  document.getElementById('missing-count').textContent =
    missing ? (missing === 1 ? '1 required field missing.' : missing + ' required fields missing.') : '';
  return missing;
}

/* <p>validateEmail(): This function checks the email address in the form amd makes sure that it is at least the required 8 characters long. If it is not, a message appears stating that the email must be 8 characters.</p> */
function validateEmail() {
  const email = document.getElementById('email');
  if (!email) return false;
  const val = email.value.trim();
  const valid = val.length >= 8;
  if (val && !valid) email.classList.add('invalid');
  if (valid) email.classList.remove('invalid');
  return valid;
}

/* <p>handleSubmit(): This is a function that runs both of the previous functions when a user clicks on the submit button, if anything is incorrect it returns with the appropriate message from the other two functions.</p> */
function handleSubmit() {
  const missing = checkMissing();
  if (missing > 0) {
    alert('Please complete all required fields.');
    return;
  }
  if (!validateEmail()) {
    document.getElementById('missing-count').textContent = 'Email must be at least 8 characters.';
    alert('Email must be at least 8 characters.');
    return;
  }
  document.getElementById('contact-form').submit();
}

document.getElementById('submitbtn').addEventListener('click', handleSubmit);

document.querySelectorAll('#contact-form .required').forEach(f => {
  f.addEventListener('input', checkMissing);
  f.addEventListener('blur', checkMissing);
});

checkMissing();
