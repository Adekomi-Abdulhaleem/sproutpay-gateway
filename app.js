var price = document.getElementById('price')
amount = document.getElementById('amount')
curr = document.getElementById('curr')
var currency = document.getElementById('currency')
var submit = document.getElementById('submit')
var sendLink = document.getElementById('send-link')
var show = document.querySelector('.pay-amount button')


show.addEventListener('click', () => {
    // price.textContent = 

    switch(currency.value) {
        case 'NGN':
        price.textContent = parseInt(amount.value) * 485
        price.innerHTML = parseInt(amount.value) * 485
        curr.textContent = 'NGN'
        curr.innerHTML = 'NGN'
        break;
        
        case 'USD':
        price.textContent = parseInt(amount.value)
        price.innerHTML = parseInt(amount.value)
        curr.textContent = 'USD'
        curr.innerHTML = 'USD'
        break;
        
        case 'EUR':
        price.textContent = parseInt(amount.value) * 0.85
        price.innerHTML = parseInt(amount.value) * 0.85
        curr.textContent = 'EUR'
        curr.innerHTML = 'EUR'
        break;
        
        case 'GBP':
        price.textContent = parseInt(amount.value) * 0.74
        price.innerHTML = parseInt(amount.value) * 0.74
        curr.textContent = 'GBP'
        curr.innerHTML = 'GBP'
        break;
        
        case 'KES':
        price.textContent = parseInt(amount.value) * 4.30
        price.innerHTML = parseInt(amount.value) * 4.30
        curr.textContent = 'KES'
        curr.innerHTML = 'KES'
        break;
        
        case 'GHS':
        price.textContent = parseInt(amount.value) * 6.20
        price.innerHTML = parseInt(amount.value) * 6.20
        curr.textContent = 'GHS'
        curr.innerHTML = 'GHS'
        break;
    }

    console.log(price.textContent)
    console.log(curr.textContent)

})