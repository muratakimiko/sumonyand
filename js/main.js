$(function () {

    var UFO_kidnap = $('.UFO_kidnap');
    var UFO_currentY = UFO_kidnap.offset().top;
    console.log(UFO_currentY);



    //ハンバーガーメニュー
    $('.btn_menu').click(function () {
        $(this).toggleClass('active');
    });

    //プロローグ
    $('.prologue').typist({
        speed: 5.5,
        text: 'ニャー、 すもう　かっこいい\nニャー、 ちきゅう　ジャックするね'
    });

//プロローグ中はスクロール不可(setTimeout)
    setTimeout(function () {
        // スクロールすると表示
        $(window).on("scroll", function () {

            //スクロールの値
            var scrollY = $(this).scrollTop();



            $('.spaceship_light_img').addClass('fade-in');









            // WEBアイコン表示
            var web_targetY = $('.potfolio_web_background').offset().top - 150;
            console.log(web_targetY);

            if (scrollY > web_targetY) {
                /*表示1_星（左上左）*/
                $('#web_star8').addClass('web_star8_anime');
                /*表示2_星（右上左）*/
                $('#web_star2').addClass('web_star2_anime');
                /*表示3_星（左上右）*/
                $('#web_star1').addClass('web_star1_anime');
                /*表示4_星（右上右）*/
                $('#web_star3').addClass('web_star3_anime');
                /*表示5_星（左下右）*/
                $('#web_star6').addClass('web_star6_anime');

                /*表示6_星（右下右）*/
                $('#web_star4').addClass('web_star4_anime');
                /*表示7_星（右下左）*/
                $('#web_star5').addClass('web_star5_anime');
                /*表示8_星（左下左）*/
                $('#web_star7').addClass('web_star7_anime');
                /*表示9_星（右）*/
                $('#web_star9').addClass('web_star9_anime');
                /*表示10_星（左）*/
                $('#web_star10').addClass('web_star10_anime');
                /*表示11_星（右上）*/
                $('#web_star11').addClass('web_star11_anime');
                /*表示15_星（右中間）*/
                $('#web_star12').addClass('web_star12_anime');
                /*表示12_星（左下）*/
                $('#web_star14').addClass('web_star14_anime');
                /*表示13_星（右下）*/
                $('#web_star13').addClass('web_star13_anime');
                /*表示14_星（左上）*/
                $('#web_star16').addClass('web_star16_anime');
                /*表示16_星（左中間）*/
                $('#web_star15').addClass('web_star15_anime');
                /*表示17_枠*/
                $('#web_frame').addClass('web_frame_anime');
                /*表示18_枠*/
                $('#web_icon_img').addClass('web_icon_img_anime');

            }


            // Graphicアイコン表示
            var graphic_targetY = $('.potfolio_graphic_area_background ').offset().top - 150;
            console.log(graphic_targetY);

            if (scrollY > graphic_targetY) {
                /*表示11_枠*/
                $('#graphic_frame').addClass('graphic_frame_anime');
                /*表示1_星(左上)*/
                $('#graphic_star1').addClass('graphic_star1_anime');
                /*表示3_星（上中間左）*/
                $('#graphic_star2').addClass('graphic_star2_anime');
                /*表示5_星（上頂上）*/
                $('#graphic_star3').addClass('graphic_star3_anime');
                /*表示4_星（上中間右）*/
                $('#graphic_star4').addClass('graphic_star4_anime');
                /*表示2_星（右上）*/
                $('#graphic_star5').addClass('graphic_star5_anime');
                /*表示9_星（右中間）*/
                $('#graphic_star6').addClass('graphic_star6_anime');
                /*表示6_星（右下）*/
                $('#graphic_star7').addClass('graphic_star7_anime');
                /*表示10_星（下中間）*/
                $('#graphic_star8').addClass('graphic_star8_anime');
                /*表示7_星（左下）*/
                $('#graphic_star9').addClass('graphic_star9_anime');
                /*表示8_星（左中間）*/
                $('#graphic_star10').addClass('graphic_star10_anime');
                /*表示12_グラフィックのイラスト*/
                $('#graphic_icon_img').addClass('graphic_icon_img_anime');
            }




            //UFOゆらゆら
            var UFO_scrollY = $(this).scrollTop();

            UFO_scrollY = UFO_scrollY - 50;

            var topPos = UFO_scrollY / 20 + 50;

            console.log('UFO_scrollY' + UFO_scrollY, 'topPos' + topPos);

        });
    }, 7000);





})
