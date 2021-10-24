$(document).ready(function(){
    $('.header__bar').click(function(){
        $('.header__list').toggle('active');
        // $('.opacity__menu').toggle('open__opacity');
        // $('.fa.fa-bars').toggleClass('fas fa-times');
    })
    // $('.opacity__menu.open__opacity').click(function(){
    //     $('.header__list').remove('active');
    //     $('.opacity__menu.open__opacity').remove('open__opacity');
    //     // $('.fa.fa-bars').toggleClass('fas fa-times');
    // })
})

var tabLinks = document.querySelectorAll(".category__link");
var tabContent = document.querySelectorAll(".category__tab");

tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});

function openTabs(el) {
    var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
    var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic

    tabContent.forEach(function (el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + electronic).classList.add("active");

    btn.classList.add("active");
    console.log(electronic);
}

