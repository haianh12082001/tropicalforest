$(document).ready(function(){
    $(".banner").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    });
    $(".feedback__container").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    });
    $(".slide__list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
              {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
        ]
    });
    $(".discout__conatiner").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
              {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
        ]
    });
    $(".sponsor__content").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                //   infinite: true,
                //   dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
              {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
        ]
    });
    $(".news_content").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
              },
        ]
    });
    $('.header__bar').click(function(){
        $('.header__list').addClass('active');
        $('.opacity__menu').addClass('open__opacity');
        // $('.fa.fa-bars').toggleClass('fas fa-times');
    })
    $('.opacity__menu').click(function(){
        $('.header__list').removeClass('active');
        $('.opacity__menu').removeClass('open__opacity');
        // $('.fa.fa-bars').toggleClass('fas fa-times');
    })


    //  strat-rating
    
    $("#1 #st1").click(function() {
        $("#1 .fa-star").css("color", "black");
        $("#1 st1").css("color", "yellow");

    });
    $("#1 #st2").click(function() {
        $("#1 .fa-star").css("color", "black");
        $("#1 #st1,#1 #st2").css("color", "yellow");

    });
    $("#1 #st3").click(function() {
        $("#1 .fa-star").css("color", "black")
        $("#1 #st1,#1 #st2,#1 #st3").css("color", "yellow");

    });
    $("#1 #st4").click(function() {
        $("#1 .fa-star").css("color", "black");
        $(" #1 #st1,#1 #st2,#1 #st3,#1 #st4").css("color", "yellow");

    });
    $("#1 #st5").click(function() {
        $("#1 .fa-star").css("color", "black");
        $("#1 #st1,#1 #st2,#1 #st3,#1 #st4,#1 #st5").css("color", "yellow");

    });
    $(document).on('click', 'div', function () {
        let Iditem = this.id;
        console.log(Iditem);
    });
  
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

