var userName ='이창현';
var userPw='1111';

function account(userId,userPw)
{
    console.log(userId);
    console.log(userPw);
    var savedName ='이창현'
    var savedPw='1111';


    if(userPw==undefined){
        userPw='1111';
    }
    
    if(userId==savedName)
    {
        if(userPw==savedPw)
        {
            console.log('반갑습니다.'+userId+'님');
        }
    }
}
account(userName);