
// コンピュータの出した手をテキストにした配列
const com_select = ['グー', 'チョキ', 'パー',]
// 自分の出した手vsコンピュータの出した手の勝敗
// 0＝ぐー、1＝チョキ、2＝パーの順番 横にコンピュータの手
// 0＝ぐー、1＝チョキ、2＝パーの順番
const my_select = [
    ['あいこだぁ', '勝ったー！', '負けちゃった',], // 自分グー
    ['負けちゃった', 'あいこだぁ', '勝ったー！',], // 自分チョキ
    ['勝ったー！', '負けちゃった', 'あいこだぁ',] // 自分パー
]

// com_handの画像 0＝ぐー、1＝チョキ、2＝パーの順番
const fairy_random_0 = ['img/0-0.jpg', 'img/0-1.jpg']
const fairy_random_1 = ['img/1-0.jpg', 'img/1-1.jpg']
const fairy_random_2 = ['img/2-0.jpg', 'img/2-1.jpg', 'img/2-2.jpg', 'img/2-3.jpg', 'img/2-4.jpg']


// ゲームするボタンを押したら (2回目以降はNEXT表記になる)
$("#btn_push").click(function () {
    $('#赤丸').hide();
    // 妖精のじゃんけん移行画面に変わる
    $("#fairy").attr("src", 'img/妖精4.jpeg').addClass('open');
    // じゃんけんぽんの掛け声が出る
    $("#flowing_box_bottom").text("じゃ〜ん、け〜ん、ぽん");
});

let stone = 0;

// じゃんけんボタンを押した時-----------------------
$(function () {
    // "赤丸"と"3つ揃ったの文字"を非表示設定
    $(function () {
        $('#赤丸').hide();
        $('#three').hide();
        
    });
    // id = "btn"のどれかをクリックした時の処理
    $('.btn').click(function () {
        //コンピュータの出す手を決める
        var com_Num = (Math.floor(Math.random() * 3));
        console.log(com_Num);
        // $(this)は「イベントが発生した要素」この場合はクリックしたボタンのこと
        // これで、どれを押したか調べられる
        var my = $(this).attr('id');
        console.log(my);

        console.log(my_select[my][com_Num]);
        // コンピュータの出した手の画像を選ぶ
        var fairy_img = () => {
            if (com_Num == 0) {
                var i = (fairy_random_0[(Math.floor(Math.random() * 2))])
                return i;
            } else if (com_Num == 1) {
                var i = (fairy_random_1[(Math.floor(Math.random() * 2))])
                return i;
            } else if (com_Num == 2) {
                var i = (fairy_random_2[(Math.floor(Math.random() * 5))])
                return i;
            }
        }
        // 妖精の画像をかえる
        $("#fairy").attr("src", fairy_img).addClass('open');
        // じゃんけんの結果をテキストで表示
        $("#flowing_box_bottom").text(my_select[my][com_Num]);
        // 押したボタンvsコンピュータの出した手の結果を言葉でかえす
        // $("#flowing_box_2").text(my_select[my][com_Num]);


        if (my_select[my][com_Num] == "勝ったー！") {
            $('#赤丸').show();

            if (stone == 0) {
                $("#stone_1").attr("src", 'img/石.svg').addClass('open');
                stone = stone + 1;

            } else if (stone == 1) {
                $("#stone_2").attr("src", 'img/石.svg').addClass('open');
                stone = stone + 1;
            } else if (stone == 2) {
                $("#stone_3").attr("src", 'img/石.svg').addClass('open');
                // 3つそろったの文字が出てくる
                $('#three').show(4000);
                // ゴール画面へ移動
                window.setTimeout(disp_goal, 8000);
                function disp_goal() {
                    window.location.href = 'goal.html';
                }



            }
        }
        console.log("枠の中は" + stone);

    });
});

// じゃんけん画面に戻るボタンを押した時
$("#goal_push").click(function () {
    window.location.href = 'index.html';
});




// 3つの石を手に入れた

// きみは、
// 努力する意志
// 我慢する意志
// やり続ける意志を持っている

// さあ、前を向いてすすもう！


