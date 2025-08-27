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







// log out button clicked
document.getElementById('log-out-btn').addEventListener('click',function(){
    window.location.href='/index.html';
})