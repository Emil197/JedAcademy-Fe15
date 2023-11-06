const nav = document.getElementById("navbar");

// bar event
const bar = document.getElementById("bar");
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

// remove event
const removebar = document.getElementById("remove-mark");
if (removebar) {
    removebar.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

// product event
function photoEvent() {
    window.location.href = "/product.html";
}

// Shopping cart

class Shopping {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI {
    constructor() {
        this.cartCountElement = document.getElementById("item-count");
        this.cartList = document.getElementsByClassName("shopping-cart-list")[0];
    }

    addToCart(shopping) {
        const listItem = document.createElement("div");
        listItem.classList = "list-item";

        listItem.innerHTML = `
            <div class="row align-items-center">
                <div class="col-md-3">
                    <img src="${shopping.image}" class="img-fluid" alt="">
                </div>
                <div class="col-md-5">
                    <div class="title">${shopping.title}</div>
                </div>
                <div class="col-md-2">
                    <div class="price">${shopping.price}</div>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-delete"><i class="fa-regular fa-trash-can text-danger"></i></button>
                </div>
            </div>
        `;

        this.cartList.appendChild(listItem);
        this.cartCount();
        this.saveToStorage(); 
    }

    removeCart() {
        let btnRemove = document.getElementsByClassName("btn-delete");
        let self = this;
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                this.parentElement.parentElement.parentElement.remove();
                self.cartCount();
                self.saveToStorage(); 
            });
        }
    }

    cartCount() {
        let cartListItem = this.cartList.getElementsByClassName("list-item");
        this.cartCountElement.innerHTML = cartListItem.length;
    }

    cartToggle() {
        const shopBtn = document.getElementById("shop");
        shopBtn.addEventListener("click", () => {
            this.cartList.classList.toggle("d-none");
        });
    }

    
    saveToStorage() {
        const cartItems = this.cartList.getElementsByClassName("list-item");
        const cartData = [];

        for (let item of cartItems) {
            const image = item.querySelector(".img-fluid").src;
            const title = item.querySelector(".title").textContent;
            const price = item.querySelector(".price").textContent;

            cartData.push({ image, title, price });
        }

        localStorage.setItem("cart", JSON.stringify(cartData));
    }

    
    loadFromStorage() {
        
        this.cartList.innerHTML = '';
    
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            const cartData = JSON.parse(storedCart);
    
            for (let item of cartData) {
                const shopping = new Shopping(item.image, item.title, item.price);
                this.addToCart(shopping);
            }
        }
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    ui.cartToggle();
    ui.loadFromStorage(); 
});

const addCartButtons = document.getElementsByClassName("add-cart");
const products = document.getElementsByClassName("pro");

for (let i = 0; i < addCartButtons.length; i++) {
    addCartButtons[i].addEventListener("click", function (e) {
        const image = products[i].getElementsByClassName("image-pro")[0].src;
        const title = products[i].getElementsByClassName("title-pro")[0].textContent;
        const price = products[i].getElementsByClassName("price-pro")[0].textContent;

        const shopping = new Shopping(image, title, price);
        const ui = new UI();

        ui.addToCart(shopping);
        ui.removeCart();
        ui.cartCount();
        ui.saveToStorage();

        e.preventDefault();
    });
};


