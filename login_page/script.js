// signup_btn 클릭 시 페이지 전환
document.addEventListener("DOMContentLoaded", function() {
    // signup_btn 요소를 찾습니다.
    const signupBtn = document.getElementById("signup_btn");
    if (signupBtn) {
        // signup_btn 클릭 시
        signupBtn.addEventListener("click", function() {
            // 페이지를 index.html로 이동합니다.
            window.location.href = "../new_basicInfo_page/index.html";
        });
    }
}); 