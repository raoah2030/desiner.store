let cart = [];
let total = 0;

function addToCart(name, price, id){
    let qty = parseInt(document.getElementById(id).value);

    let existing = cart.find(item => item.name === name);

    if(existing){
        existing.qty += qty;
    } else {
        cart.push({name:name, price:price, qty:qty});
    }

    updateCart();
}

function updateCart(){
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    total = 0;

    cart.forEach(item=>{
        let itemTotal = item.price * item.qty;
        total += itemTotal;
        cartList.innerHTML += `<li>${item.name} × ${item.qty} = ${itemTotal} ريال</li>`;
    });

    document.getElementById("total").innerText = "المجموع: " + total + " ريال";
}

function checkout(){
    if(cart.length === 0){
        alert("السلة فارغة!");
        return;
    }

    let message = "طلب جديد من كبسة البيت:%0A";

    cart.forEach(item=>{
        message += "- " + item.name + " × " + item.qty + 
        " = " + (item.price * item.qty) + " ريال%0A";
    });

    message += "المجموع: " + total + " ريال";

    let phone = "966551658569";
    let url = "https://wa.me/" + phone + "?text=" + message;

    window.open(url, "_blank");
}
