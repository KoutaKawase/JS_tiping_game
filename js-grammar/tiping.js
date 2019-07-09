var word = '';

var question_list = [
    '笑う門には福来たる',
    '鬼に金棒',
    '石の上にも三年',
    '郷に入っては郷に従え',
]
//出題エリア取得変数
var question_area = document.getElementById('question-area');
//回答エリア取得変数
var answer_area = document.getElementById('answer');
//結果表示エリア取得変数
var result_area = document.getElementById('result-area');
//カウントエリア取得変数
var count_area = document.getElementById('count');
// 結果メッセージ
var message = '';
//アンサーボタン取得変数
var answer_button = document.getElementById('answer-button');
//出題カウント変数
var question_count = 0;
//スタート時間変数
var start_time = null;
//問題が正解か不正解だったかを記す配列
var is_correct_list = [];
//正解数変数
var how_many_correct = 0;

function count() {
    if (question_count < 10) {
        question_count++;
        count_area.innerHTML = question_count;
    } else {
        //todo 結果出力
        print_game_result();
    }
}

function print_game_result() {
    //todo 結果出力
    //終了時間を取得
    current_time = Date.now();
    //秒で経過時間取得
    result_time = (current_time - start_time) / 1000;
    document.getElementById('time-result-area').innerHTML = 'タイムは' + result_time + '秒です';
    //正解率表示
    // for (var i = 0; i < is_correct_list.length; i++) {
    //     document.write(is_correct_list[i]);
    // }
    for (var i = 0; i < is_correct_list.length; i++) {
        if (is_correct_list[i] === '正解') {
            how_many_correct++;
        }
    }
    var currect_percent = (how_many_correct / 10) * 100;
    document.getElementById('currect-percent-area').innerHTML = '正解率は' + currect_percent + '%です';

}

function print_question() {
    //インプットへ自動フォーカス
    answer_area.focus();
    //結果を消す
    result_area.innerHTML = '';
    //問題をランダムに取得
    word = question_list[Math.floor(Math.random() * question_list.length)];
    //画面に表示
    question_area.innerHTML = word;
}

//回答を比較
function comparison_answer() {
    //回答取得エリア取得変数
    if (word === answer_area.value) {
        message = '正解です！その調子！';
        result_area.innerHTML = message;
        is_correct_list[question_count] = '正解';
    } else {
        message = '惜しい！不正解です！';
        result_area.innerHTML = message;
        is_correct_list[question_count] = '不正解';
    }
    //次に備えてインプットとメッセージをを空にする。
    answer_area.value = '';
    message = '';
    setTimeout(print_question, 300);
}


if (confirm('OKを押したら文字列が出現します。同じ文字列を打ちましょう！')) {
    start_time = Date.now();
    //出題
    print_question();
    count_area.innerHTML = 1;
}