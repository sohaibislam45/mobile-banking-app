const pinNumber=1234;
const accountNo=12345678910;
const agentNo=12345678910;

//add money feature
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
    //pin check
    if(addPin!=pinNumber){
        alert('Invalid pin number');
        return;
    }
    //money validity check
    if(addAmount<=0){
        alert('Please enter at least 1 taka');
        return;
    }
    //add money feature
    const totalAmount=availableBalance+addAmount;
    document.getElementById('available-balance').innerText=totalAmount;
})



//cash out feature
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault();
    const agentNumber=parseInt(document.getElementById('agent-no').value);
    const cashoutAmount=parseInt(document.getElementById('cashout-amount').value);
    const cashoutPin=parseInt(document.getElementById('cashout-pin').value);
    const availableBalance=parseInt(document.getElementById('available-balance').innerText);

    // account validity check
    if(agentNumber.length!=11 && agentNumber!=agentNo){
        alert('Invalid Bank Account Number');
        return;
    }
    //pin check
    if(cashoutPin!=pinNumber){
        alert('Invalid pin number');
        return;
    }
    //money validity check
    if(cashoutAmount<=0){
        alert('Please enter at least 1 taka');
        return;
    }
    
    //withdraw feature
    const totalAmount=availableBalance-cashoutAmount;
    //withdraw validity check
    if(totalAmount<=0){
        alert('insufficient Balance');
        return;
    }
    document.getElementById('available-balance').innerText=totalAmount;

    
})





// toggling feature
document.getElementById('add-btn').addEventListener('click',function(){
    document.getElementById('cash-out-section').style.display='none';
    document.getElementById('transfer-money-section').style.display='none';
    document.getElementById('get-bonus-section').style.display='none';
    document.getElementById('pay-bill-section').style.display='none';
    document.getElementById('add-money-section').style.display='block';
})
document.getElementById('cash-out-btn').addEventListener('click',function(){
    document.getElementById('add-money-section').style.display='none';
    document.getElementById('transfer-money-section').style.display='none';
    document.getElementById('get-bonus-section').style.display='none';
    document.getElementById('pay-bill-section').style.display='none';
    document.getElementById('cash-out-section').style.display='block';
})
document.getElementById('transfer-money-btn').addEventListener('click',function(){
    document.getElementById('add-money-section').style.display='none';
    document.getElementById('cash-out-section').style.display='none';
    document.getElementById('get-bonus-section').style.display='none';
    document.getElementById('pay-bill-section').style.display='none';
    document.getElementById('transfer-money-section').style.display='block';
})
document.getElementById('get-bonus-btn').addEventListener('click',function(){
    document.getElementById('add-money-section').style.display='none';
    document.getElementById('cash-out-section').style.display='none';
    document.getElementById('transfer-money-section').style.display='none';
    document.getElementById('pay-bill-section').style.display='none';
    document.getElementById('get-bonus-section').style.display='block';
})
document.getElementById('pay-bill-btn').addEventListener('click',function(){
    document.getElementById('add-money-section').style.display='none';
    document.getElementById('cash-out-section').style.display='none';
    document.getElementById('transfer-money-section').style.display='none';
    document.getElementById('get-bonus-section').style.display='none';
    document.getElementById('pay-bill-section').style.display='block';
})





// Protect home page
if (!localStorage.getItem('isLoggedIn')) {
    window.location.replace('/index.html');
}

// log out button clicked
document.getElementById('log-out-btn').addEventListener('click',function(){
    localStorage.removeItem('isLoggedIn'); // clear login state
    window.location.replace('/index.html');
})