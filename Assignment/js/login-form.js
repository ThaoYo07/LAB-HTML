var btnSubmit = document.forms['login-form']['btn-submit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        login();
    }
};

function login() {
    var email = document.forms['login-form']['email'].value;
    var password = document.forms['login-form']['password'].value;

    var account = {
        email: email,
        password: password,
    };
    var sendAccount = JSON.stringify(account);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201){
            var reponseData = JSON.parse(xhr.responseText);
            alert('Login Successful with ID' + reponseData.token);
            localStorage.setItem('token-key', reponseData.token);
            document.forms['login-form'].reset();
        } else if (xhr.readyState == 4){
            var reponseData = JSON.parse(xhr.responseText);
            alert('Login Fails, Please try again!' + xhr.responseText);
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-001.appspot.com/_api/v2/members/authentication', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendAccount);
}

function validateForm() {
    var isValid = true;

    var isValidEmail = true;
    var pwdPassword = document.forms['login-form']['password'];
    var msgPassword = pwdPassword.nextElementSibling;
    if (pwdPassword.value == null || pwdPassword.value.length == 0) {
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        msgPassword.innerHTML = 'Password is required!';
        isValidPassword = false;
        // isValid = false;
        // return isValid;
    } else {
        msgPassword.classList.remove('msg-error');
        msgPassword.classList.add('msg-success');
        msgPassword.innerHTML = 'Ok!';
    }

    var isValidPassword = true;
    var txtEmail = document.forms['login-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
        // isValid = false;
        // return isValid;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok!';
    }

    isValid = isValidEmail && isValidPassword;
    return isValid;
}