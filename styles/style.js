// if already logged in, skip login page
if (localStorage.getItem('isLoggedIn')) {
    window.location.replace('/home.html');
}
// login button to home page
document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();
    const phoneNo = "12345678910";
    const digit = '1234';
    const inputPhn = document.getElementById('input-phn').value.trim();
    const inputPhnValue = parseInt(inputPhn);
    const inputDigit = document.getElementById('input-digit').value.trim();
    const inputDigitValue = parseInt(inputDigit);


    
    // allow only digits (reject letters or mixed input)
    const phoneRegex = /^\d+$/;
    const pinRegex = /^\d+$/;

    if (phoneRegex.test(inputPhn) && pinRegex.test(inputDigit)) {
        if (inputPhnValue == phoneNo && inputDigitValue == digit) {
            localStorage.setItem('isLoggedIn', true); // mark as logged in
            window.location.replace('/home.html');
        }
        else {
            alert('Invalid Phone No or Digit');
        }
    }
    else {
        alert('Phone No and PIN must contain digits only');
    }
})