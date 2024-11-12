var date = new Date();
var dayOfWeek = date.getDay();
var dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];

var i = 0;
var you = ["日", "月", "火", "水", "木", "金", "土"][i];

    document.getElementById('you').innerText = you;
// ページ読み込み時に今日の曜日を表示

// 初期表示としてLocal Storageから教科情報を読み込む
loadClasses();

// 曜日に応じて教科情報を表示する関数
function displayClasses(classes) {
    document.getElementById('class1').innerText = '1限目: ' + classes[0];
    document.getElementById('class2').innerText = '2限目: ' + classes[1];
    document.getElementById('class3').innerText = '3限目: ' + classes[2];
    document.getElementById('class4').innerText = '4限目: ' + classes[3];
    //document.getElementById('class8').innerText = '昼休み';
    document.getElementById('class5').innerText = '5限目: ' + classes[4];
    document.getElementById('class6').innerText = '6限目: ' + classes[5];
    document.getElementById('class7').innerText = '7限目: ' + classes[6];
}

// テキストボックスから教科情報を取得してLocal Storageに保存する関数
function saveClasses() {
    var sunClasses = [
        document.getElementById('sunClass1').value,
        document.getElementById('sunClass2').value,
        document.getElementById('sunClass3').value,
        document.getElementById('sunClass4').value,
        document.getElementById('sunClass5').value,
        document.getElementById('sunClass6').value,
        document.getElementById('sunClass7').value
    ];
    var monClasses = [
        document.getElementById('monClass1').value,
        document.getElementById('monClass2').value,
        document.getElementById('monClass3').value,
        document.getElementById('monClass4').value,
        document.getElementById('monClass5').value,
        document.getElementById('monClass6').value,
        document.getElementById('monClass7').value
    ];
    var tueClasses = [
        document.getElementById('tueClass1').value,
        document.getElementById('tueClass2').value,
        document.getElementById('tueClass3').value,
        document.getElementById('tueClass4').value,
        document.getElementById('tueClass5').value,
        document.getElementById('tueClass6').value,
        document.getElementById('tueClass7').value
    ];
    var wedClasses = [
        document.getElementById('wedClass1').value,
        document.getElementById('wedClass2').value,
        document.getElementById('wedClass3').value,
        document.getElementById('wedClass4').value,
        document.getElementById('wedClass5').value,
        document.getElementById('wedClass6').value,
        document.getElementById('wedClass7').value
    ];
    var thuClasses = [
        document.getElementById('thuClass1').value,
        document.getElementById('thuClass2').value,
        document.getElementById('thuClass3').value,
        document.getElementById('thuClass4').value,
        document.getElementById('thuClass5').value,
        document.getElementById('thuClass6').value,
        document.getElementById('thuClass7').value
    ];
    var friClasses = [
        document.getElementById('friClass1').value,
        document.getElementById('friClass2').value,
        document.getElementById('friClass3').value,
        document.getElementById('friClass4').value,
        document.getElementById('friClass5').value,
        document.getElementById('friClass6').value,
        document.getElementById('friClass7').value
    ];
    var satClasses = [
        document.getElementById('satClass1').value,
        document.getElementById('satClass2').value,
        document.getElementById('satClass3').value,
        document.getElementById('satClass4').value,
        document.getElementById('satClass5').value,
        document.getElementById('satClass6').value,
        document.getElementById('satClass7').value
    ];

    localStorage.setItem('sunClasses', JSON.stringify(sunClasses));
    localStorage.setItem('monClasses', JSON.stringify(monClasses));
    localStorage.setItem('tueClasses', JSON.stringify(tueClasses));
    localStorage.setItem('wedClasses', JSON.stringify(wedClasses));
    localStorage.setItem('thuClasses', JSON.stringify(thuClasses));
    localStorage.setItem('friClasses', JSON.stringify(friClasses));
    localStorage.setItem('satClasses', JSON.stringify(satClasses));

    loadClasses()

}

// Local Storageから教科情報を読み込んで表示する関数
function loadClasses() {
    var sunClasses = JSON.parse(localStorage.getItem('sunClasses')) || ["", "", ""];
    var monClasses = JSON.parse(localStorage.getItem('monClasses')) || ["", "", ""];
    var tueClasses = JSON.parse(localStorage.getItem('tueClasses')) || ["", "", ""];
    var wedClasses = JSON.parse(localStorage.getItem('wedClasses')) || ["", "", ""];
    var thuClasses = JSON.parse(localStorage.getItem('thuClasses')) || ["", "", ""];
    var friClasses = JSON.parse(localStorage.getItem('friClasses')) || ["", "", ""];
    var satClasses = JSON.parse(localStorage.getItem('satClasses')) || ["", "", ""];

    document.getElementById('sunClass1').value = sunClasses[0];
    document.getElementById('sunClass2').value = sunClasses[1];
    document.getElementById('sunClass3').value = sunClasses[2];
    document.getElementById('sunClass4').value = sunClasses[3];
    document.getElementById('sunClass5').value = sunClasses[4];
    document.getElementById('sunClass6').value = sunClasses[5];
    document.getElementById('sunClass7').value = sunClasses[6];

    document.getElementById('monClass1').value = monClasses[0];
    document.getElementById('monClass2').value = monClasses[1];
    document.getElementById('monClass3').value = monClasses[2];
    document.getElementById('monClass4').value = monClasses[3];
    document.getElementById('monClass5').value = monClasses[4];
    document.getElementById('monClass6').value = monClasses[5];
    document.getElementById('monClass7').value = monClasses[6];

    document.getElementById('tueClass1').value = tueClasses[0];
    document.getElementById('tueClass2').value = tueClasses[1];
    document.getElementById('tueClass3').value = tueClasses[2];
    document.getElementById('tueClass4').value = tueClasses[3];
    document.getElementById('tueClass5').value = tueClasses[4];
    document.getElementById('tueClass6').value = tueClasses[5];
    document.getElementById('tueClass7').value = tueClasses[6];

    document.getElementById('wedClass1').value = wedClasses[0];
    document.getElementById('wedClass2').value = wedClasses[1];
    document.getElementById('wedClass3').value = wedClasses[2];
    document.getElementById('wedClass4').value = wedClasses[3];
    document.getElementById('wedClass5').value = wedClasses[4];
    document.getElementById('wedClass6').value = wedClasses[5];
    document.getElementById('wedClass7').value = wedClasses[6];

    document.getElementById('thuClass1').value = thuClasses[0];
    document.getElementById('thuClass2').value = thuClasses[1];
    document.getElementById('thuClass3').value = thuClasses[2];
    document.getElementById('thuClass4').value = thuClasses[3];
    document.getElementById('thuClass5').value = thuClasses[4];
    document.getElementById('thuClass6').value = thuClasses[5];
    document.getElementById('thuClass7').value = thuClasses[6];

    document.getElementById('friClass1').value = friClasses[0];
    document.getElementById('friClass2').value = friClasses[1];
    document.getElementById('friClass3').value = friClasses[2];
    document.getElementById('friClass4').value = friClasses[3];
    document.getElementById('friClass5').value = friClasses[4];
    document.getElementById('friClass6').value = friClasses[5];
    document.getElementById('friClass7').value = friClasses[6];

    document.getElementById('satClass1').value = satClasses[0];
    document.getElementById('satClass2').value = satClasses[1];
    document.getElementById('satClass3').value = satClasses[2];
    document.getElementById('satClass4').value = satClasses[3];
    document.getElementById('satClass5').value = satClasses[4];
    document.getElementById('satClass6').value = satClasses[5];
    document.getElementById('satClass7').value = satClasses[6];

    //   displayClasses([sunClasses[0], monClasses[0], tueClasses[0], wedClasses[0], thuClasses[0], friClasses[0], satClasses[0]]);
    displayClasses([sunClasses[i], monClasses[i], tueClasses[i], wedClasses[i], thuClasses[i], friClasses[i], satClasses[i]]);

}

function next_day() {
    i += 1
    i = i % 7;
    you = ["日", "月", "火", "水", "木", "金", "土"][i];
    document.getElementById('you').innerText = you;
    
    console.log(i)
    loadClasses()
}
