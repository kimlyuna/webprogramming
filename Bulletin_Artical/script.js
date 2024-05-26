// HTML 요소를 가져옵니다.
var commentBottom = document.querySelector('.commentbottom'); 

// 대상 요소가 존재하는지 확인합니다.
if (commentBottom) {
    // 클릭 이벤트를 추가합니다.
    commentBottom.addEventListener('click', function() {
        // .commentnew-form의 display 속성을 변경하여 화면에 표시합니다.
        var commentForm = document.querySelector('.commentnew-form');
        commentForm.style.display = 'block'; // 화면에 표시합니다.
    });
} else {
    console.error('commentbottom 요소를 찾을 수 없습니다.');
}