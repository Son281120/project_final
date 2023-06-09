import products from "./../../data/productData.js";
import categories from "./../../data/categoryData.js";
import brands from "./../../data/brandData.js";


const listProduct = document.querySelector('.product__list');




// Render the product

const productItems = products.map((product) => {
    return ` <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 product__item">
                <div class="product__img">
                    <img src="${product.img[0]}" alt="">
                </div>
                <div class="product__description">
                    <div class="product__id">${product.id}</div>
                    <div class="product__name"><a href="./detail.html">${product.name}</a></div>
                    <div class="product__price">
                        <span>Từ:</span>
                        <span class="product__price--new">${product.newPrice}</span>
                        <span class="product__price--old">${product.oldPrice}</span>
                    </div>
                </div>
                <div class="group__icon">
                    <button class="icon__btn icon--heart">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="icon__btn icon--search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <button class="add-cart-btn">Thêm vào giỏ hàng</button>
                
            </div>
    `;
});

listProduct.innerHTML = productItems.join('');

// Render categories
const listCategory = document.querySelector('.category__list');


const brandItems = brands.map((brand) => {
    return ` <div class="category__item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <img src="${brand.img}" alt="" class="category__img">
                <div class="category__info">
                    <h4 class="category__info-name">${brand.name}</h4>
                    <span class="category__info-quantity">${brand.quantity} sản phẩm</span>
                </div>
            </div>

    `;
});

listCategory.innerHTML = brandItems.join('');

// lưu sản phẩm vào cart localStorage

const saveProductLocalStorage = JSON.parse(localStorage.getItem("saveProduct")) || [];

const listItems  = Array.from(document.querySelectorAll('.add-cart-btn'));

listItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const clickElement = e.target;
        const productID = clickElement.parentElement.querySelector('.product__id').innerText;
        const productResult = products.find(p => p.id === productID);
        saveProductLocalStorage.push(productResult);
        localStorage.setItem("saveProduct", JSON.stringify(saveProductLocalStorage));
    });
});


// lưu sản phẩm vào detail
const detailProductLocalStorage = JSON.parse(localStorage.getItem("detailProduct")) || [];
const listLinks  = Array.from(document.querySelectorAll('.product__name a'));

listLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        const clickElement = e.target;
        const productID = clickElement.parentElement.parentElement.querySelector('.product__id').innerText;
        const productResult = products.find(p => p.id === productID);
        detailProductLocalStorage.push(productResult);
        localStorage.setItem("detailProduct", JSON.stringify(detailProductLocalStorage));
    });
});
