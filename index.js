// 변수의 선언
let dayArray = ["일","월","화","수","목","금","토"];
let myDate;
let year;
let month;
let date;
let hour;
let minute;

setInterval(function(){
    myDate = new Date();
    year = myDate.getFullYear() + "년 ";
    month = myDate.getMonth() + 1 + "월 ";
    date = myDate.getDate() + "일 ";
    day = dayArray[myDate.getDay()] + "요일 ";
    hour = myDate.getHours() + ":"
    minute = myDate.getMinutes();
    document.getElementById("time").innerText = year + month + date + day + hour + minute;
}, 1000);

// D-day
// D-day 계산 함수
function getDday(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target.getTime() - now.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    return day;
}

// D-day 출력 함수
function printDday(targetDate) {
const dday = getDday(targetDate);
if (dday > 0) {
    document.getElementById('dday').innerHTML = `D-${dday}`;
} else if (dday === 0) {
    document.getElementById('dday').innerHTML = 'D-day';
} else {
    document.getElementById('dday').innerHTML = `D+${Math.abs(dday)}`;
}
}

// 6월 20일 D-day 출력
printDday('2023-06-21');

// 애니메이션
window.onload = function () {
    const element = document.getElementById("img");
    const totalNum = 8;
    let frame = 0;
    let height;

    element.setAttribute("src", "./img/0.png");

    window.addEventListener("scroll", function(){
        height = Math.floor(window.scrollY / (document.body.clientHeight - window.innerHeight) * 100);
        frame = Math.floor(totalNum * height / 100); //현재 프레임 계산
        
        element.setAttribute("src", "./img/" + frame + ".png");
    });
}

