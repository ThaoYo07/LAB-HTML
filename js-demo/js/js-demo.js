// me.!me.!me.!
// var btnsubmit = document.querySelector("[nam='bnt-submit']");
// console.log(btnsubmit);
// btnsubmit.onclick = function () {
//     var txtUsername = document.querySelector("[name='username']");
//     alert(txtUsername.value);
// }
//
// var txtUsername = document.forms["login-form"]["username"];
// if(txtUsername.value.length == 0){
//     msgUsername.innerHTML = "Vui lòng nhập Username";
//
// }

// master.!master.!master.!
var btnSubmit = document.querySelector("[name='btn-submit']");
btnSubmit.onclick = function () {
    var txtUsername = document.querySelector("[name='username']");
    var pwdPassword = document.querySelector("[name='password']");
    alert("Username: " + txtUsername.value + " - Password: " + pwdPassword.value);
};


// lấy ra phần tử có tên là "btn-submit" ở trong form có tên là "login-form";
var btnSubmit = document.forms["login-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtUsername = document.forms["login-form"]["username"];
    var parentOfText = txtUsername.parentNode;
    console.log(parentOfText.lastChild);
    var pwdPassword = document.forms["login-form"]["password"];
    var msgUsername = txtUsername.nextElementSibling;
    var msgPassword = pwdPassword.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "Vui lòng nhập username.";
        msgUsername.classList.remove("msg-success");
        msgUsername.classList.add("msg-error");
    } else if (txtUsername.value.length < 5) {
        msgUsername.innerHTML = "Username quá ngắn, vui lòng nhập ít nhất 5 ký tự.";
        msgUsername.classList.remove("msg-success");
        msgUsername.classList.add("msg-error");
    } else if (txtUsername.value.length > 30) {
        msgUsername.innerHTML = "Username quá dài, vui lòng nhập nhiều nhất 30 ký tự.";
        msgUsername.classList.remove("msg-success");
        msgUsername.classList.add("msg-error");
    } else {
        msgUsername.innerHTML = "Hợp lệ.";
        msgUsername.classList.remove("msg-error");
        msgUsername.classList.add("msg-success");
    }
}