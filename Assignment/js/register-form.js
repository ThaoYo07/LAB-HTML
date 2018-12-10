var btnSubmit = document.forms['register-form']['btn-submit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        register();
    }
};

function register() {
    btnSubmit.onclick = function () {
        var firstName = document.forms['register-form']['firstName'].value;
        var lastName = document.forms['register-form']['lastName'].value;
        var password = document.forms['register-form']['password'].value;
        var address = document.forms['register-form']['address'].value;
        var phone = document.forms['register-form']['phone'].value;
        var avatar = document.forms['register-form']['avatar'].value;
        var gender = document.forms['register-form']['gender'].value;
        var email = document.forms['register-form']['email'].value;
        var birthday = document.forms['register-form']['birthday'].value;
        var registerInfomation = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            address: address,
            phone: phone,
            avatar: avatar,
            gender: gender,
            email: email,
            birthday: birthday
        };
        var sendRegister = JSON.stringify(registerInfomation);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            var reponseData = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == 201) {
                alert('Register Successful');
                document.forms['register-form'].reset();
            } else if (xhr.readyState == 4){
                var reponseData = JSON.parse(xhr.responseText);
                alert('Register Fails, Please try again!' + xhr.responseText);
            }
        };
        xhr.open('POST', 'https://2-dot-backup-server-001.appspot.com/_api/v2/members', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(sendRegister);
    };
}

function validateForm() {
    var isValid = true;
    var isValidFirstName = true;
    var isValidLastName = true;
    var isValidPassword = true;
    var isValidConfirmPassword = true;
    var isValidAddress = true;
    var isValidPhone = true;
    var isValidAvatar = true;
    // var isValidGender = true;
    var isValidEmail = true;
    // var isValidBirthday = true;

    var txtFirstName = document.forms['register-form']['firstName'];
    var msgFirstName = txtFirstName.nextElementSibling;
    if (txtFirstName.value == null || txtFirstName.value.length == 0) {
        msgFirstName.classList.remove('msg-success');
        msgFirstName.classList.add('msg-error');
        msgFirstName.innerHTML = 'First name is required!';
        isValidFirstName = false;
        // isValid = false;
        // return isValid;
    } else {
        msgFirstName.classList.remove('msg-error');
        msgFirstName.classList.add('msg-success');
        msgFirstName.innerHTML = 'Ok!';
    }

    var txtLastName = document.forms['register-form']['lastName'];
    var msgLastName = txtLastName.nextElementSibling;
    if (txtLastName.value == null || txtLastName.value.length == 0) {
        msgLastName.classList.remove('msg-success');
        msgLastName.classList.add('msg-error');
        msgLastName.innerHTML = 'Last name is required!';
        isValidLastName = false;
        // isValid = false;
        // return isValid;
    } else {
        msgLastName.classList.remove('msg-error');
        msgLastName.classList.add('msg-success');
        msgLastName.innerHTML = 'Ok!';
    }

    var pwdPassword = document.forms['register-form']['password'];
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

    var pwdConfirmPassword = document.forms['register-form']['confirmPassword'];
    var msgConfirmPassword = pwdConfirmPassword.nextElementSibling;
    if (pwdConfirmPassword == null || pwdConfirmPassword.value.length == 0 || pwdConfirmPassword.value != pwdPassword.value) {
        msgConfirmPassword.classList.remove('msg-success');
        msgConfirmPassword.classList.add('msg-error');
        msgConfirmPassword.innerHTML = 'Confirm password doesn\'t match!';
        isValidConfirmPassword = false;
        // isValid = false;
        // return isValid;
    } else {
        msgConfirmPassword.classList.remove('msg-error');
        msgConfirmPassword.classList.add('msg-success');
        msgConfirmPassword.innerHTML = 'Ok!';
    }

    var txtAddress = document.forms['register-form']['address'];
    var msgAddress = txtAddress.nextElementSibling;
    if (txtAddress.value == null || txtAddress.value.length == 0) {
        msgAddress.classList.remove('msg-success');
        msgAddress.classList.add('msg-error');
        msgAddress.innerHTML = 'Address is missing!';
        isValidAddress = false;
        // isValid = false;
        // return isValid;
    } else {
        msgAddress.classList.remove('msg-error');
        msgAddress.classList.add('msg-success');
        msgAddress.innerHTML = 'Ok!';
    }

    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is missing!';
        isValidPhone = false;
        // isValid = false;
        // return isValid;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok!';
    }

    var txtAvatar = document.forms['register-form']['avatar'];
    var msgAvatar = txtAvatar.nextElementSibling;
    if (txtAvatar.value == null || txtAvatar.value.length == 0) {
        msgAvatar.classList.remove('msg-success');
        msgAvatar.classList.add('msg-error');
        msgAvatar.innerHTML = 'You should add avatar!';
        isValidAvatar = false;
        // isValid = false;
        // return isValid;
    } else {
        msgAvatar.classList.remove('msg-error');
        msgAvatar.classList.add('msg-success');
        msgAvatar.innerHTML = 'Ok!';
    }

    var txtEmail = document.forms['register-form']['email'];
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

    isValid = isValidFirstName && isValidLastName && isValidPassword && isValidConfirmPassword &&
         isValidAddress && isValidPhone && isValidAvatar && isValidEmail;
    return isValid;
}