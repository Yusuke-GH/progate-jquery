//ボタンをクリックしてh1タグを隠す
$(function() {
    $('#hide-text').click(function() {
        $('#text-hide').slideUp();
    });
});

//ボタンをクリックして、h1タグのCSSスタイリングを変更する。
$(function() {
    $('#change-css').click(function() {
        $('#text-style').css('color', 'red');
        $('#text-style').css('font-size', '50px');
    });
});

//ボタンをクリックして、h1タグ内の文字列を変更する。
//ボタンをクリックして、h1タグ内の要素を変更する。
$(function() {
    //文字列の変更
    $('#change-text').click(function() {
        $('#text-text').text('文字列が変更されました。');
    });
    //要素の変更
    $('#change-html').click(function() {
        $('#text-html').html('<a href="#">h1タグのかたまり → aタグのかたまり に変更しました。</a>');
    });
});

//クリックされたリストの色を変更する。
$(function() {
    $('.list-item').click(function() {
        $(this).css('color', 'red');
    });
});

//クリックされた要素に対して「CSSスタイリング・タグのかたまりの変更」と「フェードアウト」をする。　※メソッドチェーンを用いて
$(function() {
    $('.btn-methodchain').click(function() {
        var $title = $("#title-several-change");
        $title.css('color', 'red');
        $title.html('htmlメソッドを用いて、タグ内の文字列の変更完了');
        $title.fadeOut(1000);
        $('#text-several-change').css('color', 'blue').html('<h3>メソッドチェーンを用いて、上記同様の動きつけ完了</h3>').fadeOut(1000);
    });
});

//クリックすると選択的に要素を指定して、動きつけを適用する。
$(function() {
    $('#find-method').click(function() {
        //find-method
        $('#wrapper').find('a').css('color', 'red');
    });
    $('#children-method').click(function() {
        // children-method
        $('#wrapper').children('a').fadeOut();
    });
});

//ホバー中、文字列をフェードインする
$(function() {
    $('#language-wrapper').hover(
        function() {
            $('.language-text').fadeIn();
        },
        function() {
            $('.language-text').fadeOut();
        }
    );
});
