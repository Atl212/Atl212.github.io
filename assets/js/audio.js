const musicButton = document.getElementById("musicButton");
const audio = document.getElementById("audio");

var everPlayed = false;

// ボタンに表示するアイコンのHTML
const playIconHTML = "<span class='" + musicButton.dataset.playIcon + "'></span>";
const pauseIconHTML = "<span class='" + musicButton.dataset.pauseIcon + "'></span>";

// ボタンのアイコンを更新する関数
var updateMusicButtonIcon = function() {
    if (audio.paused) {
        musicButton.innerHTML = "Music " + playIconHTML;
    } else {
        musicButton.innerHTML = "Music " + pauseIconHTML;
    }
}

// ボタンがクリックされたときの処理
var onClick = function() {
    if (audio.paused) {
        everPlayed = true;
        audio.play();
        audio.volume = 0.3;
    } else {
        audio.pause();
    }

    updateMusicButtonIcon();
}

musicButton.addEventListener('click', onClick, false);

// ページ読み込み時に自動再生を試みる
document.addEventListener('DOMContentLoaded', function() {
    try {
        audio.play().then(() => {
            // 再生成功時、音量を設定しアイコンを更新
            everPlayed = true;
            audio.volume = 0.3;
            updateMusicButtonIcon();
        }).catch((error) => {
            // 自動再生がブロックされた場合
            console.warn("音声の自動再生がブロックされました: ", error);
            updateMusicButtonIcon(); // 初期状態のアイコンを設定
        });
    } catch (error) {
        console.error("音声再生エラー: ", error);
        updateMusicButtonIcon();
    }
});

// 初期状態のボタンアイコンを設定
updateMusicButtonIcon();
