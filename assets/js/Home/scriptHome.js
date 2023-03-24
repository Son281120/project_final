const header = document.getElementById("main-header");
const distance = 300; // khoảng cách tối thiểu để thay đổi thuộc tính position
window.addEventListener("scroll", function () {
    if (window.pageYOffset > distance) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});
