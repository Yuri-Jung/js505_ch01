console.log("------자바 스크립트의 제어문------");

// 자바의 제어문과 동일함
// if, if ~ else, else if, switch ~ case

// prompt() 는 웹페이지에서 동작하므로 웹 브라우저에서 js파일을 로딩하여 실행해야 함.

let userNumber = prompt("문자를 입력하세요");

if(userNumber !== null){
    if(userNumber %3 === 0 )
        alert("3의 배수입니다.");
    else
        alert("3의 배수가 아닙니다.");
}
else
    alert("입력이 취소되었습니다.");

let score = prompt("점수를 입력해주세요");
// score = Number(score); 원래는 이렇게 해야 하는뎅 간편하게 할 수 있다.

if(score>=90){
    console.log(`점수 : ${score}\n등급 : A`);
}
else if(score>=80){
    console.log(`점수 : ${score}\n등급 : B`);
}
else if(score>=70){
    console.log(`점수 : ${score}\n등급 : C`);
}
else if(score>=60){
    console.log(`점수 : ${score}\n등급 : D`);
}
else{
    console.log(`점수 : ${score}\n등급 : F`);
}


//switch문

let day = new Date().getDay();  //오늘 요일을 숫자로 가져온다.

switch (day){
    case 0:
        console.log(`일요일`);
        break;
    case 1:
        console.log(`월요일`);
        break;
    case 2:
        console.log(`화요일`);
        break;
    case 3:
        console.log(`수요일`);
        break;
    case 4:
        console.log(`목요일`);
        break;
    case 5:
        console.log(`금요일`);
        break;
    case 6:
        console.log(`토요일`);
        break;
}

// while문 자바와 사용법이 동일

let count = 0;

while (count < 10){
    console.log(`count의 값 : ${count}`);
    count++;
}














