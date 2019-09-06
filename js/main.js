$(function () {

    //画像を配列に保存
    var bunyanBalloons = ['images/balloon_bunyan_1.png', 'images/balloon_bunyan_2.png', 'images/balloon_bunyan_3.png', 'images/balloon_bunyan_4.png', 'images/balloon_bunyan_5.png', 'images/balloon_bunyan_6.png', 'images/balloon_bunyan_7.png'];

    //画像が変わるタイミング値
    var imgChgInterval = 36;


    //Hamburger Menu(ハンバーガーメニュー)
	$('.zdo_drawer_button').click(function () {
		$(this).toggleClass('active');
		$('.zdo_drawer_bg').fadeToggle();
		$('nav').toggleClass('open');
	})
	$('.zdo_drawer_bg').click(function () {
		$(this).fadeOut();
		$('.zdo_drawer_button').removeClass('active');
		$('nav').removeClass('open');
	});


    //プロローグ
    $('.prologue').typist({
        speed: 7,
        text: 'ニャー、 ちきゅう　ジャックするニャ 。'
    });

    //    ウィンドウの高さを取得
    var window_height = $(window).height();
    console.log('windowheight' + window_height);

    //背景の星を配置
    setStars('.header_area');
    setStars('.potfolio_web_background');
    setStars('.potfolio_graphic_area_background');
    setStars('.atmosphere_area');


    //プロローグ後に表示
    $('.wrapperHeader').css('display', 'block');

    //プロローグ中はスクロール不可(setTimeout)
    setTimeout(function () {
        $('.header_area').addClass('start');
        $('.space').remove();
    }, 3400);
    //setTimeout終わり

    //TOPの宇宙船が中央に移動するまでスクロール不可
    setTimeout(function () {
        $('.wrapContent').css('display', 'block');
    }, 6000);
    //setTimeout終わり

    // 以下、スクロールすると実行される
    $(window).on("scroll", function () {

        //スクロールの値
        var scrollY = $(this).scrollTop();
        console.log('スクロール値' + scrollY);


        //スクロールしたら表示される
        $('.spaceship_light_img').addClass('fade-in');

        if (scrollY > 110) {
            //スクロールしたら非表示
            $('.scroll_area').addClass('fade-out');
        }



        //宇宙ネコ（回転）
        //スクロールしたら表示され下に移動
        var space_bunyan_img = $('.space_bunyan_img');
        var space_bunyan_img_anime = $('.space_bunyan_img_anime');
        var space_bunyan_img_data = space_bunyan_img.find('img');

        space_bunyan_img.addClass('fade-in');
        space_bunyan_img.css('transform', 'translateY(' + scrollY * 1 + 'px )');

        if (scrollY > 6820) {
            //土俵に着地
            space_bunyan_img.css({
                'transform': 'translateY(6820px)'
            });
            //横綱の表示
            $('.d_bunyan_1').addClass('d_bunyan_1_anime');
            $('.d_bunyan_2').addClass('d_bunyan_2_anime');
            $('.d_bunyan_3').addClass('d_bunyan_3_anime');
            $('.d_bunyan_4').addClass('d_bunyan_4_anime');
            $('.d_bunyan_5').addClass('d_bunyan_5_anime');
            $('.d_bunyan_6').addClass('d_bunyan_6_anime');
            $('.d_bunyan_7').addClass('d_bunyan_7_anime');
            $('.d_bunyan_8').addClass('d_bunyan_8_anime');
            $('.d_bunyan_9').addClass('d_bunyan_9_anime');
            $('.d_bunyan_10').addClass('d_bunyan_10_anime');
            $('.d_bunyan_11').addClass('d_bunyan_11_anime');
            $('.d_bunyan_12').addClass('d_bunyan_12_anime');
            $('.d_bunyan_13').addClass('d_bunyan_13_anime');
            $('.d_bunyan_14').addClass('d_bunyan_14_anime');

            //ダンス猫の表示
            $('.dance_bunyan_1').addClass('dance_bunyan_1_anime');
            $('.dance_bunyan_2').addClass('dance_bunyan_2_anime');
            $('.dance_bunyan_3').addClass('dance_bunyan_3_anime');
            $('.dance_bunyan_4').addClass('dance_bunyan_4_anime');
            $('.dance_bunyan_5').addClass('dance_bunyan_5_anime');
            $('.dance_bunyan_6').addClass('dance_bunyan_6_anime');
            $('.dance_bunyan_7').addClass('dance_bunyan_7_anime');
            $('.dance_bunyan_8').addClass('dance_bunyan_8_anime');
            $('.dance_bunyan_9').addClass('dance_bunyan_9_anime');
            $('.dance_bunyan_10').addClass('dance_bunyan_10_anime');

        } else if (scrollY > 6370) {
            //つり屋根から下
            space_bunyan_img_data.attr('src', 'images/yumitori.png');
            space_bunyan_img_data.css({
                'width': '142px',
                'height': 'auto'
            });
            space_bunyan_img.css({
                'margin-left': '-71px'
            });


        } else if (scrollY > 2940 && scrollY <= 6370) {
            //飛行機からつり屋根まで
            space_bunyan_img.css({
                'margin-left': '-75px'
            });
            space_bunyan_img_anime.css({
                'animation': 'none',
                'transform': 'rotate(0deg)'
            });
            space_bunyan_img_data.css({
                'width': '130px',
                'height': 'auto'
            });

            //スクロール値を調整。割る値を帰るとタイミングが変わる
            var scrollSpeed = Math.floor(scrollY / imgChgInterval);
            //スクロール値から画像の枚数を割った余り。画像数でループする
            var balloonsCount = scrollSpeed % bunyanBalloons.length;
            space_bunyan_img_data.attr('src', bunyanBalloons[balloonsCount]);

        } else {
            //宇宙船から飛行機まで
            space_bunyan_img_data.attr('src', 'images/Bunyan_space_base.png');
            space_bunyan_img_data.css({
                'width': '91px',
                'height': 'auto'
            });
            space_bunyan_img_anime.css({
                'animation': 'right_rotation 7s linear infinite'
            });
        }


        //------------表示関連　star------------

        // WEBアイコン表示
        var web_targetY = $('.potfolio_web_background').offset().top - 430;
        //console.log('web_targetY' + web_targetY);

        if (scrollY > web_targetY) {
            /*WEBタイトル*/
            $('.web_contaner').addClass('web_contaner_anime');
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
        var graphic_targetY = $('.potfolio_graphic_area_background ').offset().top - 520;
        //console.log('graphic_targetY' + graphic_targetY);

        if (scrollY > graphic_targetY) {
            /*graphicテキスト表示*/
            $('.graphic_text_contaner').addClass('graphic_text_contaner_anime');
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

        // GAME_APPエリアの表示
        var game_app_targetY = $('.potfolio_game_app_area_background').offset().top - 150;
        //                            console.log(graphic_targetY);

        if (scrollY > game_app_targetY) {
            /*graphicテキスト表示*/
            $('.potfolio_game_app_area').addClass('potfolio_game_app_area_anime');
        }

        //------------表示関連　end------------

        //------------移動関連　star------------

        //UFO_kidnap(left to right)            
        var UFO_left_targetY = $('.UFO_kidnap_left').offset().top;
        var UFO_left_targetY_scroll = scrollY - 800;

        if (scrollY > window_height - UFO_left_targetY_scroll) {
            //前がX(+だと右、-だと左に動く),後ろがY(+だと下、-だと上に動く)
            $('.UFO_kidnap_left').css('transform', 'translate(' + UFO_left_targetY_scroll * 0.5 + 'px, ' + UFO_left_targetY_scroll * 0.2 + 'px)');
            //+だと下、-だと上に動く
            //$('.UFO_kidnap_right').css('transform', 'translateY(' + UFO_right_targetY_scroll * 0.2 + 'px )');
        }

        //Floatゆらゆら
        var Float_targetY = $('.float_bunyan_up').offset().top;
        var Float_targetY_scroll = scrollY - 1200;

        //前がX(+だと右、-だと左に動く),後ろがY(+だと下、-だと上に動く)
        if (scrollY > window_height - Float_targetY) {
            $('.float_bunyan_up').css('transform', 'translate(' + Float_targetY_scroll * 0.4 + 'px, ' + Float_targetY_scroll * -0.9 + 'px)');
        }


        //ネコ飛行機（左から右へ）
        var airplane_targetY = $('.neko_airplane').offset().top;
        var airplane_targetY_scroll = scrollY - 2300;
        if (scrollY > window_height - airplane_targetY) {
            //+だと右、-だと左に動く
            $('.neko_airplane').css('transform', 'translateX(' + airplane_targetY_scroll * 0.55 + 'px )');
        }

        //        //風船ネコ
        //        var balloon_targetY = $('.balloon_bunyan').offset().top;
        //        var balloon_targetY_scroll = scrollY - 3000;
        //
        //        if (scrollY > window_height - balloon_targetY) {
        //            //+だと右、-だと左に動く
        //            $('.balloon_bunyan').css('transform', 'translateY(' + balloon_targetY_scroll * 1 + 'px )');
        //        }


        //スカイダイビングネコ
        var atmosphere_targetY = $('.atmosphere_area').offset().top - 300;
        var skydiving_bunyan_targetY_scroll = scrollY - 4000;

        if (scrollY > atmosphere_targetY) {
            //+だと右、-だと左に動く
            //$('.skydiving_bunyan').css('transform', 'translateX(' + skydiving_bunyan_targetY_scroll * 0.9 + 'px )');

            //前がX(+だと右、-だと左に動く),後ろがY(+だと下、-だと上に動く)
            $('.skydiving_bunyan').css('transform', 'translate(' + skydiving_bunyan_targetY_scroll * 0.8 + 'px, ' + skydiving_bunyan_targetY_scroll * -0.1 + 'px)');
        }

        //鳥ネコ
        var game_app_area_targetY = $('.potfolio_game_app_area_background').offset().top;
        var bird_bunyan_targetY_scroll = scrollY - 4000;

        if (scrollY > game_app_area_targetY) {
            //+だと右、-だと左に動く
            $('.bird_bunyan').css('transform', 'translateX(' + bird_bunyan_targetY_scroll * -0.5 + 'px )');
        }


        //パラソルネコ（左）
        var game_app_area_targetY = $('.potfolio_game_app_area_background').offset().top - 150;
        var parasol_bunyan_targetY_scroll = scrollY - 3200;

        if (scrollY > game_app_area_targetY) {
            //+だと右、-だと左に動く
            $('.parasol_bunyan').css('transform', 'translateY(' + parasol_bunyan_targetY_scroll * 0.25 + 'px )');
        }

        //パラソルネコ（右）
        var game_app_area_targetY = $('.potfolio_game_app_area_background').offset().top;
        var parasol_bunyan_right_targetY_scroll = scrollY - 3800;

        if (scrollY > game_app_area_targetY) {
            //+だと右、-だと左に動く
            $('.parasol_bunyan_right').css('transform', 'translateY(' + parasol_bunyan_right_targetY_scroll * 0.25 + 'px )');
        }


    });
    //window終わり

    //星をランダムに配置する

    function setStars(area) {

        var starts = $("<div></div>", {
            'class': 'bg_starts'
        });

        //        星の数を増やしたい場合は「＜２４」を増やす

        for (var i = 0; i < 24; i++) {

            var posX = Math.floor(Math.random() * 100);
            var posY = Math.floor(Math.random() * 100);
            var radius = Math.floor(Math.random() * 4) + 1;
            var delayTime = Math.random() * 5;

            var bg_star = $("<span></span>", {
                'class': 'bg_star',
                'style': 'left:' + posX + '%;top:' + posY + '%;animation-delay: ' + delayTime + 's; width:' + radius + 'px; height:' + radius + 'px;'
            });
            $(starts).append(bg_star);
        }
        $(area).prepend(starts);
    }


})
