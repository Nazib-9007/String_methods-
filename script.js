// Order placement system...
function validPrice(price){
    return typeof price === 'number' && price > 0
}

function valideEmail (email){
    return email.includes('@') && email.includes('.')
}

function calculateDiscount(price, discountPersent){
    if (!validPrice(price)){
        return 'Invalid price'
    }
    let discountAmount = (price * discountPersent)/100
    return price - discountAmount
}

function calculateBill(price, vat = 15){
    let vatPersent = (price * vat)/100
    return price + vatPersent
}

function formatBDT(amount){
    return `${amount.toFixed(2)} BDT`
}

function capitalized(str){
    if(!str){
        return ''
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function processOrder(user, itemPrice, discountCode){
    console.log(`processing order for ${capitalized(user.name)}`);
    if(!valideEmail(user.email)){
        console.log("Invalid Email");
        return
    }
    let currenPrice = itemPrice;
    if(discountCode == '123AB'){
        currenPrice = calculateDiscount(itemPrice, 20)
        console.log('20% discount applied');
    }
    let totalBill = calculateBill(currenPrice)
    console.log('Final ammount to pay: ', formatBDT(totalBill));
    console.log('Order successfully...');
}
let user1 = {name: 'Nazib', email: 'nazib@gmail.com'}
processOrder(user1, 5000, '123AB');
