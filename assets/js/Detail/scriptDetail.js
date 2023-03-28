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