$(function () {

    //ハンバーガーメニュー
    $('.btn_menu').click(function () {
        $(this).toggleClass('active');
    });

    //プロローグ
    $('.prologue').typist({
        speed: 5.5,
        text: 'ニャー、 すもう　かっこいい\nニャー、 ちきゅう　ジャックするね'
    });

    //    ウィンドウの高さを取得
    var window_height = $(window).height();
    console.log('windowheight' + window_height);

    //プロローグ中はスクロール不可(setTimeout)
    setTimeout(function () {

        $('.wrapper').css('display', 'block');

        $('.space').remove();

        // 以下、スクロールすると実行される
        $(window).on("scroll", function () {

            //スクロールの値
            var scrollY = $(this).scrollTop();


            //スクロールしたら表示される
            $('.spaceship_light_img').addClass('fade-in');

            //スクロールしたら非表示
            $('.scroll_area').addClass('fade-out');

            //宇宙ネコ（回転）
            //スクロールしたら表示され下に移動
            $('.space_bunyan_img').addClass('fade-in');
            $('.space_bunyan_img').css('transform', 'translateY(' + scrollY * 0.9 + 'px )');

            //------------表示関連　star------------

            // WEBアイコン表示
            var web_targetY = $('.potfolio_web_background').offset().top - 150;
            //                            console.log(web_targetY);

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
            var graphic_targetY = $('.potfolio_graphic_area_background ').offset().top - 150;
            //                            console.log(graphic_targetY);

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


            //ネコ力士の表示
            var dohyoiri_area_targetY = $('.dohyoiri_area_background').offset().top - 150;

            if (scrollY > dohyoiri_area_targetY) {

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
            }

            //------------表示関連　end------------

            //------------移動関連　star------------

            //UFO_kidnap(Left to right)            
            var UFO_targetY = $('.UFO_kidnap').offset().top;
            //            console.log('UFO_targetY' + UFO_targetY);
            //            console.log('scrollY' + scrollY);


            if (scrollY > window_height - UFO_targetY) {
                //console.log('UFO_targetY in');
                //+だと右、-だと左に動く
                $('.UFO_kidnap').css('transform', 'translateX(' + scrollY * 0.5 + 'px )');
            }

            //UFO_kidnap(right to left)            
            var UFO_right_targetY = $('.UFO_kidnap_right').offset().top;
            var UFO_right_targetY_scroll = scrollY - 800;

            if (scrollY > window_height - UFO_right_targetY_scroll) {
                //+だと右、-だと左に動く
                $('.UFO_kidnap_right').css('transform', 'translateX(' + UFO_right_targetY_scroll * -0.4 + 'px )');
                //+だと下、-だと上に動く
                //                $('.UFO_kidnap_right').css('transform', 'translateY(' + UFO_right_targetY_scroll * 0.2 + 'px )');
            }

            //Floatゆらゆら
            var Float_targetY = $('.float_bunyan_up').offset().top;
            var Float_targetY_scroll = scrollY - 1200;
            if (scrollY > window_height - Float_targetY) {
                //+だと右、-だと左に動く
                $('.float_bunyan_up').css('transform', 'translateX(' + Float_targetY_scroll * 0.8 + 'px )');
            }


            //ネコ飛行機（左から右へ）
            var airplane_targetY = $('.neko_airplane').offset().top;
            var airplane_targetY_scroll = scrollY - 2200;
            if (scrollY > window_height - airplane_targetY) {
                //+だと右、-だと左に動く
                $('.neko_airplane').css('transform', 'translateX(' + airplane_targetY_scroll * 0.55 + 'px )');
            }

            //風船ネコ
            var balloon_targetY = $('.balloon_bunyan').offset().top;
            var balloon_targetY_scroll = scrollY - 3000;

            if (scrollY > window_height - balloon_targetY) {
                //+だと右、-だと左に動く
                $('.balloon_bunyan').css('transform', 'translateY(' + balloon_targetY_scroll * 1 + 'px )');
            }


            //スカイダイビングネコ
            var atmosphere_targetY = $('.atmosphere_area').offset().top;
            var skydiving_bunyan_targetY_scroll = scrollY - 3700;

            if (scrollY > atmosphere_targetY) {
                //+だと右、-だと左に動く
                $('.skydiving_bunyan').css('transform', 'translateX(' + skydiving_bunyan_targetY_scroll * 0.9 + 'px )');
            }


            //鳥ネコ
            var game_app_area_targetY = $('.potfolio_game_app_area_background').offset().top;
            var bird_bunyan_targetY_scroll = scrollY - 4000;

            if (scrollY > game_app_area_targetY) {
                //+だと右、-だと左に動く
                $('.bird_bunyan').css('transform', 'translateX(' + bird_bunyan_targetY_scroll * -0.5 + 'px )');
            }


            //パラソルネコ（左）
            var game_app_area_targetY = $('.potfolio_game_app_area_background').offset().top;
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
    }, 7700);
    //setTimeout終わり


})
