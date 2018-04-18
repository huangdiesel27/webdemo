


// $( document ).ready(function() {
//     $('header').load('header.html');
// });

$(function(){
    $('.popup').hide();
    $('.passwrong').hide();
    $('.loginedarea').hide();

    $('.xbtn').click(function(){
        console.log(123);
        $('.popup').fadeOut();
    });

    $('#pop1').click(function(){
        $('#pop_login').fadeIn(800);
    });
    $('#pop2').click(function(){
        $('#pop_registered').fadeIn(800);
    });
    $('#pop3').click(function(){
        $('.popup').hide();
        $('#pop_registered').fadeIn(800);
    });
    $('#pop4').click(function(){
        $('.popup').hide();
        $('#pop_login').fadeIn(800);
    });

    $('#login').click(function(){
        $('.popup').hide();
        $('#nologin').hide();
        $('#loginsucess').fadeIn(800);
        $('.loginedarea').fadeIn(0);
    });

    $('#logout').click(function(){
        $('.loginedarea').hide();
        $('#nologin').fadeIn(800);
    });

    $('.inputbox4').click(function(){
        $('.popup').hide();
        $('#loginsucess').fadeIn(800);
    });
    $('.inputbox3').click(function(){       //忘記密碼
        $('.popup').hide();
        $('#passwordforget').fadeIn(500);
        $('.pop_content3').hide();
        $('#forget1').fadeIn(500);
    });

    $('#next1').click(function(){
        $('.pop_content3').hide();
        $('#verification_OK').fadeIn(500);
    });
    $('#next2').click(function(){
        $('.pop_content3').hide();
        $('#verification_mail').fadeIn(500);
    });
    $('#next4').click(function(){
        $('.pop_content3').hide();
        $('#verification_mail').fadeIn(500);
    });
    $('#next3').click(function(){
        $('.pop_content3').hide();
        $('#verification_newpassword').fadeIn(500);
    });
    $('#newpasssend').click(function(){
        $('.popup').hide();
        $('#pop_login').fadeIn(500);
    });
});




var slideInterval = setInterval(nextSlide,3000);
var slides = document.querySelectorAll('.kv-item li');
var slides_page = document.querySelectorAll('.kv-page li');
var currentSlide = 0;
function nextSlide() {
    slides[currentSlide].className = '';
    slides_page[currentSlide].className = 'kv-pagebox';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'active';
    slides_page[currentSlide].className = 'kv-pagebox active';
};

$(".kv-page li").click(function(event) {
    clearInterval(slideInterval);
    $(this).addClass('active').siblings().removeClass('active');
    currentSlide = $(this).index();
    $(".kv-item li").eq(currentSlide).addClass('active').siblings().removeClass('active');
    slideInterval = setInterval(nextSlide, 3000);
});


$(function(){
    // 預設顯示第一個 Tab
    var _showTab = 0;
    $('.coopmenu').each(function(){
        // 目前的頁籤區塊
        var $tab = $(this);

        var $defaultLi = $('ul.tabs li a', $tab).eq(_showTab).addClass('active2');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        // 當 li 頁籤被點擊時...
        // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
        $('ul.tabs li', $tab).click(function() {
            // 找出 li 中的超連結 href(#id)
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            // 把目前點擊到的 li 頁籤加上 .active
            // 並把兄弟元素中有 .active 的都移除 class
            $this.addClass('active').siblings('.active').removeClass('active');
            $('ul.tabs li a').removeClass('active2');
            $this.find('a').addClass('active2');
            // 淡入相對應的內容並隱藏兄弟元素
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();

            return false;
        }).find('a').focus(function(){
            this.blur();
        });
    });
});



$(function(){
    setTimeout(run1,250);
    setTimeout(run2,1000);
    setInterval(run3,1500);
    function run1(){
        $('.L_top img').animate({left:'6%',opacity:1},1000);
    };
    function run2(){
        $('.lr_range_R img').animate({right:'12%',opacity:1},1000);
    };
    function run3(){
        $('.L_bottom').animate({bottom:'5%',opacity:1},1000);
    };

});


$(function(){
    setTimeout(run1,250);
    setTimeout(run2,1000);
    setInterval(run3,1500);
    function run1(){
        $('.sporttopic').animate({left:'-7%',opacity:1},1000);
    };
    function run2(){
        $('.sportimg').animate({right:'-20%',opacity:1},1000);
    };
    function run3(){
        $('.sportselect').animate({bottom:'-5%',opacity:1},1000);
    };

});

$(function(){
    setTimeout(run1,250);
    setTimeout(run2,1000);
    setInterval(run3,1500);
    function run1(){
        $('.lotterytopic').animate({left:'5%',opacity:1},1000);
    };
    function run2(){
        $('.lotteryimg').animate({right:'-5%',opacity:1},1000);
    };
    function run3(){
        $('.sportselect').animate({bottom:'-5%',opacity:1},1000);
    };

});

$(function(){
    setTimeout(run1,250);
    setTimeout(run2,1000);
    setInterval(run3,1500);
    function run1(){
        $('.financetopic').animate({left:'5%',opacity:1},1000);
    };
    function run2(){
        $('.financeimg').animate({right:'3%',opacity:1},1000);
    };
    function run3(){
        $('.financebutton').animate({bottom:'25%',opacity:1},1000);
    };

});

$(function(){
    setTimeout(run1,250);
    setTimeout(run2,1000);
    setInterval(run3,1500);
    function run1(){
        $('.slot_topleft').animate({left:'0%',opacity:1},1000);
    };
    function run2(){
        $('.slot_topright').animate({right:'0%',opacity:1},1000);
    };
    function run3(){
        $('.slot_bottombg').animate({bottom:'2%',opacity:1},1000);
    };

});


$(function(){
    setTimeout(run1,250);
    setTimeout(run2,1000);
    setInterval(run3,1500);
    function run1(){
        $('.L_pic').animate({left:'3%',opacity:1},1000);
    };
    function run2(){
        $('.R_pic').animate({right:'3%',opacity:1},1000);
    };


});


$(".helpmenuselected_L").click(function(event) {
    console.log(123);
    $(this).parent().children('ul').toggleClass('active');
});
$(".helpmenuselected_R").click(function(event) {
    $(this).parent().children('ul').toggleClass('active');
});

