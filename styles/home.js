const pinNumber=1234;
const accountNo=12345678910;
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    const addBank=document.getElementById('add-bank').value;
    const addAccount=parseInt(document.getElementById('add-account').value);
    const addAmount=parseInt(document.getElementById('add-amount').value);
    const addPin=parseInt(document.getElementById('add-pin').value);
    const availableBalance=parseInt(document.getElementById('available-balance').innerText);
    
    // account validity check
    if(addAccount.length!=11 && addAccount!=accountNo){
        alert('Invalid Bank Account Number');
        return;
    }
    if(addPin!=pinNumber){
        alert('Invalid pin number');
        return;
    }


    const totalAmount=availableBalance+addAmount;
    document.getElementById('available-balance').innerText=totalAmount;
})