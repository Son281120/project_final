import products from "./../../data/productData.js";
import categories from "./../../data/categoryData.js";
import brands from "./../../data/brandData.js";

// Tạo mask zoom ảnh main

let zoom = document.querySelector('.group__main');
let imgZoom = document.querySelector('.imgZoom');


zoom.addEventListener('mousemove', (e) => {
    imgZoom.style.opacity = 1;
    let positionPx = e.x - zoom.getBoundingClientRect().left;
    let positionX =  (positionPx / zoom.offsetWidth) * 100;
    let positionPy = e.y - zoom.getBoundingClientRect().top;
    let positionY =  (positionPy / zoom.offsetHeight) * 100;
    imgZoom.style.setProperty('--zoom-x', positionX + '%');
    imgZoom.style.setProperty('--zoom-y', positionY + '%');

});
zoom.addEventListener('mouseout', (e) => {
    imgZoom.style.opacity = 0;
}); 

// Đổi ảnh carousel thành ảnh main

const mainImgs = zoom.querySelectorAll('img');
const images = Array.from(document.querySelectorAll('.carousel__img'));


images.forEach((image) =>image.addEventListener('click', updateImage));

function updateImage(e) {
    let image = e.target;
    mainImgs.forEach((item) => item.src = image.src);
}

// Chuyển 




let detailProductLocalStorage = JSON.parse(localStorage.getItem("detailProduct")) || [];
let lastItem = detailProductLocalStorage.pop();


detailProductLocalStorage = [lastItem];


function findbyID(array, id) {
    const resultName = (array.find((item) => item.id === id));
    return resultName.name;
}

// const categoryName = findbyID(categories, 1);
// const brandName = findbyID(brands, 3);

function loopArray (array) {
    array.map((item) => {
        if(item.quantity> 0){
            return `
            <div class="group__size_item">
                <input type="radio" name="group__size_item" class="size__radio">
                <label for="">
                    ${item.size}
                </label>
            </div>
            `;
        }else {
            return `
            <div class="group__size_item">
                <input type="radio" name="group__size_item" class="size__radio">
                <label for="">
                    ${item.size}
                    <img src="https://bizweb.dktcdn.net/100/347/064/themes/717243/assets/soldout.png?1677949317964"
                        alt="">
                </label>
            </div>
            `;
        }
    });
}

const detailItems = detailProductLocalStorage.map((item) => {
    item
    return `
        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div class="group__img row">
                <div class="group__main col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <img src="${item.img[0]}" alt="mainImg" class="main__img">
                    <img src="${item.img[0]}" alt="mainImg" class="main__img imgZoom">
                </div>
                <div class="group__carousel col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <img src="${item.img[0]}" alt="" class="carousel__img">
                </div>
                <div class="group__carousel col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <img src="${item.img[1]}" alt="" class="carousel__img">
                </div>
                <div class="group__carousel col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <img src="${item.img[2]}" alt="" class="carousel__img">
                </div>
                <div class="group__carousel col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <img src="${item.img[3]}" alt="" class="carousel__img">
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-7 col-sm-7 product__info">
            <h3 class="product__name">${item.name}</h3>
            <div class="product__review product__form_label">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div class="product__type product__form_label">
                <label for="" class="product__type_label">Loại:</label>
                <a href="#" class="product__type_link">${findbyID(categories, item.category_id)}</a>
            </div>
            <div class="product__brand product__form_label">
                <label for="" class="product__type_label">Hãng:</label>
                <a href="#" class="product__type_link">${findbyID(brands, item.brand_id)}</a>
            </div>
            <div class="product__code product__form_label">
                <label for="" class="product__type_label">SKU:</label>
                <span class="product__type_span">${item.id}</span>
            </div>
            <div class="product__quantity product__form_label">
                <label for="" class="product__type_label">Số lượng còn lại:</label>
                <span class="product__type_span italic">(1)</span>
            </div>
            <div class="product__price product__form_label">
                <span class="product__price--new">${item.newPrice}</span>
                <span class="product__price--old">${item.oldPrice}</span>
            </div>
            <div class="product__size product__form_label">
                <label for="" class="product__type_label label-padding">Size:</label>
                <div class="group__size">
                    ${loopArray(item.sizes)}
                </div>
            </div>
            <div class="add-product-quantity product__form_label">
                <label for="" class="product__type_label label-padding-18">Số lượng:</label>
                <button class="subtraction__btn"><span>-</span></button>
                <form action="" class="form-quantity">
                    <div class="form-group ">
                        <input type="text" value="1" class="form-input input-quantity">
                        <span class="form-message"></span>
                    </div>
                </form>
                <button class="addition__btn"><span>+</span></button>
            </div>
            <div class="addToCart">
                <button class="addToCart__btn btn">
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    MUA NGAY
                </button>
            </div>
        </div>
    `;
});



console.log(detailItems.join(''));