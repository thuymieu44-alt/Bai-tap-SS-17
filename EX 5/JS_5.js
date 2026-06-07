let inEmail = document.querySelector('.inEmail input');
let inPassword = document.querySelector('.inPassword input');
 let button = document.querySelector('.button');
const inForm = document.querySelector('form');
inForm.addEventListener('button', (event) => {
    event.preventDefault();
    console.log('the form')
});
button.onclick = function() {
    if (inEmail.value === "huanrose@gmail.com" && inPassword.value === "123456") {
        alert("Đăng nhập thành công");
    } else {
        alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
    }
};