// 曜日配列
const weekDay = ["日", "月", "火", "水", "木", "金", "土"];

// 今日の日付
const today = new Date();
let day = today.getDay();

// スイッチが切り替えられた回数
let clickCount = 0;

// 初期化処理：localStorageにスケジュールデータが保存されていない場合、デフォルトのデータを設定
function initializeSchedule() {
    for (let i = 0; i < 7; i++) {
        if (localStorage.getItem('schedule_localhost' + i) == null) {
            console.log("reset");
            for (let j = 0; j < 7; j++) {
                const class_schedule = ["サンプル" + j+ "-1", "サンプル" + j +"-2", "サンプル" + j +"-3", "サンプル" + j +"-4", "サンプル" + j +"-5", "サンプル" + j +"-6", "サンプル" + j +"-7"];
                const serializedArray = JSON.stringify(class_schedule);
                localStorage.setItem('schedule_localhost' + j, serializedArray);
            }
        }
    }
}

// スケジュール表示の関数
function showSchedule() {
    console.log(weekDay[day]);
    document.getElementById("week").textContent = weekDay[day];

    let textbox_element = document.getElementById('main_system');
    const array1 = loadScheduleData();

    for (let i = 1; i <= array1[day].length; i++) {
        let new_element = document.createElement('h2');
        new_element.textContent = i + '時間目:';
        new_element.innerHTML += `<span id='test${i}'>${array1[day][i - 1]}</span>`;
        textbox_element.appendChild(new_element);
    }
}

// ページが読み込まれた後に、スイッチのイベントリスナーを設定
document.addEventListener("DOMContentLoaded", function () {
    const switch1 = document.getElementById("switch1");

    switch1.addEventListener("change", function () {
        const array = [];
        const array1 = loadScheduleData();

        for (let i = 1; i <= array1[day].length; i++) {
            let sample = document.getElementById('test' + i);
            if (switch1.checked) {
                sample.innerHTML = `<input id="message" style="font-size: 20px; width: 180px; height: 30px;" type="text" value="${sample.textContent}">`;

            } else {
                const textElement = document.getElementById("message");
                if (textElement) {
                    const text = textElement.value;
                    sample.innerHTML = `${text}`;
                    array.push(text);
                    if (i === array1[day].length) {
                        const serializedArray = JSON.stringify(array);
                        localStorage.setItem('schedule_localhost' + (day % 7), serializedArray);
                    }
                }
            }
        }
    });
});

// ローカルストレージからデータを読み込み、曜日に対応するスケジュールを表示
function loadScheduleData() {
    let array1 = [];
    for (let i = 0; i < 7; i++) {
        const serializedData = localStorage.getItem('schedule_localhost' + i);

        // データが存在しない場合、デフォルト値を設定
        if (serializedData) {
            array1[i] = JSON.parse(serializedData);
        } else {
            array1[i] = [];  // データがない場合は空の配列を設定
        }
    }
    return array1;
}

// 次の日に切り替える関数
function nextday() {
    clickCount++;
    day++;

    // day の範囲を 0 から 6 に収める
    if (day >= 7) {
        day = 0; // 月曜日に戻す
    }

    document.getElementById("week").textContent = weekDay[day % 7];

    const array1 = loadScheduleData();
    if (array1[day].length === 0) {
        console.warn(`No schedule found for ${weekDay[day]}`);
        return; // スケジュールがない場合、処理を中止
    }

    for (let i = 1; i <= array1[day].length; i++) {
        let aaa = document.getElementById('test' + i);

        // 'test' + i の要素が存在しない場合、新たに作成する
        if (!aaa) {
            let textbox_element = document.getElementById('main_system');
            let new_element = document.createElement('h2');
            new_element.textContent = i + '時間目:';
            new_element.innerHTML += `<span id='test${i}'>${array1[day][i - 1]}</span>`;
            textbox_element.appendChild(new_element);
            aaa = document.getElementById('test' + i);  // 新たに作成した要素を取得
        }

        aaa.innerHTML = `${array1[day][i - 1]}`;
    }
}



// 今日の日付を取得して表示
function gettoday() {
    day = today.getDay();
    document.getElementById("week").textContent = weekDay[day];

    const array1 = loadScheduleData();
    for (let i = 1; i <= array1[day].length; i++) {
        let aaa = document.getElementById('test' + i);
        aaa.innerHTML = `${array1[day][i - 1]}`;
    }
}

// ローカルストレージをリセットする関数
function reset() {
    const confirmation = window.confirm("内容をサンプルに戻します。本当にリセットしますか？");

    if (confirmation) {
        // ユーザーが「OK」を押した場合のみリセット処理を実行
        localStorage.clear();
        alert("リセットが完了しました！");
    }
}

// 初期化処理
initializeSchedule();
showSchedule();
