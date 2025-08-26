// login button to home page
document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    const phoneNo=12345678910;
    const digit=1234;
    const inputPhn=document.getElementById('input-phn').value;
    const inputPhnValue=parseInt(inputPhn);
    const inputDigit=document.getElementById('input-digit').value;
    const inputDigitValue=parseInt(inputDigit);
    if(inputPhnValue===phoneNo && inputDigitValue==digit){
        window.location.href='/home.html'
    }
    else{
        alert('Invalid Phone No or Digit');
    }
})