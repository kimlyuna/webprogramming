const readline= require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

rl.question('프로그래밍 언어 이름을 입력하시오. : ', function(data){
    //입력값에 대한 처리
    console.log('가장 좋아하는 프로그래밍 언어는 '+ data +'입니다.');
    rl.close();
});
